## Getting Started

First, install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Followed Conventions

The naming of classes for styling is a hybrid of the BEM methodology and camelCase:

```html
<div class="block">
  <div class="block__element"></div>
  <div class="block__elementDescriptiveName"></div>
  <!-- 👇"omitting '--modifier' for easier CSS module class names(when used)."-->
  <div class="block__elementModifier"></div>
</div>
```
