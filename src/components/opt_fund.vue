<template>
  <div class="opt_fund">
    <div class="opt_fund_body">
      <!-- 顶部折叠 -->
      <div class="top_fold">
        <div class="fund-top">
          <div class="t-left">
            <div class="tex">上证指数</div>
            <div class="num">3282.48</div>
            <div class="rate">+0.86%</div>
          </div>
          <div class="t-right">
            <div class="tex">深证成指</div>
            <div class="num">13020.56</div>
            <div class="rate">+1.23%</div>
          </div>
          <van-icon name="arrow-down" tag="em" />
        </div>
      </div>
      <!-- 顶部折叠结束 -->
      <!-- 自选基金卡片开始 -->
      <div class="opt_card">
        <div class="top_box">
          <div class="icon_title">
            <van-icon name="fire" size="20px" color="#FB4432" />热门基金
          </div>
          <span>平台高手持有的一流好基</span>
        </div>
        <div class="check_box">
          <van-checkbox-group v-model="checked">
            <div class="cont_box">
              <van-checkbox name="a" label-disabled>
                <div class="description">
                  <div class="top">
                    <span>银华信用季季红债券A</span>
                    <span>+2.48%</span>
                  </div>
                  <div class="bottom">
                    <span>穿越牛熊无惧波动</span>
                    <span>近1年涨跌幅</span>
                  </div>
                </div>
              </van-checkbox>
            </div>
            <div class="cont_box">
              <van-checkbox name="b" label-disabled>
                <div class="description">
                  <div class="top">
                    <span>银华信用季季红债券A</span>
                    <span>+2.48%</span>
                  </div>
                  <div class="bottom">
                    <span>穿越牛熊无惧波动</span>
                    <span>近1年涨跌幅</span>
                  </div>
                </div>
              </van-checkbox>
            </div>
            <div class="cont_box">
              <van-checkbox name="c" label-disabled>
                <div class="description">
                  <div class="top">
                    <span>银华信用季季红债券A</span>
                    <span>+2.48%</span>
                  </div>
                  <div class="bottom">
                    <span>穿越牛熊无惧波动</span>
                    <span>近1年涨跌幅</span>
                  </div>
                </div>
              </van-checkbox>
            </div>
          </van-checkbox-group>
        </div>
        <van-button type="primary" color="#266EFF" class="join_opt" size="normal">加入自选 随时关注</van-button>
        <div class="add_rest">
          <span>添加其他基金</span>
          <van-icon name="arrow" size="10px" />
        </div>
      </div>
      <!-- 自选基金结束 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: ["a", "b", "c"],
    };
  },
  methods: {},
};
</script>
<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/opt_fund.less);
</style>
