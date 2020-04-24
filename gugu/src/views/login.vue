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
			<dv-border-box-7>
				<div class="title_2">咕咕</div>
				<el-form style="padding:0 10%;" class="login">
					<el-form-item label="账号：" >
						<el-input size="small"
							v-model="user"
							placeholder=""
              auto-complete="off"
						></el-input>
					</el-form-item>
          <el-form-item label="密码：">
						<el-input size="small"
							v-model="pass"
              type="password"
							placeholder=""
						></el-input>
					</el-form-item>
				</el-form>
        <dv-decoration-9 :color="['rgba(233,233,216,0.8)', 'rgba(233,233,216,0.8)']" class="login_button" style="width:150px;height:80px;color:#fff;font-weight: 600;margin:20% auto;cursor:pointer">登录</dv-decoration-9>
			</dv-border-box-7>
		</div>
	</dv-full-screen-container>
</template>
<script>
	export default {
		data() {
			return {
        user:'',
        pass:'',
			}
    },
    mounted(){
      this.input = this.$store.state.name
    }
	}
</script>
<style lang="scss" scoped>
	.login_box {
		width: 36%;
		height: 28%;
		position: fixed;
		top: 50%;
		left: 50%;
		margin: -8% -18%;
	}
	.full_screen_container {
		background: url('../../public/image_8523.jpg') no-repeat;
		background-size: 100%;
	}
	.particles {
		width: 100%;
		height: 100%;
	}
	.title_2 {
		text-align: center;
		font-size: 32px;
		line-height: 60px;
		font-weight: 600;
	}
  .login /deep/ .el-input {
    width:80%;
    .el-input__inner{
      background: Transparent;
      border: 1px solid #5a5a5a;
      color:#fff
    }
  }
  .el-form-item /deep/ .el-form-item__label{
    color:#fff
  }
  .login_button{

  }
</style>
