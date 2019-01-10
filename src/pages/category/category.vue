<template>
    <div id="app">
        <Breadcrumb :links="[{ label: $t('menus.category'), to: '/category' }]"></Breadcrumb>
        <box>
            <cell
                    :title="$t('list.add.search')"
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent004 ? 'up' : 'down'"
                    @click.native="showContent004 = !showContent004"></cell>
            <div class="slide" :class="showContent004 ? 'animate' : ''">
                <template v-if="showContent004">
                    <popup-radio title="分类1" :options="options3" v-model="option3">
                      <p slot="popup-header" class="vux-1px-b popup-radio">分类1</p>
                    </popup-radio>
                    <cell-box link="/parts">菜品列表</cell-box>
                    <cell-box link="/items">配菜列表</cell-box>
                </template>
            </div>
        </box>
        <group title="result"></group>
        <div class="vux-1px-t">
            <div class="swipeout-header">
              <flexbox>
                <flexbox-item><div class="flex-demo">1</div></flexbox-item>
                <flexbox-item><div class="flex-demo">2</div></flexbox-item>
                <flexbox-item><div class="flex-demo">1</div></flexbox-item>
                <flexbox-item><div class="flex-demo">2</div></flexbox-item>
              </flexbox>
            </div>
            <swipeout>
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Yes')}}</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button>
                    </div>
                    <div slot="content" class="cat-content vux-1px-t">
                        {{$t('JavaScript is the best language')}}
                    </div>
                </swipeout-item>
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Yes')}}</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button>
                    </div>
                    <div slot="content" class="cat-content vux-1px-t">
                        {{$t('JavaScript is the best language1')}}
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
    </div>
</template>

<script>
import { XButton, Box, CellBox, PopupRadio, Swipeout, SwipeoutButton, SwipeoutItem, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XButton,
    Box,
    CellBox,
    PopupRadio,
    Swipeout,
    SwipeoutButton,
    SwipeoutItem,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      showContent004: false,
      options3: ['A', 'B', 'C'],
      option3: 'C'
    }
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  }
}
</script>

<style>
.cat-content, .swipeout-header{
  padding: 10px;

}
.swipeout-header *, .cat-content * {
  text-align: center;
}
</style>
