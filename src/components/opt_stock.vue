<template>
  <div class="opt_stock">
    <div class="opt_stock_body">
      <div class="top_swiper">
        <div class="left_title">
          <i>自选资讯</i>
        </div>
        <div class="right_swiper">
          <van-swipe
            class="my-swipe"
            :autoplay="3000"
            loop
            vertical
            :touchable="false"
            :show-indicators="false"
          >
            <template v-for="(item,index) in cg">
              <van-swipe-item :key="index">
                <div class="item_cont">
                  <span>{{item.title}}</span>
                </div>
              </van-swipe-item>
            </template>
          </van-swipe>
        </div>
      </div>
      <div class="add_btn">
        <span>+添加股票</span>
      </div>
      <div class="remind">
        <span>行情由第三提供，详见使用声明</span>
      </div>
      <div class="bottom_swiper">
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          loop
          vertical
          :touchable="false"
          :show-indicators="false"
        >
          <template v-for="(item,index) in bottom_swip">
            <van-swipe-item :key="index">
              <div class="item_cont">
                <div class="cont_box">
                  <div class="title">{{item.title}}</div>
                  <div class="right_text">
                    <span>{{item.num1}}</span>
                    <span>{{item.num2}}</span>
                    <span>{{item.num3}}%</span>
                    <van-icon name="arrow" size="15px" color="#C3C7CA" />
                  </div>
                </div>
              </div>
            </van-swipe-item>
          </template>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cg: [
        { title: "明星基金经理的持仓是宝藏" },
        { title: "复盘：下周A股能够止跌企稳吗？" },
        { title: "冲高700点！昨夜美股暴力大反攻,特斯拉飙近11%!" },
      ],
      bottom_swip: [
        {
          title: "创业板指",
          num1: 2483.03,
          num2: -40.36,
          num3: -1.6,
        },
        {
          title: "上证指数",
          num1: 3234.03,
          num2: -19.8,
          num3: -0.61,
        },
        {
          title: "深证指数",
          num1: 12742.85,
          num2: -118.9,
          num3: -0.92,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url(../common/less/opt_stock.less);
</style>
