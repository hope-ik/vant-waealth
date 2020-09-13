<template>
  <!-- <div class="tab_one"> -->
  <van-tabs
    v-model="tab_one_active"
    swipeable
    line-width="12px"
    animated
    color="#2772FF"
    title-active-size="20px"
    title-active-color="#2772FF"
    title-inactive-color="#000"
  >
    <van-tab :title="item" :key="index" v-for="(item, index) in tab_one">
      <div class="cont_box">
        <div
          v-for="(item,index) in list"
          :class="['interior_box showItem animate__animated animate__fadeIn','show'+item.id]"
          :key="index"
          ref="showItem"
        >
          <div>
            <span class="title">{{item.id}}</span>
            <div class="card_box">
              <div class="card_top">
                <span>投资潜力</span>
                <van-rate
                  size="15px"
                  color="#FBD612"
                  readonly
                  allow-half
                  void-icon="star"
                  void-color="#FBD612"
                />
              </div>
              <div class="card_bottom">
                <div class="bottom_left">
                  <span>华夏消费升级灵活配..</span>
                  <span>1亿基金持有人的选择</span>
                  <div class="tag_two">
                    <van-tag plain type="primary">内需消费</van-tag>
                    <van-tag plain type="primary">热门板块</van-tag>
                  </div>
                </div>
                <div class="bottom_right">10元上车</div>
              </div>
            </div>
            <div class="bottom_tag">
              <van-icon name="chart-trending-o" class="tag_icon" color="#286FFE" size="15px" />
              <span>不知道怎么选，让专家「帮你投」</span>
              <van-icon name="arrow" color="#538CE7" />
            </div>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      tab_one_active: 0,
      tab_one: [
        "投资顺风车",
        "攒点金子",
        "稳健理财",
        "精选组合",
        "进攻优选",
        "保险优选",
      ],
      list: [
        { id: 1, title: "地产" },
        { id: 2, title: "黄金" },
        { id: 3, title: "固定期限" },
        { id: 4, title: "业绩优选" },
        { id: 5, title: "投资组合" },
        { id: 6, title: "保险理财" },
      ],
    };
  },
};
</script>
<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/discovery.less);
</style>
