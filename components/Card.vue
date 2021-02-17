<template>
  <article class="card">
    <a
      :aria-label="`start Pathway - ${title}`"
      role="button"
      tabindex="0"
      @click="goToUrl(url)"
      @keydown.enter="goToUrl(url)"
    >
      <div class="card-image">
        <img loading="lazy" :src="imagesrc" :alt="title" />
        <span class="card-duration-text">{{ duration }}</span>
      </div>

      <div class="card-text">
        <h2 class="card-title">{{ title }}</h2>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="card-btn">
        {{ btnTitle }}<span class="card-arrow"> &#10142;</span>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
      default: 'No title',
    },
    duration: {
      type: String,
      required: true,
      default: '',
    },
    imagesrc: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: 'Add body text here',
    },
    url: {
      type: String,
      required: true,
      default: '',
    },
    btnTitle: {
      type: String,
      required: false,
      default: 'Start pathway',
    },
  },
  methods: {
    goToUrl(url) {
      window.location.href = url
    },
  },
}
</script>
<style>
.card {
  position: relative;
  flex: 0 0 100%;
  flex-direction: column;
  border: 1px solid var(--card-border-color);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  margin-bottom: 2%;
  margin-left: 2%;
  cursor: pointer;
  transition: 0.3s linear;
}

.card:hover {
  box-shadow: var(--card-box-shadow);
}

.card-image {
  position: relative;
  background-color: var(--light-lilac);
  max-width: 100%;
}

.card-duration-text {
  position: absolute;
  right: var(--gutter);
  bottom: var(--gutter);
  border-radius: var(--border-radius-sm);
  background-color: var(--card-duration-bg-color);
  padding: 0.2em 0.7em;
  color: var(--white);
}

.card-text {
  padding: 10px 20px 4em;
}

.card-title {
  margin-bottom: 2%;
  color: var(--card-title-color);
}

.card-btn {
  position: absolute;
  bottom: 0;
  background-color: var(--card-btn-bg-color);
  border: none;
  color: var(--card-btn-text-color);
  padding: 0 20px;
  min-height: var(--card-btn-height);
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.card-arrow {
  font-size: 1.2em;
  margin-left: 0.3em;
}

@media (min-width: 600px) {
  .card {
    position: relative;
    flex: 0 0 48%;
  }
}

@media (min-width: 768px) {
  .card {
    position: relative;
    flex: 0 0 31.3%;
  }
}
</style>
