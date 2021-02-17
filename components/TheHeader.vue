<template>
  <header class="header header--darkBlue">
    <div class="header-content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
<style>
.header {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  width: 100%;
  z-index: 2;
  padding: 0 calc(var(--gutter) * 2);
}

.header--darkBlue {
  background-color: var(--header-bg-color);
}

.header-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: var(--max-width);
  width: 100%;
  padding: var(--gutter) 0;
}

@media (min-width: 600px) {
  .header {
    padding: 0 2%;
  }

  .header-content {
    flex-direction: row;
    justify-content: flex-end;
    height: 35px;
    padding: 0;
  }
}
</style>
