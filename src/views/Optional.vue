<template>
	<div class="optional">
		<div class="nav_bar">
			<van-nav-bar placeholder fixed>
				<template #title>
					<ul class="nav_ul">
						<li @click="hiedleft"><router-link to="/optional/opt_stock">股票</router-link></li>
						<li @click="showleft"><router-link to="/optional/opt_fund">基金</router-link></li>
					</ul>
				</template>
				<template v-if="navlef" #left>
					<div class="left_text">市场</div>
				</template>
				<template #right>
					<div class="right_icon">
						<van-icon name="search" size="20px" color="#BFD4FF"/>
						<van-icon name="bars" size="20px" color="#BFD4FF"/>
					</div>
				</template>
			</van-nav-bar>
		</div>
		<div class="optional_body">
			<router-view></router-view>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
export default {
	data() {
		return {
			navlef:true
		};
	},
	methods:{
		showleft(){
			this.navlef = false
		},
		hiedleft(){
			this.navlef = true
		}
	},
	components: {
		TabBar
	}
};
</script>
<style lang="less">
	@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
	@import url(../common/less/optional.less);
</style>
