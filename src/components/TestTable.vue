<template>
    <table>
      <thead>
        <tr>
          <td v-for="(item,index) in tableHeader" :key="index">{{ item.text }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.text }}</td>
          <td><a :href="item.url" target="_blank"><slot name="text">連結</slot></a></td>
        </tr>
      </tbody>
    </table>
</template>
    
<script>
export default {
  name: "TestTable",
  props: {
    tableHeader: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
};
</script>
    
<style lang="sass" scoped>
table, th, td
  border: 1px solid black
  border-collapse: collapse
</style>