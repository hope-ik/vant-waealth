<template>
  <div class="community">
    <div class="community_body">
      <!-- 顶部搜索 -->
      <div class="top_search">
        <van-sticky>
          <van-search
            v-model="value"
            background="#2772FF"
            color="#C5DDFF"
            show-action
            shape="round"
            placeholder="问答/看点/用户/股票/基金"
          >
            <template #action>
              <div class="sea_icon">
                <van-icon name="chat-o" size="30px" color="#C5DDFF" />
              </div>
            </template>
            <template #left-icon>
              <van-icon name="search" size="20px" color="#C5DDFF" />
            </template>
          </van-search>
        </van-sticky>
      </div>
      <!-- 搜索结束 -->
      <!-- 顶部导航开始 -->
      <div class="top_navb">
        <van-grid square :border="false">
          <van-grid-item>
            <img src="../assets/dk-1.png" alt />
            <span>大咖</span>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/zl-1.png" alt />
            <span>专栏</span>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/kd-1.png" alt />
            <span>看点</span>
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/dsp-1.png" alt />
            <span>短视频</span>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 顶部导航结束 -->
      <!-- 标签页开始 -->
      <div class="tab_page">
        <!-- <van-sticky :offset-top="55"> -->
        <van-tabs
          v-model="active"
          sticky
          offset-top="54"
          animated
          swipeable
          color="#266EFF"
          title-active-color="#000"
          title-inactive-color="#999999"
        >
          <van-tab title="热门">
            <div class="host_box">
              <template v-for="index in 4">
                <div class="cont_box" :key="index">
                  <div class="user_box">
                    <div class="user_left">
                      <van-image
                        class="user_img"
                        radius="3"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                      />
                      <span>阳光天气与你</span>
                    </div>
                    <div class="user_right">
                      <span>+关注</span>
                    </div>
                  </div>
                  <div class="cont_box">
                    <div class="title_box">
                      <span>一周两节|两手准备，盈利是大概率...</span>
                    </div>
                    <div class="description_box">
                      <div class="text_box">上证指数从今年最高点3458.79(7月13日)到3260.35点位，回车幅度...</div>
                      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt />
                    </div>
                  </div>
                  <div class="bottom_box">
                    <div class="left_box">
                      <span>32分钟前</span>
                    </div>
                    <div class="right_box">
                      <van-icon name="ellipsis" size="20" color="#ADADAD" />
                      <div class="like_box">
                        <van-icon name="good-job-o" size="20" />
                        <span>999+</span>
                      </div>
                      <div class="comment_box">
                        <van-icon name="comment-o" size="20" />
                        <span>999+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </van-tab>
          <van-tab title="讨论区">
            <div class="forum_box">
              <!-- 我的评论 -->
              <div class="my_forum">
                <div class="tab_title">
                  <div class="title_box">
                    <span>我的讨论区</span>
                    <div class="skip_box">
                      <span>自选&持有</span>
                      <van-icon name="arrow" color="#999999" size="14" />
                    </div>
                  </div>
                </div>
                <div class="comment_box">
                  <template v-for="index in 2">
                    <div class="cont_box" :key="index">
                      <div class="regulation_data">
                        <span>-3.26%</span>
                        <span>已收盘</span>
                      </div>
                      <div class="description_box">
                        <span>上证指数讨论区</span>
                        <span>
                          <span style="color:#FDAD27;font-size: 10px;">[99+条]</span>
                          上证指数讨论区
                        </span>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <!-- 财富小组 -->
              <div class="wealth_team">
                <div class="tab_title">
                  <div class="title_box">
                    <span>财富小组</span>
                    <div class="skip_box">
                      <span>全部</span>
                      <van-icon name="arrow" color="#999999" size="14" />
                    </div>
                  </div>
                </div>
                <div class="cont-box">
                  <div class="top_card">
                    <div class="card_box">
                      <span>养老早规划</span>
                      <div class="text_box">
                        <span>如果没有养老金，60岁100...</span>
                      </div>
                    </div>
                    <div class="card_box">
                      <span>基金综合</span>
                      <div class="text_box">
                        <span>
                          <span style="color:rgb(253, 173, 39)">[99+条]</span>明星基金经理的持仓...
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_card">
                    <template v-for="index in 3">
                      <div class="card_box" :key="index">
                        <div class="regulation_data">
                          <van-image
                            style="border-radius: 8px;"
                            width="115px"
                            height="80px"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                          />
                        </div>
                        <div class="description_box">
                          <span>大学生理财社小组</span>
                          <span>你最厉害的省钱方式都有哪些？在当前...</span>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="关注">
            <div class="attention" style="    font-size: 12px;">
              <van-image
                width="45px"
                height="45px"
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <p>你还没有关注的人</p>
              <p>赶紧去社区找找牛人吧！</p>
            </div>
          </van-tab>
        </van-tabs>
        <!-- </van-sticky> -->
      </div>
      <!-- 标签页结束 -->
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar.vue";
export default {
  data() {
    return {
      value: "",
      active: 1,
    };
  },
  components: {
    TabBar,
  },
};
</script>
<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/community.less);
</style>
