# @muffin-tin (1.0.0-alpha)

Helpers for unopinionated [React](https://react.dev) design component libraries with [vanilla-extract](https://vanilla-extract.style/).

_This package is still in alpha, do not use in production_.

## Installation

```js
npm install @muffin-tin/<package-name>
```

It requires the latest version of `React` to work `(18.2)`.

## Packages

`@muffin-tin` is a suite of unopinionated helpers to write your own components, providing advanced ergonomics and helping you with type-safety. It contains the following packages:

- `@muffin-tin/core`: core utilities that are reused through `@muffin-tin` and [`@butter-cream`](https://github.com/johnnyicarus/butter-cream). Packages depend on it, you probably don't need to install this directly

- `@muffin-tin/tag`: contains a polymorphic component with an `"as"` prop (as popularised by `styled-components`). It's called `<Tag>` because it can render as any HTML tag. `<Tag>` is fully type-safe, it will throw errors if you give it an unknown attribute or the wrong type of `ref`.

- `@muffin-tin/withSprinkles`: higher-order component that takes a React component and a vanilla-extract Sprinkles function and merges them to make the component accept those Sprinkles as props while maintaining full type-safety (`@muffin-tin/with-sprinkles`).

If you'd like opinionated helpers with ~~design decisions made for you~~ predefined styling options, check out [@butter-cream](https://github.com/johnnyicarus/butter-cream).
