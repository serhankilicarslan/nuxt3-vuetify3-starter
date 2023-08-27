<template>
  <nuxt-link v-if="goTo" :to=goTo>
    <slot></slot>
  </nuxt-link>
  <a v-if="href" :href="href">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: ['to', 'href'],
  data: () => {
    return {
      goTo: null
    }
  },
  beforeMount: function () {
    if (this.to && this.to.name) {
      this.to.name = `${this.to.name}___${this.$i18n.locale}`;
      this.goTo = this.to
    }
  },
  watch: {
    'to': function () {
      this.to.name = `${this.to.name}___${this.$i18n.locale}`;
      this.goTo = this.to
    }
  }
}
</script>