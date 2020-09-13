<template>
  <div class="tabbar">
    <van-tabbar
      route
      v-model="active"
      z-index="999"
      placeholder
      active-color="#016AFF"
      inactive-color="#C2CED4"
    >
      <van-tabbar-item replace to="/">
        <span>发现</span>
        <template #icon="props">
          <img :src="props.active ? icon[0].active : icon[0].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/optional">
        <span>自选</span>
        <template #icon="props">
          <img :src="props.active ? icon[1].active : icon[1].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/community">
        <span>社区</span>
        <template #icon="props">
          <img :src="props.active ? icon[2].active : icon[2].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/property">
        <span>资产</span>
        <template #icon="props">
          <img :src="props.active ? icon[3].active : icon[3].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: [
        {
          active: "https://s1.ax1x.com/2020/09/08/wMSXFK.png",
          inactive: "https://s1.ax1x.com/2020/09/08/wMSjJO.png",
        },
        {
          active: "https://s1.ax1x.com/2020/09/08/wMSvWD.png",
          inactive: "https://s1.ax1x.com/2020/09/08/wMppyd.png",
        },
        {
          active: "https://s1.ax1x.com/2020/09/08/wMpSQH.png",
          inactive: "https://s1.ax1x.com/2020/09/08/wMSzSe.png",
        },
        {
          active: "https://s1.ax1x.com/2020/09/08/wMSqdx.png",
          inactive: "https://s1.ax1x.com/2020/09/08/wMSLo6.png",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.tabbar {
  font-weight: 600;

  div.van-tabbar-item--active {
    color: #016aff !important;
  }
}
</style>
