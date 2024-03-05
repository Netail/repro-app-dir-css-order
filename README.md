# CSS import order issue

1. Override styling through the className prop from an external component
2. Start the development server `yarn dev`
3. Open the root page `/`, observe; the component uses the initial CSS
4. Reload the root page `/`, observe; the component uses the locally overwritten CSS
5. Open the subpath `/bug`, observe; the component uses the initial CSS
6. Reload the subpath `/bug`, observe; the component still uses the initial CSS

(When the dev server is restarted, it can be reproduced the other way around - if you open the subpath first, the CSS on this page will be correct after a reload while the other page stays broken at all times)
