import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ivan Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ivanbouvet12-png.github.io/ivan-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Nunito",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f0eb",
          lightgray: "#e0d9d0",
          gray: "#a89f94",
          darkgray: "#3d3530",
          dark: "#1a1410",
          secondary: "#8b5e3c",
          tertiary: "#c49a6c",
          highlight: "rgba(139, 94, 60, 0.08)",
          textHighlight: "#f0d9c088",
        },
        darkMode: {
          light: "#1a1714",
          lightgray: "#2d2926",
          gray: "#6b6360",
          darkgray: "#c8bfb8",
          dark: "#ede8e3",
          secondary: "#c49a6c",
          tertiary: "#8b5e3c",
          highlight: "rgba(196, 154, 108, 0.1)",
          textHighlight: "#8b5e3c44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config