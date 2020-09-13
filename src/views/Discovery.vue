<template>
  <div class="discovery">
    <div class="discovery_body">
      <div class="top_bg">
        <img class="title-logo" width="100" height="100" src="../assets/logo.png" alt />
        <div class="san"></div>
        <div class="title-txt out">我能帮你诊断风险，陪你挑...</div>
        <img class="title-search" width="15" height="15" src="../assets/search.png" alt />
      </div>
      <div class="top_box">
        <div class="search_box"></div>
        <div class="top_grid">
          <van-grid square :border="false" :column-num="5">
            <template v-for="(item, index) in top_grid">
              <van-grid-item :key="index">
                <div class="gtid_cont" :key="index">
                  <img :src="item.imag" :alt="item.title" />
                  <span>{{ item.title }}</span>
                </div>
              </van-grid-item>
            </template>
          </van-grid>
        </div>
        <div class="bottom_box">
          <div class="roll_box">
            <van-swipe
              class="roll-swipe"
              :vertical="true"
              :touchable="false"
              :show-indicators="false"
              :autoplay="4000"
              indicator-color="white"
            >
              <template v-for="(item, index) in roll_box">
                <van-swipe-item :key="index">
                  <div class="item_box">
                    <div class="left_box">
                      <span @click="ccc">A股</span>
                      <span>|</span>
                      <span>{{ item.title }}</span>
                      <span>{{ item.lnum }}</span>
                    </div>
                    <div class="right_box">
                      <span>{{ item.rnum }}</span>
                      <span>{{ item.rnum2 }}%</span>
                      <van-tag color="#F5F5F5" text-color="#999999">{{ item.type }}</van-tag>
                    </div>
                  </div>
                </van-swipe-item>
              </template>
            </van-swipe>
          </div>
          <div class="hotspot_box">
            <div class="hot">热点</div>
            <template v-for="(item, index) in hotspot">
              <span class="hotspot_text" :key="index">#{{ item }}</span>
            </template>
          </div>
        </div>
      </div>
      <div class="tab_one">
        <disc-tab-one></disc-tab-one>
      </div>
      <div class="wealth_train">
        <div class="title_box">
          <span>财富直通车</span>
          <span>最近使用</span>
        </div>
        <div class="wealth_swiper">
          <van-swipe class="my-swipe" width="300" :loop="false" indicator-color="white">
            <template v-for="(item,index) in straightCar">
              <van-swipe-item :key="index">
                <div class="item_cont" :key="index">
                  <div class="title_box">
                    <div class="text_icon">
                      <img src="../assets/bnt.png" alt />
                      <span>{{item.topic}}</span>
                    </div>
                    <van-icon name="arrow" size="10px" color="#A3A8AC" />
                  </div>
                  <div class="cont_box">
                    <div class="cont_left">
                      <span>{{item.title}}</span>
                      <span>{{item.sketch}}</span>
                      <div class="btn">{{item.btn}}</div>
                    </div>
                    <div class="cont_right">
                      <img src="../assets/bnt-2.png" alt />
                    </div>
                  </div>
                </div>
              </van-swipe-item>
            </template>
            <!-- <van-swipe-item><div class="item_cont"></div></van-swipe-item>
						<van-swipe-item><div class="item_cont"></div></van-swipe-item>
            <van-swipe-item><div class="item_cont"></div></van-swipe-item>-->
          </van-swipe>
        </div>
      </div>
      <div class="tab_two">
        <van-sticky>
          <van-tabs
            v-model="tab_two_active"
            swipeable
            line-width="12px"
            color="#2772FF"
            title-active-size="20px"
            title-active-color="#2772FF"
            title-inactive-color="#000"
          >
            <van-tab title="快讯">
              <div class="title" v-for="index in 4" :key="index">
                <div>A股震荡 多只基金净值明显缩水</div>
                <div class="span">9月以来，公墓基金多只重量级新品启动发行，其中，嘉实基金董事长总经理，平衡...</div>

                <div class="span1">金融投资报</div>
                <van-image
                  width="100"
                  height="100"
                  flt="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  class="imgg"
                />
              </div>
            </van-tab>
            <van-tab title="热点">
              <div class="title" v-for="index in 4" :key="index">
                <div>A股震荡 多只基金净值明显缩水</div>
                <div class="span">9月以来，公墓基金多只重量级新品启动发行，其中，嘉实基金董事长总经理，平衡...</div>

                <div class="span1">金融投资报</div>
                <van-image
                  width="100"
                  height="100"
                  flt="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  class="imgg"
                />
              </div>
            </van-tab>
            <van-tab title="问答">
              <div class="title" v-for="index in 4" :key="index">
                <div>A股震荡 多只基金净值明显缩水</div>
                <div class="span">9月以来，公墓基金多只重量级新品启动发行，其中，嘉实基金董事长总经理，平衡...</div>

                <div class="span1">金融投资报</div>
                <van-image
                  width="100"
                  height="100"
                  flt="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  class="imgg"
                />
              </div>
            </van-tab>
            <van-tab title="基金">
              <div class="title" v-for="index in 4" :key="index">
                <div>A股震荡 多只基金净值明显缩水</div>
                <div class="span">9月以来，公墓基金多只重量级新品启动发行，其中，嘉实基金董事长总经理，平衡...</div>

                <div class="span1">金融投资报</div>
                <van-image
                  width="100"
                  height="100"
                  flt="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  class="imgg"
                />
              </div>
            </van-tab>
            <van-tab title="行情">
              <div class="title" v-for="index in 4" :key="index">
                <div>A股震荡 多只基金净值明显缩水</div>
                <div class="span">9月以来，公墓基金多只重量级新品启动发行，其中，嘉实基金董事长总经理，平衡...</div>

                <div class="span1">金融投资报</div>
                <van-image
                  width="100"
                  height="100"
                  flt="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                  class="imgg"
                />
              </div>
            </van-tab>
          </van-tabs>
        </van-sticky>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar.vue";
import DiscTabOne from "@/components/disc_tabone.vue";
export default {
  data() {
    return {
      top_grid: [
        { title: "余额宝", imag: require("../assets/Home/yueb.png") },
        { title: "理财", imag: require("../assets/Home/lic.png") },
        { title: "黄金", imag: require("../assets/Home/hj.png") },
        { title: "基金", imag: require("../assets/Home/jj.png") },
        { title: "尊享", imag: require("../assets/Home/zhunx.png") },

        { title: "股票", imag: require("../assets/Home/gp.png") },
        { title: "财富号", imag: require("../assets/Home/cfh.png") },
        { title: "年金险", imag: require("../assets/Home/bx.png") },
        { title: "帮你投", imag: require("../assets/Home/bnit.png") },
      ],
      roll_box: [
        {
          title: "创业板指",
          lnum: 2540.28,
          rnum: -108.4,
          rnum2: -4.05,
          type: "交易中",
        },
        {
          title: "上证指数",
          lnum: 3272.61,
          rnum: -43.65,
          rnum2: -1.34,
          type: "交易中",
        },
        {
          title: "深证指数",
          lnum: 12964.9,
          rnum: -328.46,
          rnum2: -2.47,
          type: "交易中",
        },
      ],
      hotspot: ["楼市调控", "特斯拉出口", "8月金融数据"],
      tab_one_active: 0,
      tab_one: [
        "投资顺风车",
        "攒点金子",
        "稳健理财",
        "精选组合",
        "进攻优选",
        "保险优选",
      ],
      value: 4,
      tab_two_active: 1,
      current: 0,
      straightCar: [
        {
          topic: "帮你投",
          title: "人人可享的顶级投顾服务来了",
          sketch: "省心理财交给我",
          btn: "匹配专属策略",
        },
        {
          topic: "稳健理财",
          title: "闲钱理财升级版",
          sketch: "省心理财交给我",
          btn: "去看看",
        },
        {
          topic: "帮你投",
          title: "人人可享的顶级投顾服务来了",
          sketch: "省心理财交给我",
          btn: "匹配专属策略",
        },
        {
          topic: "帮你投",
          title: "人人可享的顶级投顾服务来了",
          sketch: "省心理财交给我",
          btn: "匹配专属策略",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    ccc() {
      localStorage.clear();
    },
  },
  components: {
    TabBar,
    DiscTabOne,
  },
};
</script>

<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/discovery.less);
</style>
