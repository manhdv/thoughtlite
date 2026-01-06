import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "ThoughtLite",
	prologue: "If you need a website\nthat loads fast and has great SEO, then Astro is for you.",
	author: {
		name: "Mage",
		email: "hi@your.mail",
		link: "https://thoughtlite.com"
	},
	description: "A modern Astro theme focused on content creation.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["vi"],
		defaultLocale: "vi"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
