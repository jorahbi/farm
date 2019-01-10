<template>
  <div style="height:100%;" id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
    </div>
    <drawer class="drawer"
            :show.sync="drawerVisibility"
            :show-mode="showModeValue"
            :placement="showPlacementValue"
            :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer" class="drawer-menu">
        <group title="" style="margin-top:46px;"></group>
        <cell
                title="菜品管理"
                is-link
                :border-intent="false"
                :arrow-direction="isMenuActive(1) ? 'up' : 'down'"
                @click.native="menuActive(1)"></cell>
        <div class="slide" :class="isMenuActive(1) ?'animate':''">
          <template v-if="isMenuActive(1)">
            <cell-box is-link>分类列表</cell-box>
            <cell-box link="http://github.com/airyland/vux">菜品列表</cell-box>
            <cell-box is-link>配菜列表</cell-box>
          </template>
        </div>
        <cell
                title="demo"
                is-link
                :border-intent="false"
                :arrow-direction="isMenuActive(2) ? 'up' : 'down'"
                @click.native="menuActive(2)"></cell>
        <div class="slide" :class="isMenuActive(2) ?'animate':''">
          <template v-if="isMenuActive(2)">
            <cell-box :border-intent="false" class="sub-item" is-link>分类列表</cell-box>
            <cell-box class="sub-item" is-link>content 001</cell-box>
            <cell-box class="sub-item" is-link>content 001</cell-box>
          </template>
        </div>
      </div>
      <!-- main content -->
      <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">
        <x-header
                v-if="isShowNav"
                slot="header"
                style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                :left-options="leftOptions"
                :right-options="rightOptions"
                :title="route.name"
                :transition="headerTransition"
                @on-click-more="onClickMore">
          <span slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition
                @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
                :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
        </transition>

        <!--<tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo && isShowBar" slot="bottom">-->
        <!--<tabbar-item :link="{path:'/index/index'}" :selected="isActive(['/', '/index/index'])">-->
        <!--<span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>-->
        <!--<span slot="label">Home</span>-->
        <!--</tabbar-item>-->
        <!--<tabbar-item :link="{path:'/orders/list'}" :selected="isActive(['/orders/list'])" badge="9">-->
        <!--<span class="demo-icon-22" slot="icon">&#xe633;</span>-->
        <!--<span slot="label">{{ $t('orders')}}</span>-->
        <!--</tabbar-item>-->
        <!--</tabbar>-->

      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom, CellBox } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet,
    CellBox
  },
  methods: {
    onClickMore () {
      this.showMenu = true
    },
    changeLocale (locale) {
      this.$i18n.set(locale)
      this.$locale.set(locale)
    },
    ...mapActions([
      'updateDemoPosition'
    ]),
    menuActive (current) {
      this.currentMenu = this.currentMenu === current ? 0 : current
    },
    isMenuActive (current) {
      return this.currentMenu === current
    },
    isActive (urls) {
      for (let i in urls) {
        if (this.route.path === urls[i]) {
          return true
        }
      }
      return false
    }
  },
  watch: {
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    isShowBar () {
      if (this.entryUrl.indexOf('hide-tab-bar') > -1) {
        return false
      }
      return true
    },
    isShowNav () {
      if (this.entryUrl.indexOf('hide-nav') > -1) {
        return false
      }
      return true
    },
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    rightOptions () {
      return {
        showMore: true
      }
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },
  data () {
    return {
      entryUrl: document.location.href,
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left',
      currentMenu: '',
      showContent001: false,
      showContent002: true
    }
  }
}

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';
  @import "style/base/_base.less";
</style>
