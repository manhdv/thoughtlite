import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "ThoughtLite",
	prologue: "I don’t try to win today. I just refuse to lose over 20 years.",
	author: {
		name: "Mage",
		email: "hi@your.mail",
		link: "https://thoughtlite.com"
	},
	description: "Lưu trữ tạm thời các suy nghĩ cá nhân.",
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
