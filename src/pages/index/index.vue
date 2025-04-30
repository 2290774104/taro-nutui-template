<template>
  <view class="index">
    <nut-button type="primary" @click="onClick">按钮</nut-button>
    <nut-toast v-model:visible="show" type="success" title="你成功了" />
  </view>
</template>

<script setup>
import { ref } from "vue";
import { httpGetAccessToken } from "@/api/user";
const show = ref(false);
const onClick = () => {
  httpGetAccessToken({
    grant_type: "client_credential",
    appid: "wx665a301270bee838",
    secret: "f41feef82d699ff4cb53336fd0766dc0",
  });
};
</script>
