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
				ko: {
					label: "한국어",
					lang: "ko",
				},
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
				"pt-br": {
					label: "Português",
					lang: "pt-BR",
				},
			},
			sidebar: [
				{
					label: "Blog",
					link: "../blog",
					translations: { ja: "ブログ", ko: "블로그", "zh-CN": "博客" },
				},
				{
					label: "Playground",
					link: "../playground",
					translations: {
						ja: "プレイグラウンド",
						ko: "플레이그라운드",
						"zh-CN": "演练场",
						"pt-BR": "Ambiente de testes",
					},
				},
				{
					label: "Guides",
					translations: { ja: "ガイド", ko: "가이드", "zh-CN": "指南", "pt-BR": "Guias" },
					items: [
						{
							label: "Getting Started",
							link: "/guides/getting-started",
							translations: {
								ja: "はじめる",
								ko: "시작하기",
								"zh-CN": "入门",
								"pt-BR": "Primeiros passos",
							},
						},
						{
							label: "Manual installation",
							link: "/guides/manual-installation",
							translations: {
								ja: "手動インストール",
								ko: "수동 설치",
								"zh-CN": "手动安装",
								"pt-BR": "Instalação manual",
							},
						},
						{
							label: "Configure Biome",
							link: "/guides/configure-biome",
							translations: {
								ja: "Biome の設定",
								ko: "Biome 구성 설정",
								"zh-CN": "配置生物群落",
								"pt-BR": "Configurar Bioma",
							},
						},
						{
							label: "Use Biome in big projects",
							link: "/guides/big-projects",
							translations: {
								ja: "大きなプロジェクトでのBiomeの使用方法",
								ko: "대규모 프로젝트에서 Biome 사용",
								"zh-CN": "大型项目中使用 Biome",
								"pt-BR": "Usando o Biome em projetos grandes",
							},
						},
						{
							label: "Biome in your IDE",
							translations: {
								ja: "Biome をあなたのエディタに導入する",
								ko: "에디터에서 Biome 사용",
								"zh-CN": "编辑器中使用 Biome",
								"pt-BR": "Biome no seu editor",
							},
							items: [
								{
									label: "First-party extensions",
									link: "/guides/editors/first-party-extensions",
									translations: { ko: "퍼스트파티 확장" },
								},
								{
									label: "Third-party extensions",
									link: "/guides/editors/third-party-extensions",
									translations: { ko: "서드파티 확장" },
								},
								{
									label: "Integrate Biome in an editor extension",
									link: "/guides/editors/create-a-extension",
									translations: { ko: "에디터 확장에 Biome 통합" },
								},
							],
						},
						{
							label: "Integrate Biome with your VCS",
							link: "/guides/integrate-in-vcs",
							translations: {
								ja: "Biome をあなたの VCS と統合する",
								ko: "Biome을 VCS와 통합",
								"zh-CN": "与版本控制系统集成",
								"pt-BR": "Integrando o Biome com o seu VCS",
							},
						},
						{
							label: "Migrate from ESLint & Prettier",
							link: "/guides/migrate-eslint-prettier",
							translations: {
								ja: "ESLintとPrettierからの移行",
								ko: "ESLint 및 Prettier에서 마이그레이션",
							},
						},
					],
				},
				{
					label: "Tools",
					translations: {
						ja: "ツール",
						ko: "도구",
						"zh-CN": "工具",
						"pt-BR": "Ferramentas",
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
										ko: "소개",
										"zh-CN": "介绍",
										"pt-BR": "Introdução",
									},
								},
								{
									label: "Import Sorting",
									link: "/analyzer/import-sorting",
									translations: {
										ja: "Import文のソート",
										ko: "Import 정렬",
										"zh-CN": "导入排序",
										"pt-BR": "Ordenação de importações",
									},
								},
							],
							translations: {
								ja: "Analyzer",
								ko: "애널라이저",
								"zh-CN": "分析器",
								"pt-BR": "Analisador",
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
										ko: "소개",
										"zh-CN": "介绍",
										"pt-BR": "Introdução",
									},
								},
								{
									label: "Differences with Prettier",
									link: "/formatter/differences-with-prettier",
									translations: {
										ja: "Prettier との違い",
										ko: "Prettier와 다른 점",
										"zh-CN": "与 Prettier 的区别",
										"pt-BR": "Diferenças em relação ao Prettier",
									},
								},
								{
									label: "Formatter Option Philosophy",
									link: "/formatter/option-philosophy",
									translations: {
										ja: "Formatterオプションに対する考え方",
										ko: "포매터 옵션 철학",
										"zh-CN": "格式化配置理念",
										"pt-BR": "Princípios de configuração",
									},
								},
							],
							translations: {
								ko: "포매터",
								"zh-CN": "格式化程序",
								"pt-BR": "Formatador",
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
										ko: "소개",
										"zh-CN": "介绍",
										"pt-BR": "Introdução",
									},
								},
								{
									label: "Rules",
									link: "/linter/rules",
									translations: {
										ja: "ルール",
										ko: "규칙",
										"zh-CN": "规则",
										"pt-BR": "Regras",
									},
								},
								{
									label: "Rules sources",
									link: "/linter/rules-sources",
									translations: { ko: "규칙 소스" },
								},
							],
							translations: { ko: "린터" },
						},
					],
				},
				{
					label: "Reference",
					translations: {
						ja: "リファレンス",
						ko: "레퍼런스",
						"zh-CN": "参考",
						"pt-BR": "Referências",
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
							translations: { ko: "진단" },
						},
						{
							label: "Environment variables",
							link: "/reference/environment-variables",
							translations: { ko: "환경 변수" },
						},
						{
							label: "Reporters",
							link: "/reference/reporters",
							translations: { ko: "리포터" },
						},
						{
							label: "Configuration",
							link: "/reference/configuration",
							translations: {
								ja: "設定",
								ko: "구성 설정",
								"zh-CN": "配置",
								"pt-BR": "Configuração",
							},
						},
						{
							label: "VSCode extension",
							link: "/reference/vscode",
							translations: {
								ja: "VSCode拡張機能",
								ko: "VSCode 확장",
								"zh-CN": "VSCode 扩展",
								"pt-BR": "Extensão do VSCode",
							},
						},
						{
							label: "Zed extension",
							link: "/reference/zed",
							badge: "new",
							translations: {
								ja: "Zed拡張機能",
								ko: "Zed 확장",
								"zh-CN": "Zed 扩展",
								"pt-BR": "Extensão do Zed",
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
					translations: { ja: "レシピ", ko: "레서피", "zh-CN": "实例", "pt-BR": "Receitas" },
					items: [
						{
							label: "Continuous Integration",
							link: "/recipes/continuous-integration",
							translations: {
								ja: "継続的インテグレーション",
								ko: "지속적 통합",
								"zh-CN": "持续集成",
								"pt-BR": "Integração Contínua",
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
								ko: "소셜 배지",
							},
						},
					],
				},
				{
					label: "Internals",
					translations: {
						ja: "内部原理",
						ko: "내부 원리",
						"zh-CN": "内部原理",
						"pt-BR": "Aspectos Internos",
					},
					items: [
						{
							label: "Philosophy",
							link: "/internals/philosophy",
							translations: {
								ja: "理念",
								ko: "철학",
								"zh-CN": "理念",
								"pt-BR": "Filosofia",
							},
						},
						{
							label: "Language support",
							link: "/internals/language-support",
							translations: {
								ja: "言語サポート",
								ko: "언어 지원",
								"zh-CN": "语言支持",
								"pt-BR": "Suporte de linguagens",
							},
						},
						{
							label: "Architecture",
							link: "/internals/architecture",
							translations: {
								ja: "アーキテクチャ",
								ko: "아키텍처",
								"zh-CN": "架构",
								"pt-BR": "Arquitetura",
							},
						},
						{
							label: "Credits",
							link: "/internals/credits",
							translations: {
								ja: "クレジット",
								ko: "크레딧",
								"zh-CN": "鸣谢",
								"pt-BR": "Créditos",
							},
						},
						{
							label: "Versioning",
							link: "/internals/versioning",
							translations: {
								ja: "バージョニング",
								ko: "버전 관리",
								"zh-CN": "版本控制",
								"pt-BR": "Versionamento",
							},
						},
						{
							label: "Changelog",
							link: "/internals/changelog",
							translations: {
								ko: "변경 내역",
								"zh-CN": "更新日志",
								"pt-BR": "Alterações",
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
