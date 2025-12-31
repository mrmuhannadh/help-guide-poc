## 🚀 Prerequisites

Before starting, ensure you have the following installed:

- Node.js v16 or later
- npm or yarn
- Visual Studio Code with recommended extensions

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

4. Update the \_meta.ts file to show this new page in the sidebar

```bash
    'newpage': '',
```

5. By default table of contents will use the title of the page. If need to override, update the value of the page key in \_meta.ts file

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

3. Inside the new-settings folder create a \_meta.ts

```ts
const meta = {
  'settings-one': '',
  'settings-two': '',
};

export default meta;
```

4. In the parent folder’s \_meta.ts, register the new directory:

```ts
const meta = {
  //prev exsisting pages
  'new-settings': '',
};

export default meta;
```

Example structure

```
en/
 ├── index.mdx
 ├── getting-started.mdx
 ├── _meta.ts
 └── settings/
      ├── caching.mdx
      ├── _meta.ts
      └── new-settings/
        ├── settings-one.mdx
        ├── settings-two.mdx
        └── _meta.ts

```

Each folder’s \_meta.ts controls that folder’s sidebar content.

5. Hide a page on side bar

```ts
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
    # better if you an create as per the folders same as pages to reduse the complexity and increase the maintainabolity
    /public/settings/application-settings/new-settings
```

2. Store the image inside it with proper name
   **Note: If a image has dark and light modes join -dark / -light with file name as below**

   Ex: File name = my-image.png

   -> my-image-dark.png

   -> my-image-light.png

**Note**: Refer public/settings/general-setting

```
    /public/settings/application-settings/new-settings/my-image-dark.png
    /public/settings/application-settings/new-settings/my-image-light.png
```

3. To minimize image file size, use image compressors (https://tinify.com/) to compress the images before committing to the repository. You can use `scripts/image-compressor.js` file with appropriate file path with tinyfy API token to do this via terminal.

4. Import Figure and FigureProvider on .mdx file
   Add this on first line

```js
import { FigureProvider, Figure } from '@/components/figure';
```

5. Keep your mdx content inside the FigureProvider as below

```js
<FigureProvider>//mdx content</FigureProvider>
```

6. Use Figure component

- baseName = Path of the image
- alt = Text which will appear when the image is not loaded
- description = Caption of the image (Figure #: Caption you given)
- Don't need to add "Figure #" on the caption, it will added when load the content

```js
<FigureProvider>
  //mdx content
  <Figure
    baseName='settings/application-settings/new-settings/my-image'
    alt='My Image'
    description='Caption you given'
  />
  //mdx content
</FigureProvider>
```

**Note**: If an image doesn't have dark/light set property hasThemedImage={false} (Refer login-window.mdx)

## MDX tips

- #Name : For title of the page
- ##Topic : Sub topics
- **sampleText** : Bold a text
- `jsx <codes/ calculations> ` : To add jsx code blocks

Find More about MDX Components: https://mdxjs.com/table-of-components/

## 📦 Distribution

When preparing the User Guide for deployment, follow the steps below:

1. Make sure you have Nginx installed on your server or hosting environment.
2. Your FileServer version must be 2.5.3 or higher.
3. Duplicate env.sample as .env at the root directory and update `BASE_PATH` defined in the env file with the file server base path.
4. From the root directory, run:

```bash
npm run build
```

5. Rename the output folder 'out' into 'user-guide'
6. Deploy the 'user-guide' folder on your server
