# @muffin-tin/tag (1.0.0-alpha)

Helpers for unopinionated [React](https://react.dev) design component libraries with [vanilla-extract](https://vanilla-extract.style/).

_This package is still in alpha, do not use in production_.

## Installation

```js
npm install @muffin-tin/tag
```

It requires the latest version of `React` to work `(18.2)`.

## Contents

`@muffin-tin/tag` contains the `Tag` component which gives you a fully type-safe polymorphic component with an `"as"` prop (popularised by `styled-components`), meaning you can reuse the same styles while switching out the rendered HTML tag (maintaining semantic markup) or component business logic underneath.

Unlike some other implementations, we use advanced TypeScript wizardry so that the `<Tag>` component will reflect the props of the component it renders _"as"_, meaning it will complain when you add a `"href"` attribute or a `HTMLAnchorElement` ref to `<Tag as="button">`.

## About `@muffin-tin`

`@muffin-tin` is a suite of unopinionated helpers to write your own components, providing advanced ergonomics and helping you with type-safety.

For components you write from scratch, you can use the `Tag` component in this package, which gives you a fully type-safe polymorphic component with an `"as"` prop.

The `withSprinkles` higher-order component takes a React component and a vanilla-extract Sprinkles function and merges them to make the component accept those Sprinkles as props while maintaining full type-safety (`@muffin-tin/with-sprinkles`).

If you'd like opinionated helpers with ~~design decisions made for you~~ predefined styling options, check out [@butter-cream](https://github.com/johnnyicarus/butter-cream).
