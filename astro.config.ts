import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import { searchForWorkspaceRoot } from "vite";
import { version as biomeVersion } from "./node_modules/@biomejs/wasm-web/package.json";
import { version as prettierVersion } from "./node_modules/prettier/package.json";
import { bundledLanguages } from "./node_modules/shiki";
import { rehypeAutolink } from "./plugins/rehype-autolink";

const site = "https://biomejs.dev";
// https://astro.build/config
export default defineConfig({
	site,
	output: "static",

	compressHTML: true,

	integrations: [
		react(),
		starlight({
			title: "Biome",
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				ja: {
					label: "日本語",
					lang: "ja",
				},
				"pt-br": {
					label: "Português",
					lang: "pt-BR",
				},
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			sidebar: [
				{
					label: "Blog",
					link: "../blog",
					translations: { ja: "ブログ", "zh-CN": "博客" },
				},
				{
					label: "Playground",
					link: "../playground",
					translations: {
						ja: "プレイグラウンド",
						"pt-BR": "Ambiente de testes",
						"zh-CN": "演练场",
					},
				},
				{
					label: "Guides",
					translations: { ja: "ガイド", "pt-BR": "Guias", "zh-CN": "指南" },
					items: [
						{
							label: "Getting Started",
							link: "/guides/getting-started",
							translations: {
								ja: "はじめる",
								"pt-BR": "Primeiros passos",
								"zh-CN": "入门",
							},
						},
						{
							label: "Manual installation",
							link: "/guides/manual-installation",
							translations: {
								ja: "手動インストール",
								"pt-BR": "Instalação manual",
								"zh-CN": "手动安装",
							},
						},
						{
							label: "Configure Biome",
							link: "/guides/configure-biome",
							translations: {
								ja: "Biome の設定",
								"pt-BR": "Configurar Bioma",
								"zh-CN": "配置生物群落",
							},
						},
						{
							label: "Use Biome in big projects",
							link: "/guides/big-projects",
							translations: {
								ja: "大きなプロジェクトでのBiomeの使用方法",
								"pt-BR": "Usando o Biome em projetos grandes",
								"zh-CN": "大型项目中使用 Biome",
							},
						},
						{
							label: "Biome in your IDE",
							translations: {
								ja: "Biome をあなたのエディタに導入する",
								"pt-BR": "Biome no seu editor",
								"zh-CN": "编辑器中使用 Biome",
							},
							items: [
								{
									label: "First-party extensions",
									link: "/guides/editors/first-party-extensions",
								},
								{
									label: "Third-party extensions",
									link: "/guides/editors/third-party-extensions",
								},
								{
									label: "Integrate Biome in an editor extension",
									link: "/guides/editors/create-a-extension",
								},
							],
						},
						{
							label: "Integrate Biome with your VCS",
							link: "/guides/integrate-in-vcs",
							translations: {
								ja: "Biome をあなたの VCS と統合する",
								"pt-BR": "Integrando o Biome com o seu VCS",
								"zh-CN": "与版本控制系统集成",
							},
						},
						{
							label: "Migrate from ESLint & Prettier",
							link: "/guides/migrate-eslint-prettier",
							translations: {
								ja: "ESLintとPrettierからの移行",
							},
						},
					],
				},
				{
					label: "Tools",
					translations: {
						ja: "ツール",
						"pt-BR": "Ferramentas",
						"zh-CN": "工具",
					},
					items: [
						{
							label: "Analyzer",
							items: [
								{
									label: "Introduction",
									link: "/analyzer",
									translations: {
										ja: "イントロダクション",
										"pt-BR": "Introdução",
										"zh-CN": "介绍",
									},
								},
								{
									label: "Import Sorting",
									link: "/analyzer/import-sorting",
									translations: {
										ja: "Import文のソート",
										"pt-BR": "Ordenação de importações",
										"zh-CN": "导入排序",
									},
								},
							],
							translations: {
								ja: "Analyzer",
								"pt-BR": "Analisador",
								"zh-CN": "分析器",
							},
						},
						{
							label: "Formatter",
							items: [
								{
									label: "Introduction",
									link: "/formatter",
									translations: {
										ja: "イントロダクション",
										"pt-BR": "Introdução",
										"zh-CN": "介绍",
									},
								},
								{
									label: "Differences with Prettier",
									link: "/formatter/differences-with-prettier",
									translations: {
										ja: "Prettier との違い",
										"pt-BR": "Diferenças em relação ao Prettier",
										"zh-CN": "与 Prettier 的区别",
									},
								},
								{
									label: "Formatter Option Philosophy",
									link: "/formatter/option-philosophy",
									translations: {
										ja: "Formatterオプションに対する考え方",
										"pt-BR": "Princípios de configuração",
										"zh-CN": "格式化配置理念",
									},
								},
							],
							translations: {
								"pt-BR": "Formatador",
								"zh-CN": "格式化程序",
							},
						},
						{
							label: "Linter",
							items: [
								{
									label: "Introduction",
									link: "/linter",
									translations: {
										ja: "イントロダクション",
										"pt-BR": "Introdução",
										"zh-CN": "介绍",
									},
								},
								{
									label: "Rules",
									link: "/linter/rules",
									translations: {
										ja: "ルール",
										"pt-BR": "Regras",
										"zh-CN": "规则",
									},
								},
								{
									label: "Rules sources",
									link: "/linter/rules-sources",
								},
							],
						},
					],
				},
				{
					label: "Reference",
					translations: {
						ja: "リファレンス",
						"pt-BR": "Referências",
						"zh-CN": "参考",
					},
					items: [
						{
							label: "CLI",
							link: "/reference/cli",
						},
						{
							label: "Diagnostics",
							link: "/reference/diagnostics",
							badge: "new",
						},
						{
							label: "Environment variables",
							link: "/reference/environment-variables",
						},
						{
							label: "Reporters",
							link: "/reference/reporters",
						},
						{
							label: "Configuration",
							link: "/reference/configuration",
							translations: {
								ja: "設定",
								"pt-BR": "Configuração",
								"zh-CN": "配置",
							},
						},
						{
							label: "VSCode extension",
							link: "/reference/vscode",
							translations: {
								ja: "VSCode拡張機能",
								"pt-BR": "Extensão do VSCode",
								"zh-CN": "VSCode 扩展",
							},
						},
						{
							label: "Zed extension",
							link: "/reference/zed",
							badge: "new",
							translations: {
								ja: "Zed拡張機能",
								"pt-BR": "Extensão do Zed",
								"zh-CN": "Zed 扩展",
							},
						},
						{
							label: "GritQL",
							link: "/reference/gritql",
							badge: "experimental",
						},
					],
				},
				{
					label: "Recipes",
					translations: { ja: "レシピ", "pt-BR": "Receitas", "zh-CN": "实例" },
					items: [
						{
							label: "Continuous Integration",
							link: "/recipes/continuous-integration",
							translations: {
								ja: "継続的インテグレーション",
								"pt-BR": "Integração Contínua",
								"zh-CN": "持续集成",
							},
						},
						{
							label: "Git Hooks",
							link: "/recipes/git-hooks",
						},
						{
							label: "Renovate",
							link: "/recipes/renovate",
						},
						{
							label: "Social Badges",
							link: "/recipes/badges",
							translations: {
								ja: "ソーシャルバッジ",
							},
						},
					],
				},
				{
					label: "Internals",
					translations: {
						ja: "内部原理",
						"pt-BR": "Aspectos Internos",
						"zh-CN": "内部原理",
					},
					items: [
						{
							label: "Philosophy",
							link: "/internals/philosophy",
							translations: {
								ja: "理念",
								"pt-BR": "Filosofia",
								"zh-CN": "理念",
							},
						},
						{
							label: "Language support",
							link: "/internals/language-support",
							translations: {
								ja: "言語サポート",
								"pt-BR": "Suporte de linguagens",
								"zh-CN": "语言支持",
							},
						},
						{
							label: "Architecture",
							link: "/internals/architecture",
							translations: {
								ja: "アーキテクチャ",
								"pt-BR": "Arquitetura",
								"zh-CN": "架构",
							},
						},
						{
							label: "Credits",
							link: "/internals/credits",
							translations: {
								ja: "クレジット",
								"pt-BR": "Créditos",
								"zh-CN": "鸣谢",
							},
						},
						{
							label: "Versioning",
							link: "/internals/versioning",
							translations: {
								ja: "バージョニング",
								"pt-BR": "Versionamento",
								"zh-CN": "版本控制",
							},
						},
						{
							label: "Changelog",
							link: "/internals/changelog",
							translations: {
								"pt-BR": "Alterações",
								"zh-CN": "更新日志",
							},
						},
					],
				},
			],
			logo: {
				light: "./src/assets/svg/logo-light-transparent.svg",
				dark: "./src/assets/svg/logo-dark-transparent.svg",
				replacesTitle: true,
			},
			favicon: "/img/favicon.svg",
			head: [
				{
					tag: "link",
					attrs: {
						rel: "alternate",
						type: "application/rss+xml",
						href: `${site}/feed.xml`,
					},
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/index.css",
			],
			social: {
				discord: "https://biomejs.dev/chat",
				github: "https://github.com/biomejs/biome",
				"x.com": "https://twitter.com/biomejs",
				mastodon: "https://fosstodon.org/@biomejs",
				openCollective: "https://opencollective.com/biome",
				youtube: "https://youtube.com/@Biomejs",
			},
			editLink: {
				baseUrl: "https://github.com/biomejs/website/edit/main/",
			},
			components: {
				SiteTitle: "./src/components/starlight/SiteTitle.astro",
				Sidebar: "./src/components/starlight/Sidebar.astro",
				Hero: "./src/components/starlight/Hero.astro",
				Head: "./src/components/starlight/Head.astro",
			},
		}),
	],

	build: {
		format: "directory",
	},

	markdown: {
		syntaxHighlight: "shiki",
		rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
		shikiConfig: {
			langs: [
				// @ts-expect-error
				{
					...(await bundledLanguages.javascript()).default[0],
					scopeName: "source.cjs",
					aliases: ["cjs"],
				},
			],
		},
	},

	adapter: netlify({
		imageCDN: false,
	}),

	vite: {
		resolve: {
			alias: {
				"@": new URL("./src", import.meta.url).pathname,
			},
		},
		plugins: [],

		worker: {
			format: "es",
		},

		server: {
			fs: {
				// https://vitejs.dev/config/server-options.html#server-fs-allow
				allow: [searchForWorkspaceRoot(process.cwd())],
			},
		},

		define: {
			PRETTIER_VERSION: JSON.stringify(prettierVersion),
			BIOME_VERSION: JSON.stringify(biomeVersion),
		},
	},
});
