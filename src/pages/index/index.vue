<template>
  <view class="index">
    <nut-button type="primary" @click="onClick">按钮</nut-button>
    <nut-toast v-model:visible="show" type="success" title="你成功了" />
  </view>
</template>

<script setup>
import { ref } from "vue";
import { httpGetAccessToken } from "@/api/user";
import Taro from "@tarojs/taro";
const show = ref(false);
const onClick = () => {
  Taro.navigateTo({
    url: "/pages/list/index",
  });
};
</script>
