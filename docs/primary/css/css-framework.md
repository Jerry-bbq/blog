# CSS框架

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) 一个实用优先的 CSS 框架，其中包含诸如、和之类的类，这些类可直接在您的标记中组合以构建任何设计。 flex pt-4 text-center rotate-90。

Tailwind CSS 的工作原理是扫描所有 HTML 文件、JavaScript 组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态 CSS 文件。

它快速、灵活、可靠——无需运行时间。

## ~~Windi CSS~~

[Windi CSS](https://windicss.org/)下一代实用优先的 CSS 框架。Windi CSS支持Tailwind CSS的所有实用程序，无需任何额外配置。

如果您已经熟悉Tailwind CSS，可以将 Windi CSS 视为Tailwind 的按需替代品，它提供更快的加载时间、与 Tailwind v2.0 的完全兼容性以及一系列额外的酷炫功能。通过扫描您的 HTML 和 CSS 并按需生成实用程序，Windi CSS 能够在开发中提供更快的加载时间和快速的 HMR，并且不需要在生产中进行清除。

::: danger 

Windi CSS即将落幕：https://windicss.org/posts/sunsetting.html

旨在探索解决Tailwind 性能问题的可能性。我们高效而强大的按需方法后来启发了 Tailwind 实现他们的“JIT”引擎，这与 Windi CSS 的方法相同。在此过程中，我们深入研究了增强开发人员体验的各种可能性，引入了变体组、快捷方式、属性模式、可视化分析器等功能。这些创新影响了UnoCSS，并显著改善了其他原子 CSS 框架的开发人员体验。

:::

## UnoCSS

[UnoCSS](https://unocss.dev/) 即时按需原子 CSS 引擎,可定制 · 强大 · 快速 · 愉悦。UnoCSS是一个具有高性能且极具灵活的即时原子化CSS引擎，具有按需加载的特性。原子化CSS是一种CSS的架构方式，它倾向于小巧且用途单一的class,并且会以视觉效果进行命名。

[重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh)