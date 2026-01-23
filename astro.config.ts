// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import swup from "@swup/astro";
import githubLight from "shiki/themes/github-light.mjs";

import GFM from "remark-gfm";
import ins from "remark-ins";
import mark from "remark-flexible-markers";
import CJK from "remark-cjk-friendly";
import CJKStrikethrough from "remark-cjk-friendly-gfm-strikethrough";
import math from "remark-math";
import gemoji from "remark-gemoji";
import footnote from "remark-footnotes-extra";
import { remarkExtendedTable as table, extendedTableHandlers as tableHandler } from "remark-extended-table";
import { rehypeHeadingIds as ids } from "@astrojs/markdown-remark";
import anchor from "rehype-autolink-headings";
import links from "rehype-external-links";
import katex from "rehype-katex";
import sectionize from "@hbsnow/rehype-sectionize";

import spoiler from "./src/utils/remark/spoiler";
import attr from "./src/utils/remark/attr";
import abbr from "./src/utils/remark/abbr";
import ruby from "./src/utils/remark/ruby";
import alerts from "./src/utils/remark/github-alert";
import wrapper from "./src/utils/remark/table-wrapper";
import copy from "./src/utils/code-copy";
import reading from "./src/utils/remark/reading";
import figure from "./src/utils/remark/figure";

import siteConfig from "./site.config";

// https://astro.build/config
export default defineConfig({
	site: "https://thoughtlite.com",
	trailingSlash: "never",
	i18n: {
		...siteConfig.i18n,
		routing: {
			redirectToDefaultLocale: false,
			prefixDefaultLocale: false
		}
	},
	markdown: {
		remarkPlugins: [
			[GFM, { singleTilde: false }],
			ins,
			mark,
			spoiler,
			attr,
			CJK,
			[CJKStrikethrough, { singleTilde: false }],
			math,
			gemoji,
			footnote,
			abbr,
			[table, { colspanWithEmpty: true }],
			wrapper,
			ruby,
			[alerts, { typeFormat: "capitalize" }],
			reading
		],
		remarkRehype: {
			footnoteLabel: null,
			footnoteLabelTagName: "p",
			footnoteLabelProperties: {
				className: ["hidden"]
			},
			handlers: {
				...tableHandler
			}
		},
		rehypePlugins: [
			ids,
			[anchor, { behavior: "wrap" }],
			[links, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
			katex,
			figure,
			sectionize
		],
		smartypants: false,
		shikiConfig: {
			themes: {
				light: {
					...githubLight,
					colorReplacements: {
						"#fff": "var(--block-color)"
					}
				},
				dark: "dark-plus"
			},
			transformers: [
				copy({
					duration: 1500
				})
			]
		}
	},
	vite: {
		// @ts-expect-error
		plugins: [yaml(), tailwindcss()]
	},
	integrations: [
		svelte(),
		mdx(),
		sitemap(),
		swup({
			globalInstance: true,
			preload: false,
			smoothScrolling: false,
			progress: true
		})
	],
	experimental: {
		fonts: [
			{
				name: "Noto Serif",
				provider: fontProviders.google(),
				weights: [400, 700],
				fallbacks: ["serif"],
				cssVariable: "--font-noto-serif",
				display: "swap"
			},
			{
				name: "Noto Serif SC",
				provider: fontProviders.google(),
				weights: [400, 700],
				fallbacks: ["serif"],
				cssVariable: "--font-noto-serif-sc",
				display: "swap"
			},
			{
				name: "Playwrite MX",
				provider: fontProviders.google(),
				weights: [100],
				display: "swap",
				fallbacks: ["serif"],
				cssVariable: "--font-playwrite-mx"
			},
			{
				name: "IBM Plex Mono",
				provider: fontProviders.google(),
				display: "swap",
				fallbacks: ["monospace"],
				cssVariable: "--font-ibm-plex-mono"
			},
			{
				name: "IBM Plex Sans",
				provider: fontProviders.google(),
				weights: [400, 600],
				fallbacks: ["system-ui", "sans-serif"],
				cssVariable: "--font-ibm-plex-sans",
				display: "swap"
			}
		]
	}
});
