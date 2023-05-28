<template>
  <Test></Test>
  <el-button :icon='Plus' type='primary'>Plus</el-button>
  <el-button :icon='Edit' type='primary'>Edit</el-button>
  <el-button :icon='Delete' type='primary'>Delete</el-button>
</template>

<script lang='ts' setup>
import Test from '@/components/Test.vue'
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
</script>


<style scoped>

</style>
