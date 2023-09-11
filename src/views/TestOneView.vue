<template>
  <div class="test">
    <TestTable :tableHeader="tableHeader" :tableData="table_data"></TestTable>
  </div>
</template>

<script>
import TestTable from '@/components/TestTable.vue'
import { table_header } from '@/table'
import { mapState } from 'vuex'

export default {
  name: 'TestOneView',
  components: {
    TestTable
  },
  data() {
    return {
      tableHeader: table_header,
      tableData: []
    }
  },
  computed: {
    ...mapState('homework', { table_data: 'table_data' })
  },
  created() {}
}
</script>

<style lang="sass" scoped>
.test
  display: flex
  justify-content: center
</style>