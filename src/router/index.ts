import Taro, { useRouter } from "@tarojs/taro";

const router = {
  // 跳转
  navigateTo: (option: { url: string }) => {
    console.log(option);
    if (process.env.NODE_ENV === "development") {
      Taro.navigateTo(option);
    } else {
      // 生产环境下，因使用多页面打包，需使用a标签跳转
      const url = option.url.split("?")[0];
      const params = option.url.split("?")[1];
      const a = document.createElement("a");
      a.href = `${url}.html?${params}`;
      a.click();
    }
  },
  // 回退
  navigateBack: (option: { delta: number }) => {
    if (process.env.NODE_ENV === "development") {
      Taro.navigateBack(option);
    } else {
      window.history.go(0 - option.delta);
    }
  },
  useRouter: () => useRouter(),
};

export default router;
