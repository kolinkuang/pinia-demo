<script setup>
// 导入状态仓库
import {mainStore} from '../store/index';
// 使普通数据变响应式的函数
import {storeToRefs} from 'pinia';

// 实例化仓库
const store = mainStore();
// 解构并使数据具有响应式
const {msg, counter} = storeToRefs(store);

// 点击 + 1;修改字符串
function handleClick() {
  store.$patch({
    msg: 'pinia good!',
    counter: counter.value + 1,
  });
}
</script>

<template>
  <button @click="handleClick">修改状态数据</button>
  <p>{{ msg }}</p>
  <!-- 或者使用解构之后的 -->
  <p>{{ counter }}</p>
</template>

<style scoped>
</style>
