<template>
	<dv-full-screen-container style="background-color: #282c34;">
		<vue-particles
			color="#dedede"
			:particleOpacity="0.7"
			:particlesNumber="80"
			shapeType="circle"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.4"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
		>
		</vue-particles>
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
