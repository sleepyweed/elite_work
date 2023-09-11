<template>
  <div class="test2">
    <div v-for="(item, index) in filterShowData" :key="index" class="row">
      <div class="line1">{{ item.title }}</div>
      <div class="line2">
        {{ item.startDate+`~`+item.endDate}}
        <template v-if="item.webSales != ''"><a :href="item.webSales" target="_blank">連結</a></template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TestTwoView',
  computed: {
    ...mapState('homework', { data: 'showData' }),
    filterShowData() {
      return this.data.filter(function(item) {
        return item.masterUnit[0] === '國立歷史博物館';
      })
    }
  },
  created() {
    this.showData();
  },
  methods: {
    ...mapActions('homework', { showData: 'getShowData' })
  }
}
</script>

<style lang="sass" scoped>
.test2
  display: flex
  flex-direction: column
  align-items: center

.row
  border:1px solid #ddd
  border-radius: 4px
  width: 678px
  padding: 10px
  margin-bottom: 20px

.line1
  color: #4d4d4d
  font-size: 20px
  font-weight: 700
  text-align: start
  margin-bottom: 8px

.line2
  display: flex
  justify-content: space-between
  align-items: center
  a
    color: #fff
    background: #5f9384
    text-decoration: none
    border-radius: 4px
    padding: 4px 8px

@media (max-width: 720px)
  .row
    width: 90%

@media (max-width: 400px)
  .line2
    flex-direction: column
  a
    margin-top: 10px
</style>