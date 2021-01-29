# Reonomy Design Styles Library

[![npm version](https://img.shields.io/npm/v/@reonomy/styles.svg?style=flat-square)](https://www.npmjs.com/package/@reonomy/styles)

Install:

```bash
$ yarn add @reonomy/styles
```

Usage:

```jsx
import ReonomyStyles from '@reonomy/styles';

function App() {
  return (
    <ReonomyStyles>
      <MyApp />
    </ReonomyStyles>
  );
}
```

## What's included

The default export `ReonomyStyles` includes the "kitchen sink" of the Reonomy Web styles library:

- Default Material UI `CssBaseline`

- ReonomyTheme: A custom theme generated by Material UI's `createMuiTheme()`

- ReonomyPalette: A custom palette of all Reonomy colors.

- Global CSS
  - Utilities
    - Helper classes like `.capitalize`, `.uppercase`, `.lowercase` etc, and `.icon-spin` for animated rotating icons.
  - Typography
    - Font references (see below).
  - Labels
    - Colors for Reonomy's user-generated labels `.label-style-1`, `.label-style-2` etc
  - Leader lines
    - Styles for common `dl`/`dt`/`dd` data display
  - MTA Icons
    - Styles for MTA transit line icons for NYC properties

## Running Storybook

To view components, icons and theme run the following command:

```bash
yarn storybook
```

## Font assets

In order for font files to be bundled along with your application, you will need a bundler (like webpack) that recognizes font file imports in order to include them in the bundle. Create-react-app supports this by default. Custom webpack configurations will need the `file-loader` plugin or something similar in order to load font assets.

For example, as seen in /example/webpack.config.js:

```js
{test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/, loaders: ['file-loader']}
```

## Icon assets

All SVG icons are wrapped in MUI's `SvgIcon` and formatted at `viewBox="0 0 24 24"`. They are comprised of a combination of path and stroke definitions which can be styled directly:

```jsx
<IconAddSolid style={{ width: 40, height: 40, color: 'red' }} className="iconstyle">
```

They will by default inherit their parent color and fontSize.

All icons are available individually as direct imports, alongside the exported Palette, Theme, and CssBaseline:

```js
import {
  ReonomyPalette,
  ReonomyCssBaseline,
  ReonomyTheme,
  IconAddSolid,
  IconBulbOutlined,
  IconCloseSolid
} from '@reonomy/styles`
```

## Creating Icon SVGs

Currently all Icon SVGs are exported from our [Figma design system](https://www.figma.com/file/gL4ne4FElhPkB5wXFZIoLp/Material-Design-for-Reonomy).

Things to consider when exporting new SVGs into the repo:

- Figma's Ionicons export with all stroke, path, and fill colors explicitly defined (bad!). In order to utilize these within the Material UI framework, these should all be reset.
- Example of a reset SVG with stroke definitions:

```js
<SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
  <path d="M19.5..." fill="transparent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</SvgIcon>
```

- Example of a reset SVG with path clip and fill rules:

```js
<SvgIcon viewBox="0 0 24 24" {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.0543..." />
</SvgIcon>
```

- Example of a reset plain SVG:

```js
<SvgIcon viewBox="0 0 24 24" {...props}>
  <path d="M17.25..." />
</SvgIcon>
```

## Update NPM

Update package version in package.json or bump npm version with <update_type> being `patch`, `minor`, or `major`

```bash
$ npm version <update_type>
```

To publish updates to the package:

```bash
$ yarn lint
$ yarn compile
$ npm pack
```

This will generate a .tgz file top level you can now update reference to in /example/package.json, eg:

```js
"dependencies": {
    "@reonomy/styles": "../reonomy-styles-1.0.5.tgz",
```

Update /example/public/index.html as needed, and ensure visual styles are as expected.

Delete old .tgz file versions for good housekeeping.

You may periodically need to clear the yarn cache with:

```bash
$ yarn cache clean
```

After branch is updated/approved and merged, publish the package to npm:

```bash
$ npm publish
```

## Reference

See [Create/Publishing NPM Package](https://www.npmjs.com/package/@bcms-demo/new-project) for more info on updating NPM.

See [Material UI](https://material-ui.com/getting-started/usage/) for more info on getting setup with Material UI in React.

## Author

[Reonomy Team](https://github.com/reonomy)

## License

MIT
