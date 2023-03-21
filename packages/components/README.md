# @muffin-tin/components (1.0.0-alpha.1)

_Utilities for building [React](https://react.dev) design component libraries with [vanilla-extract](https://vanilla-extract.style/)_

_This package is still in alpha, do not use in production_

---

## Installation

```js
npm install @muffin-tin/components
```

---

## Prerequisites

Latest `React` and `vanilla-extract` (+ `Sprinkles`)

---

## Contents

Contains the following helpers that to kick-start building component libraries.

- `createBaseComponent`: A generator function for a fundamental _Box_ Component, must be supplied with a [Sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/)-Function and optionally a class for default styling. Customize its types by passing which HTML attributes you don't not want consumers to use.

- `createComponent`: Similar generator function but you can pass a base-component to extend (must be forwarding its Ref). Consume e.g. your `Box` and compose higher-order components for your library.

- `composeClassName`: Resilient utility to compose `className` attributes. Used internally by the component creation functions.

- `extractAtomsFromProps`: Utility that separates component props into `Sprinkles` and non-`Sprinkles` based ones. Used internally by the component creation functions.

Check the TypeScript types for more information.
