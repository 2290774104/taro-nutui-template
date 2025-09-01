<template>
  <div>
    <div v-for="(item, index) in 100" :key="index">测试文本</div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { onMounted } from "vue";
import { usePullDownRefresh, useReachBottom } from "@tarojs/taro";

onMounted(() => {
  console.log(router.useRouter().params);
});

// 下拉刷新
usePullDownRefresh(() => {
  console.log("下拉");
});

// 上拉加载
useReachBottom(() => {
  console.log("上拉");
});
</script>

<style lang="scss" scoped></style>
