<template>
	<dv-full-screen-container class="full_screen_container">
		<vue-particles
			color="#dedede"
			:particleOpacity="0.7"
			:particlesNumber="80"
			shapeType="star"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="false"
			:lineOpacity="0.4"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
      class="particles"
		>
		</vue-particles>
    <!-- 登录框 -->
    <div class="login_box">
      <dv-border-box-7 >
        <div class="title_2">咕咕</div>
      </dv-border-box-7>
    </div>
	</dv-full-screen-container>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>
<style lang="scss">
.login_box{
  width: 36%;
  height: 25%;
  position:fixed;
  top: 50%;
  left: 50%;
  margin: -8% -18%;
}
.full_screen_container{
  background: url('../../public/image_8523.jpg') no-repeat;
  background-size:100%;
}
.particles{
  width: 100%;
  height: 100%;
}
.title_2{
  text-align: center;
  font-size: 32px;
  line-height: 60px;
  font-weight: 600;
}
</style>
