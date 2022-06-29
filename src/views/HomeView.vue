<template>
	<div class="home-wrapper">
		<div class="home-wrapper__title">Техническое задание</div>
		<div class="home-wrapper__text">Новикова Владислава</div>
	</div>
</template>

<script>
export default {
	name: "home-view"
}
</script>

<style lang="scss" scoped>
.home-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
}

.home-wrapper__title {
	font-size: 30px;
}

.home-wrapper__text {
	margin-top: 5px;
	font-size: 20px;
}
</style>