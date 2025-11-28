## 🚀 Prerequisites

Before starting, ensure you have the following installed:
* Node.js v16 or later
* npm or yarn
* Visual Studio Code with recommended extensions

## Stating a application

1. Open the termial on root folder and run
```bash
    npm install
``` 

And run,
```bash
    npm run dev
```

Then open http://localhost:3000 on your browser to see the result

## 📄 Adding a New Page

1. Go to the folder where you want the new page.
2. Create a new .mdx file:
Example
```bash
    /en/settings/application-settings/new-page.mdx
```
3. Add content to the File
```bash
    #New Page

    Welcome to new page
```

4. Update the _meta.json file to show this new page in the sidebar

```bash
    'newpage': '',
```

## 📁 Adding a New Sub Directory (Collapsible Section)
To create a collapsible section

1. Create a folder
```bash
    /en/settings/application-settings/new-settings
```

2. Add pages inside it
```bash
    /en/settings/application-settings/new-settings/settings-one.mdx
    /en/settings/application-settings/new-settings/settings-two.mdx
```

3. Inside the new-settings folder create a _meta.ts
```js
const meta = {
  'settings-one': '',
  'settings-two': '',
};

export default meta;
```
4. In the parent folder’s _meta.js, register the new directory:

```js
const meta = {
  //prev exsisting pages
  'new-settings': '',
};

export default meta;
```

Example structure
```pgsql
en/
 ├── index.mdx
 ├── getting-started.mdx
 ├── _meta.js
 └── settings/
      ├── caching.mdx
      ├── _meta.js   
      └── new-settings/
        ├── settings-one.mdx
        ├── settings-two.mdx
        └── _meta.js

```
Each folder’s _meta.json controls that folder’s sidebar content.

5. Hide a page on side bar

```js
const meta = {
  //prev exsisting pages
  'new-settings': {
    display: 'hidden',
  },
};

export default meta;
```

## 🖼 Adding Images (figure + figure-ref)

1. Create a folder inside /public folder
```bash
    #better if you an create as per the folders same as pages to reduse the complexity and increase the maintainabolity
    /public/settings/application-settings/new-settings
```

2. Store the image inside it with proper name 
**Note: If a image has dark and light modes join -dark / -light with file name as below**
Ex: File name = my-image.png
-> my-image-dark.png
-> my-image-light.png
# Refer public/settings/general-setting

```bash
    /public/settings/application-settings/new-settings/my-image-dark.png
    /public/settings/application-settings/new-settings/my-image-light.png
```

3. Import Figure and FigureProvider on .mdx file
Add this on first line
```js
    import { FigureProvider, Figure } from '@/components/figure';
```
4. Keep your mdx content inside the FigureProvider as below
```js
 <FigureProvider>
    //mdx content
 </FigureProvider>
```

5. Use Figure component

* baseName = Path of the image
* alt = Text which will appear when the image is not loaded
* description = Caption of the image (Figure #: Caption you given)
* Don't need to add "Figure #" on the caption, it will added when load the content

```js
 <FigureProvider>
    //mdx content
    <Figure
        baseName="settings/application-settings/new-settings/my-image"
        alt="My Image"
        description="Caption you given"
    />
    //mdx content
 </FigureProvider>
```
# Note: If a image doesn't have dark/light set property hasThemedImage={false} (Refer login-window.mdx)
## MDX tips

* #Name : For title of the page
* ##Topic : Sub topics
* **sampleText** : Bold a text
* ```jsx <codes/ calculations> ``` : To add jsx code blocks

Find More about MDX Components: https://mdxjs.com/table-of-components/



//TODO: Remove after review
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.