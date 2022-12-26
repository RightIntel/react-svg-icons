# react-svg-icons

React components for svg icons.

A paid license from [linearicons.com](https://linearicons.com/)
is required to use these components in your application.

## Usage

Import from 'react-svg-icons' and optionally provide size and color.

Default size is `20` and default color is `#333`.

```jsx harmony
import React from 'react';
import { LiniAlarm, LiniCog, LiniInbox2 } from 'react-svg-icons';

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

```css
.MyComponent .Lini {
    fill: orangered;
}
```

## Choosing an icon

You can open a page to choose an icon by running `npx pick-lini` 
or visiting [http://lini.sharpr.com](http://lini.sharpr.com).
