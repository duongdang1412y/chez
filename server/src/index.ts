// Import library;
import { Context, Env, Hono } from 'hono';
import { html, raw } from 'hono/html';
import { cors } from 'hono/cors';

// Get client HTML content;
const htmlContent = async (): Promise<string> => {
	// Create new glob to find html file;
	const glob = new Bun.Glob('*.html');

	// Scan client HTML name;
	const htmlName: string[] = await Array.fromAsync(glob.scan({ cwd: './' }));

	// Read HTML content;
	const content = Bun.file(`./${htmlName[0]}`);

	// Return text content;
	return await content.text();
};

// Create hono server;
const hono: Hono<Env, {}, '/'> = new Hono();

// Entry point;
(async () => {
	// Enable cors only for development
	if (Bun.env.NODE_ENV === 'development') {
		hono.use('/api/*', cors({ origin: '*' }));
	}

	// Only for production;
	if (Bun.env.NODE_ENV === 'production') {
		// Get content of client HTML;
		const clientContent: string = await htmlContent();

		// Entry router;
		hono.get('/', (context: Context<Env, '/', {}>): any => {
			return context.html(html`${raw(clientContent)}`);
		});
	}
})();

// Export server port;
export default {
	port: 3102,
	fetch: hono.fetch,
};
