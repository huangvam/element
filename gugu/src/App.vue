<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
	export default {
		mounted() {
			setTimeout(() => {
				window.L2Dwidget.init({
					pluginRootPath: 'live2dw/',
					pluginJsPath: 'lib/',
					pluginModelPath: 'live2d-widget-model-hijiki/assets/',
					tagMode: false,
					debug: false,
					model: { jsonPath: '../live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json' },
					display: { position: 'right', width: 200, height: 300 },
					mobile: { show: true },
					log: false
				})
			}, 1000)
		},
	}
</script>
<style lang="scss">
	body {
		margin: 0;
    color: whitesmoke;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
</style>
