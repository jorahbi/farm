<template>
    <div id="app">
        <div>
            <divider>每天销售额(按月显示)</divider>
            <flexbox orient="vertical">
                <flexbox-item>
            <v-chart :data="data1">
                <v-scale x :tick-count="5" :max="2020" />
                <v-line shape="smooth" :colors="gradient"/>
                <v-guide type="tag" :options="tag" />
                <v-area shape="smooth" :colors="gradient"/>
            </v-chart>
                </flexbox-item>
            </flexbox>
        </div>
        <div>
            <divider>当天各种菜品销售额(按天显示)</divider>
            <flexbox orient="vertical">
                <flexbox-item>
            <v-chart
                    :data="data"
                    :padding="[20, 'auto']">
                <v-tooltip disabled />
                <v-scale y :options="yOptions" />
                <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#FE5D4D','#3BA4FF','#737DDE']" />
                <v-legend :options="legendOptions" />
                <v-guide type="html" :options="htmlOptions" />
            </v-chart>
                </flexbox-item>
            </flexbox>
        </div>
        <div>
            <divider>当月各种菜品销售额</divider>
            <flexbox orient="vertical">
                <flexbox-item>
            <v-chart :data="data2">
                <v-scale x field="date" type="timeCat" mask="MM-DD" />
                <v-scale y field="value" :tick-count="4" :max="300" />
                <v-tooltip show-crosshairs show-value-in-legend />

                <v-area series-field="city" shape="smooth" adjust="stack" />
                <v-line series-field="city" shape="smooth" adjust="stack" />
            </v-chart>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>

// import api from '../../common/api'
import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale, Drawer, Flexbox, FlexboxItem, Divider } from 'vux'

const data = [
  { name: '股票类', percent: 83.59, a: '1' },
  { name: '债券类', percent: 2.17, a: '1' },
  { name: '现金类', percent: 14.24, a: '1' }
]

const map = {}
data.map(obj => {
  map[obj.name] = obj.percent + '%'
})

export default {
  components: {
    VChart,
    VLine,
    VArea,
    VScale,
    VGuide,
    VTooltip,
    VLegend,
    VBar,
    VPie,
    Drawer,
    Flexbox,
    FlexboxItem,
    Divider
  },
  data () {
    return {
      gradient: [
        [0, '#F2C587'],
        [0.5, '#ED7973'],
        [1, '#8659AF']
      ],
      tag: {
        position: [ 2017, 30.12 ],
        content: '30.12',
        direct: 'tl',
        offsetY: -5,
        background: {
          fill: '#8659AF'
        },
        pointStyle: {
          fill: '#8659AF'
        }
      },
      data1: [
        { year: 2000, age: 27.2 },
        { year: 2001, age: 27.5 },
        { year: 2002, age: 27.8 },
        { year: 2003, age: 28 },
        { year: 2004, age: 28.2 },
        { year: 2005, age: 28.4 },
        { year: 2006, age: 28.8 },
        { year: 2007, age: 28.8 },
        { year: 2008, age: 28.8 },
        { year: 2009, age: 28.8 },
        { year: 2010, age: 28.9 },
        { year: 2011, age: 29 },
        { year: 2012, age: 29.3 },
        { year: 2013, age: 29.4 },
        { year: 2014, age: 29.5 },
        { year: 2015, age: 29.7 },
        { year: 2016, age: 30 },
        { year: 2017, age: 30.12 }
      ],
      map,
      htmlOptions: {
        position: [ '50%', '45%' ],
        html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>`
      },
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      data,
      data2: [
        { value: 63.4, city: 'New York', date: '2011-10-01' },
        { value: 62.7, city: 'Alaska', date: '2011-10-01' },
        { value: 72.2, city: 'Austin', date: '2011-10-01' },
        { value: 58, city: 'New York', date: '2011-10-02' },
        { value: 59.9, city: 'Alaska', date: '2011-10-02' },
        { value: 67.7, city: 'Austin', date: '2011-10-02' },
        { value: 53.3, city: 'New York', date: '2011-10-03' },
        { value: 59.1, city: 'Alaska', date: '2011-10-03' },
        { value: 69.4, city: 'Austin', date: '2011-10-03' },
        { value: 55.7, city: 'New York', date: '2011-10-04' },
        { value: 58.8, city: 'Alaska', date: '2011-10-04' },
        { value: 68, city: 'Austin', date: '2011-10-04' },
        { value: 64.2, city: 'New York', date: '2011-10-05' },
        { value: 58.7, city: 'Alaska', date: '2011-10-05' },
        { value: 72.4, city: 'Austin', date: '2011-10-05' },
        { value: 58.8, city: 'New York', date: '2011-10-06' },
        { value: 57, city: 'Alaska', date: '2011-10-06' },
        { value: 77, city: 'Austin', date: '2011-10-06' },
        { value: 57.9, city: 'New York', date: '2011-10-07' },
        { value: 56.7, city: 'Alaska', date: '2011-10-07' },
        { value: 82.3, city: 'Austin', date: '2011-10-07' },
        { value: 61.8, city: 'New York', date: '2011-10-08' },
        { value: 56.8, city: 'Alaska', date: '2011-10-08' },
        { value: 78.9, city: 'Austin', date: '2011-10-08' },
        { value: 69.3, city: 'New York', date: '2011-10-09' },
        { value: 56.7, city: 'Alaska', date: '2011-10-09' },
        { value: 68.8, city: 'Austin', date: '2011-10-09' },
        { value: 71.2, city: 'New York', date: '2011-10-10' },
        { value: 60.1, city: 'Alaska', date: '2011-10-10' },
        { value: 68.7, city: 'Austin', date: '2011-10-10' },
        { value: 68.7, city: 'New York', date: '2011-10-11' },
        { value: 61.1, city: 'Alaska', date: '2011-10-11' },
        { value: 70.3, city: 'Austin', date: '2011-10-11' },
        { value: 61.8, city: 'New York', date: '2011-10-12' },
        { value: 61.5, city: 'Alaska', date: '2011-10-12' },
        { value: 75.3, city: 'Austin', date: '2011-10-12' },
        { value: 63, city: 'New York', date: '2011-10-13' },
        { value: 64.3, city: 'Alaska', date: '2011-10-13' },
        { value: 76.6, city: 'Austin', date: '2011-10-13' },
        { value: 66.9, city: 'New York', date: '2011-10-14' },
        { value: 67.1, city: 'Alaska', date: '2011-10-14' },
        { value: 66.6, city: 'Austin', date: '2011-10-14' },
        { value: 61.7, city: 'New York', date: '2011-10-15' },
        { value: 64.6, city: 'Alaska', date: '2011-10-15' },
        { value: 68, city: 'Austin', date: '2011-10-15' },
        { value: 61.8, city: 'New York', date: '2011-10-16' },
        { value: 61.6, city: 'Alaska', date: '2011-10-16' },
        { value: 70.6, city: 'Austin', date: '2011-10-16' },
        { value: 62.8, city: 'New York', date: '2011-10-17' },
        { value: 61.1, city: 'Alaska', date: '2011-10-17' },
        { value: 71.1, city: 'Austin', date: '2011-10-17' },
        { value: 60.8, city: 'New York', date: '2011-10-18' },
        { value: 59.2, city: 'Alaska', date: '2011-10-18' },
        { value: 70, city: 'Austin', date: '2011-10-18' },
        { value: 62.1, city: 'New York', date: '2011-10-19' },
        { value: 58.9, city: 'Alaska', date: '2011-10-19' },
        { value: 61.6, city: 'Austin', date: '2011-10-19' },
        { value: 65.1, city: 'New York', date: '2011-10-20' },
        { value: 57.2, city: 'Alaska', date: '2011-10-20' },
        { value: 57.4, city: 'Austin', date: '2011-10-20' },
        { value: 55.6, city: 'New York', date: '2011-10-21' },
        { value: 56.4, city: 'Alaska', date: '2011-10-21' },
        { value: 64.3, city: 'Austin', date: '2011-10-21' },
        { value: 54.4, city: 'New York', date: '2011-10-22' },
        { value: 60.7, city: 'Alaska', date: '2011-10-22' },
        { value: 72.4, city: 'Austin', date: '2011-10-22' },
        { value: 54.4, city: 'New York', date: '2011-10-23' },
        { value: 65.1, city: 'Alaska', date: '2011-10-23' },
        { value: 72.4, city: 'Austin', date: '2011-10-23' },
        { value: 54.8, city: 'New York', date: '2011-10-24' },
        { value: 60.9, city: 'Alaska', date: '2011-10-24' },
        { value: 72.5, city: 'Austin', date: '2011-10-24' },
        { value: 57.9, city: 'New York', date: '2011-10-25' },
        { value: 56.1, city: 'Alaska', date: '2011-10-25' },
        { value: 72.7, city: 'Austin', date: '2011-10-25' },
        { value: 54.6, city: 'New York', date: '2011-10-26' },
        { value: 54.6, city: 'Alaska', date: '2011-10-26' },
        { value: 73.4, city: 'Austin', date: '2011-10-26' },
        { value: 54.4, city: 'New York', date: '2011-10-27' },
        { value: 56.1, city: 'Alaska', date: '2011-10-27' },
        { value: 70.7, city: 'Austin', date: '2011-10-27' },
        { value: 42.5, city: 'New York', date: '2011-10-28' },
        { value: 58.1, city: 'Alaska', date: '2011-10-28' },
        { value: 56.8, city: 'Austin', date: '2011-10-28' },
        { value: 40.9, city: 'New York', date: '2011-10-29' },
        { value: 57.5, city: 'Alaska', date: '2011-10-29' },
        { value: 51, city: 'Austin', date: '2011-10-29' },
        { value: 38.6, city: 'New York', date: '2011-10-30' },
        { value: 57.7, city: 'Alaska', date: '2011-10-30' },
        { value: 54.9, city: 'Austin', date: '2011-10-30' },
        { value: 44.2, city: 'New York', date: '2011-10-31' },
        { value: 55.1, city: 'Alaska', date: '2011-10-31' },
        { value: 58.8, city: 'Austin', date: '2011-10-31' },
        { value: 49.6, city: 'New York', date: '2011-11-01' },
        { value: 57.9, city: 'Alaska', date: '2011-11-01' },
        { value: 62.6, city: 'Austin', date: '2011-11-01' },
        { value: 47.2, city: 'New York', date: '2011-11-02' },
        { value: 64.6, city: 'Alaska', date: '2011-11-02' },
        { value: 71, city: 'Austin', date: '2011-11-02' }
      ]
    }
  }
}
</script>
