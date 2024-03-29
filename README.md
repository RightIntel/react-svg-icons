# react-svg-icons

React components for svg icons.

A paid license from [linearicons.com](https://linearicons.com/)
is required to use these components in your application.

## Installation

```
npm i github:RightIntel/react-svg-icons#v2.0.3
OR
yarn add github:RightIntel/react-svg-icons#v2.0.3
OR
pnpm add github:RightIntel/react-svg-icons#v2.0.3
```

_Note:_ This package is not affiliated with npm's
[react-svg-icons package](https://npmjs.com/package/react-svg-icons).

## Usage

Import from 'react-svg-icons' and optionally provide size and color.

Default size is `20` and default color is no color, which browsers
will render as black.

```jsx harmony
import React from "react";
import { LiniAlarm, LiniCog, LiniInbox2 } from "react-svg-icons";

export function MyComponent() {
  return (
    <div className="MyComponent">
      <LiniAlarm size={24} color="var(--color-muted)" />
      <LiniCog size={32} color="var(--theme-color-bubble)" />
      <LiniInbox2 size={20} color="#f00" />
    </div>
  );
}
```

## Changing Color with CSS

If you do not pass a color prop, you can specify color in CSS.

```css
.MyComponent .Lini {
  fill: orangered;
}
```

## Choosing an icon

You can open a page to choose an icon by running `npx pick-lini`
or visiting [http://lini.sharpr.com](http://lini.sharpr.com).
