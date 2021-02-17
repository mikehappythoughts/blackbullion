<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

:root {
  /* colors */
  --white: #ffffff;
  --yellow: #ffd00b;
  --light-lilac: #f8f5fb;
  --purple: #59338c;
  --dark-purple: #22174c;
  --light-grey: #d4d4d4;

  --max-width: 1024px;
  --border-radius-sm: 5px;
  --drop-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);

  /* header */
  --header-bg-color: var(--dark-purple);

  /* gutter */
  --gutter: 0.5em;

  /* card */
  --card-border-radius: var(--border-radius-sm);
  --card-border-color: var(--light-grey);
  --card-title-color: var(--purple);
  --card-title-size: var(--border-radius-sm);
  --card-btn-height: 48px;
  --card-btn-bg-color: var(--light-lilac);
  --card-btn-text-color: var(--purple);
  --card-duration-bg-color: var(--dark-purple);
  --card-cursor: var(--cursor-pointer);
  --card-box-shadow: var(--drop-shadow);
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.2;
}
</style>
