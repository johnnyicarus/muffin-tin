# @muffin-tin/core (1.0.0-alpha)

Helpers for unopinionated [React](https://react.dev) design component libraries with [vanilla-extract](https://vanilla-extract.style/).

_This package is still in alpha, do not use in production_.

## Installation

This core package is not intended for direct installation, but you can install it like any other `npm` module.

It requires the latest version of `React` to work `(18.2)`.

## Contents

`@muffin-tin/core` contains the following helpers:

- `fixedForwardRed`: A wrapper around forwardRef to make it work with generic components.

- `DistributiveOmit`: A TypeScript helper omitting a key from all members of a union type.

- `SprinklesFnBase`: Type determining the shape of the Sprinkles function. Any function satisfying this type should work as higher-order-component param in `@muffin-tin` and `@butter-cream`, though this is not tested as of yet (see [rainbow-sprinkles](https://github.com/wayfair/rainbow-sprinkles)).

- `WithHocOptions`: TypeScript utility for generic settings that can be provided to all `@muffin-tin` and `@butter-cream`.

## About `@muffin-tin`

`@muffin-tin` is a suite of unopinionated helpers to write your own components, providing advanced ergonomics and helping you with type-safety.

For components you write from scratch, you can use the `Tag` component (`@muffin-tin/tag`) which gives you a fully type-safe polymorphic component with an `"as"` prop.

The `withSprinkles` higher-order component takes a React component and a vanilla-extract Sprinkles function and merges them to make the component accept those Sprinkles as props while maintaining full type-safety (`@muffin-tin/with-sprinkles`).

If you'd like opinionated helpers with ~~design decisions made for you~~ predefined styling options, check out [@butter-cream](https://github.com/johnnyicarus/butter-cream).
