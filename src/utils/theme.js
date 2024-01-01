// Set default them when first time visit;
if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === "light") {
	localStorage.setItem('theme', 'dark');
}

// Set default volume when first time visit;
if (localStorage.getItem('volume') === null) {
	localStorage.setItem('volume', true);
}
