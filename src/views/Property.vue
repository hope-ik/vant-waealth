<template>
  <div class="property">
    <div class="top-bg">
      <div class="flex-bg">
        <van-row>
          <van-col offset="12" span="12">
            <img width="20" height="20" src="../assets/sz-1.png" />
            <img width="20" height="20" src="../assets/tz-1.png" />
          </van-col>
        </van-row>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
  },
};
</script>

<style lang="less" scoped>
@import url("../common/property.less");
</style>
