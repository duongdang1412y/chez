// Import library;
import fs from 'fs';
import path from 'path';
import UglifyJS from 'uglify-js';
import { minify } from 'minify';

// Assets path;
const assetsPath = './dist/assets/';

// Random string;
function randomString(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	let result = '';

	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}

	return result;
}

// Read temp folder;
fs.readdir('./temp', (err, files) => {
	if (err) {
		console.error('Error when read temp folder:', err);
		return;
	}

	// Remove all file in temp folder except .gitkeep;
	files.forEach((file) => {
		if (file !== '.gitkeep') {
			const filePath = path.join('./temp', file);
			fs.unlink(filePath, (err) => {
				if (err) {
					console.error(`Error when remove file ${filePath}:`, err);
				}
			});
		}
	});
});

// Read bundle server folder;
fs.readdir('./server/dist', (err, files) => {
	if (err) {
		return;
	}

	// Remove all file in bundle server folder except index.js;
	files.forEach((file) => {
		if (file !== 'index.js') {
			const filePath = path.join('./server/dist', file);
			fs.unlink(filePath, (err) => {
				if (err) {
					console.error(`Error when remove file ${filePath}:`, err);
				}
			});
		}
	});
});

// Read the list of files in the directory;
fs.readdir(assetsPath, async (err, files) => {
	if (err) {
		console.error('Error reading the directory:', err);
		return;
	}

	// Read html data;
	let htmlData;
	try {
		htmlData = fs.readFileSync(`${assetsPath}../index.html`, 'utf-8');
	} catch (err) {
		console.error("Can't read html file:", err);
		return;
	}

	// Find the javascript file;
	const jsFile = files.find(
		(file) => path.extname(file).toLowerCase() === '.js'
	);

	// Find the css file;
	const cssFile = files.find(
		(file) => path.extname(file).toLowerCase() === '.css'
	);

	// If can not find assets file, exit;
	if (!jsFile || !cssFile) {
		console.log('No assets file found in the directory.');
		return;
	}

	try {
		// Read the JavaScript file;
		const jsContent = fs.readFileSync(`${assetsPath}${jsFile}`, 'utf8');

		// Minify the JavaScript code;
		let minifyJsContent;
		try {
			minifyJsContent = UglifyJS.minify(jsContent);
		} catch (err) {
			console.error(`Can't minify ${jsFile}:`, err);
		}

		// Find and replace the script tag;
		const scriptRegex =
			/<script type="module" crossorigin src="\/assets\/index-[\w\d]+\.js"><\/script>/;
		htmlData = htmlData.replace(scriptRegex, '');

		// Create a new script tag with the minified JavaScript code;
		const scriptReplacement = `<script type="module" crossorigin>${minifyJsContent.code}</script>`;

		// Add the new script tag to HTML;
		const headCloseTagIndex = htmlData.indexOf('</head>');
		htmlData = [
			htmlData.slice(0, headCloseTagIndex),
			scriptReplacement,
			htmlData.slice(headCloseTagIndex),
		].join('');
	} catch (err) {
		console.error(`Error process ${jsFile}:`, err);
	}

	try {
		// Minify the CSS code;
		let minifyCssContent;
		try {
			minifyCssContent = await minify(`${assetsPath}${cssFile}`, {
				css: {
					compatibility: '*',
				},
			});
		} catch (err) {
			console.error(`Can't minify ${cssFile}:`, err);
		}

		// Find and replace the link tag for CSS;
		const styleRegex =
			/<link rel="stylesheet" crossorigin href="\/assets\/index-[\w\d]+\.css">/;
		htmlData = htmlData.replace(styleRegex, '');

		// Create a new style tag with the minified CSS code;
		const styleReplacement = `<style>${minifyCssContent}</style>`;

		// Add the new style tag to HTML;
		const headCloseTagIndex = htmlData.indexOf('</head>');
		htmlData = [
			htmlData.slice(0, headCloseTagIndex),
			styleReplacement,
			htmlData.slice(headCloseTagIndex),
		].join('');
	} catch (err) {
		console.error(`Error process ${cssFile}:`, err);
	}

	// Write to temp HTML;
	fs.writeFileSync('./temp/temp.html', htmlData);

	// Minify temp HTML;
	let tempHTML;
	try {
		tempHTML = await minify(`${assetsPath}../../temp/temp.html`, {
			html: {
				removeComments: true,
				removeCommentsFromCDATA: true,
				removeCDATASectionsFromCDATA: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeEmptyElements: false,
				removeOptionalTags: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				minifyJS: false,
				minifyCSS: false,
			},
		});
	} catch (err) {
		console.error(`${assetsPath}../../temp/temp.html`, err);
	}

	// Write to final HTML;
	fs.writeFileSync('./temp/index.html', tempHTML);

	// If server bundle folder not exist then create it;
	if (!fs.existsSync('./server/dist/')) {
		fs.mkdirSync('./server/dist/');
	}

	// Move to bundle server folder;
	fs.renameSync('./temp/index.html', `./server/dist/${randomString(6)}.html`);

	// Remove temp HTML
	fs.unlinkSync('./temp/temp.html');
});
