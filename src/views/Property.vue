<template>
  <div>
    <!-- 顶部背景 -->
    <div class="herder">
      <div class="hearder-flex">
        <div class="flex_row wih">
          <van-icon name="setting-o" color="#cedff0" />
          <van-icon name="more-o" color="#cedff0" />
        </div>
      </div>
    </div>
    <!-- 用户昵称 -->
    <div class="beij found username flex_column">
      <div class="tio bordt flex_row">
        <div class="flx">
          <van-cell title="黄泰彬>" label="理财的第一天" title-class="tile_wit">
            <template #icon>
              <van-image
                round
                width="1.5rem"
                height="1.5rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </template>
          </van-cell>
        </div>
        <div class="flx">
          <van-cell title="资产配置升级" title-class="cotile2 tile_wit">
            <template #label>
              <van-tag color="#E4F2FE" text-color="#298EF8" size="large">开启三笔钱</van-tag>
            </template>
          </van-cell>
        </div>
      </div>
      <!-- 国泰国政 -->
      <van-cell
        title="理财有风险，入行需谨慎"
        icon="send-gift-o"
        color="#A2A8A8"
        :border="false"
        title-class="cotile"
      ></van-cell>
    </div>
    <!-- 我的资产 -->
    <div class="beij found zichang flex_column">
      <div class="bordt">
        <van-cell value="免费领取百万保障>" size="large" value-class="right_ti" title-class="tile_wit">
          <template #title>
            <span class="custom-title">我的资产</span>
            <van-icon name="gold-coin-o" class="le" />
          </template>
        </van-cell>
      </div>
      <!-- 总资产 -->
      <van-cell title="总资产" size="large" label="0.51" value-class="right_ti flex_column">
        <template>
          <span class="custom-title">昨日收益</span>
        </template>
        <template>
          <span class="custom-title">0.00</span>
        </template>
      </van-cell>
      <!-- y余额 -->
      <div class="flex_row">
        <div class="flx bordt_left">
          <van-cell title="余额" size="large" label="0.00" />
        </div>
        <div class="flx bordt_left">
          <van-cell title="余额宝" size="large" label="0.00" value-class="right_ti">
            <template>0.00</template>
          </van-cell>
        </div>
      </div>
      <!-- 理财产品 -->
      <div class="flex_row">
        <div class="flx bordt_left">
          <van-cell title="理财产品" size="large" label="收益健康" />
        </div>
        <div class="flx bordt_left">
          <van-cell title="基金" size="large" label="费率1折起" value-class="right_ti">
            <template>0.00</template>
          </van-cell>
        </div>
      </div>
      <!-- 黄金 -->
      <div class="flex_row">
        <div class="flx bordt_left">
          <van-cell title="黄金" size="large" label="0.46" value-class="right_ti">
            <template>0.00</template>
          </van-cell>
        </div>
        <div class="flx bordt_left"></div>
      </div>
    </div>
    <!-- 我的保障 -->
    <div class="beij found flex_column">
      <div class="bordt">
        <van-cell title="我的保障" title-class="tile_wit" />
      </div>
      <van-cell title="保险" label="1位家人保障中" />
    </div>
    <!-- 账单 -->
    <div class="beij found flex_column">
      <div class="bordt">
        <van-cell title="账单" title-class="tile_wit" is-link>
          <template #icon>
            <van-icon name="balance-list" size="23" color="#19B6FC" />
          </template>
        </van-cell>
      </div>
      <div class="bordt">
        <van-cell title="银行卡" title-class="tile_wit" is-link>
          <template #icon>
            <van-icon name="card" size="23" color="#FCCB07" />
          </template>
        </van-cell>
      </div>
      <div class="bordt">
        <van-cell title="卷包" title-class="tile_wit" is-link>
          <template #icon>
            <van-icon name="coupon" size="23" color="#FA7226" />
          </template>
        </van-cell>
      </div>
      <van-cell title="活动" title-class="tile_wit" is-link>
        <template #icon>
          <van-icon name="point-gift" size="23" color="#FD4D4D" />
        </template>
      </van-cell>
    </div>
    <!-- 借呗 -->
    <div class="beij found">
      <van-cell title="借呗" title-class="tile_wit" is-link>
        <template #icon>
          <van-icon name="graphic" size="23" color="#1D91FF" />
        </template>
      </van-cell>
    </div>
    <!-- 空白 -->
    <div class="kong"></div>
    <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar.vue";
export default {
  components: {
    TabBar,
  },
};
</script>
<style lang="less" scoped>
.flex_column {
  display: flex;
  flex-direction: column;
}

.flex_row {
  display: flex;
  flex-direction: row;
}

/* 顶部背景 */
.herder {
  width: 100%;
  height: 130px;
  background: linear-gradient(90deg, #11c0fe, #3a73f6);
  z-index: -1;
  text-align: right;
  .hearder-flex {
    width: 100%;
    height: 45px;
    background: linear-gradient(90deg, #11c0fe, #3a73f6);
    position: fixed;
    z-index: 999;
  }
}

/* 中间背景 */
.found {
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  padding-bottom: 10px;
}

/* 背景阴影 */
.beij {
  box-shadow: 0px 1px 0px 0px #f3f3f3, /*上边阴影 */ 0px 0px 0px 1px #f3f3f3,
    /*左边阴影  */ 0.2px 0px 0px 0px #f3f3f3,
    /*右边阴影 */ 0px 2px 0px 0px #f3f3f3;
  /*下边阴影 */
}

.wih {
  position: absolute;
  right: 0;
  width: 20%;
  padding-top: 10px;
  justify-content: space-around;
}

/* 用户昵称 */
.username {
  position: absolute;
  top: 45px;
  margin: 8px;
}

.tio {
  padding-top: 10px;
}

.flx {
  flex: 1;
}

.van-cell__title,
.van-cell__value {
  text-align: left;
  margin-left: 5px;
}

.cotile {
  color: #a2a8a8;
}

.cotile2 {
  color: #298ef8;
  text-align: right;
}

.zichang {
  margin-top: 80px;
}

/* 我的资产 */
.right_ti {
  text-align: right;
}

.le {
  margin-left: 10px;
}

/* 余额 */
.bordt {
  border: solid 1px #f0f0f0;
  border-width: 0 0 1px 0;
}

.bordt_left {
  border: solid 1px #f0f0f0;
  border-width: 1px 1px 0 0;
}

/* 字体变粗 */
.tile_wit {
  font-size: 18px;
  font-weight: 600;
}

/* 空白 */
.kong {
  height: 60px;
}
</style>