<template>
  <box class="breadcrumb">
    <router-link to="/"> {{ $t('menus.dashboard') }}
      <x-icon type="ios-arrow-right" size="12"></x-icon>
    </router-link>
    <router-link v-for="(item, index) in links"
                 :key="index"
                 :to="(index !== links.length - 1) === true ? item.to : ''"> {{ item.label }}
      <x-icon type="ios-arrow-right" size="12" v-if="index !== links.length - 1"></x-icon>
    </router-link>
  </box>
</template>

<script>
import { Box } from 'vux'

export default {
  name: 'breadcrumb',
  components: {
    Box
  },
  props: {
    links: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.breadcrumb {
  padding: 10px 0 10px 10px;
}
.breadcrumb * {
  display: inline-block;
  vertical-align:middle;
}

</style>
