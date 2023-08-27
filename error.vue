<template>
  <div>
    <!-- <HeaderBlueBar />
        <HeaderWidget /> -->
    <div class="error-page text-center mb-5 pa-10">
      <img class="py-10 with-p100" src="~/assets/images/not-found-error.svg" :alt="error.statusCode">
      <h2>Aradığınız Sayfaya Ulaşamadık</h2>

      <h5 class="pt-5 pb-7">İlginizi Çekebilir</h5>

      <v-row class="useful-urls pa-10">
        <v-col cols="12" sm="6" v-for="url in urls">
          <template v-if="url.externalUrl">
            <a :href="url.actionUrl" target="_blank">
              <FormButton @click="handleError" variant="elevated" size="large" class="text-left with-p100"
                color="light-background" :prependIcon="url.icon">{{ url.name }}
              </FormButton>
            </a>
          </template>
          <template v-else>
            <es-link :to="{ name: url.actionUrl, params: { seoUrl: url.seoUrl } }">
              <FormButton @click="handleError" variant="elevated" size="large" class="text-left with-p100"
                color="light-background" :prependIcon="url.icon">{{ url.name }}
              </FormButton>
            </es-link>
          </template>
        </v-col>
      </v-row>
    </div>
    <!-- <FooterDefault />
        <FooterBlueBar /> -->
  </div>
</template>

<script>
export default defineNuxtComponent({
  name: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleError () {
      this.$store.dispatch('error/clearError', { redirect: '/' })
    }
  },
  computed: {
    urls () {
      return [
        { name: 'Ürünlerimiz', icon: 'briefcase-icon', actionUrl: 'allProducts', seoUrl: '', externalUrl: false },
        { name: 'Hasar İşlemleri', icon: 'clipboardText-icon', actionUrl: 'claim', seoUrl: '', externalUrl: false },
        { name: 'Merak Ettikleriniz', icon: 'chatCircleDots-icon', actionUrl: 'knowledge', seoUrl: '', externalUrl: false },
        { name: 'Anlaşmalı Kurumlar', icon: 'mapTrifold-icon', actionUrl: 'provider', seoUrl: this.$t('contractedProviders.vehicleSeoUrl'), externalUrl: false },
        { name: 'Eurekobi', icon: 'paperclip-icon', actionUrl: 'eureKobi', seoUrl: '', externalUrl: false },
        { name: 'Eureko Blog', icon: 'coffee-icon', actionUrl: 'https://blog.eurekosigorta.com.tr/', seoUrl: '', externalUrl: true }
      ]
    }
  }
})
</script>
<style scoped>
.error-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>

<style lang="scss" >
.error-page .mdi:before {
  color: $dark-bg5;
  font-size: 30px !important;
}

.error-page .mdi-paperclip {
  transform: rotate(45deg);
}

.error-page .default-button .v-btn {
  display: flex;
  justify-content: left;
  color: $text-color15 !important;
}

.error-page .v-btn__prepend {
  margin-right: 15px;
}

.error-page .v-btn .v-icon {
  --v-icon-size-multiplier: 1.5;
}

.error-page .v-btn__content {
  color: $text-color15;
  font-size: 14px;
  font-weight: 600;
  line-height: 21.15px;
}
</style>