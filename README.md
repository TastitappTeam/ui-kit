# Tastit UI-KIT

Tech:

- Vite typescript
- tailwind

## How to use it?

- `npm install @tastit/ui-kit`
- update your tailwind configuration file `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tastit/ui-kit/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@tastit/ui-kit/tailwind.config.js')],
};
```

- import the global css in you main tsx file (`main.tsx` or `App.tsx`):

```ts
import '@tastit/ui-kit/src/global.css';
```

- use the components:

```ts
import { Button } from '@tastit/ui-kit';
```

## Contribute

You can add global CSS in `src/global.css`.

### How to clean code

- use tailwind alias to avoid long `className` string
- create react function component: `export function Button(props: ButtonProps) {}`
  - or `export const Button = (props: ButtonProps) => {}`
- create one folder per component with
  - component
  - unit tests
  - storybook stories
