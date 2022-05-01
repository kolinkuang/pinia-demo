<script setup>
import { storeToRefs } from 'pinia'
import { mainStore } from '../store/index'

const store = mainStore()
const { counter } = storeToRefs(store);
function handleClick() {
  counter.value++;
}
</script>

<template>
  <button @click="handleClick">修改状态数据</button>
  <!-- 模板内不需要加.value -->
  <p>{{store.counter}}</p>
  <!-- 或者使用解构之后的 -->
  <p>{{counter}}</p>
</template>

<style scoped>
</style>
