<template>
	<div class="main">
		<nav id="menu">
			<h1 id="sitename">MySite</h1>
			<ul class="menu__item">
				<li class="menu__link" :class="{ 'active': $route.name === 'home' }">
					<router-link to="/">
						Домашняя
					</router-link>
				</li>
				<li>
					<router-link class="menu__link" :class="{ 'active': $route.name === 'auth' }" to="/auth">
						Авторизация
					</router-link>
				</li>
				<li>
					<router-link class="menu__link" :class="{ 'active': $route.name === 'analytic' }" to="/analytic">
						Аналитика
					</router-link>
				</li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "app-page"
}
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
	height: 100vh;
}

h1,
h2 {
	text-align: center;
}

h1 {
	color: #222;
}

h2 {
	color: #555;
}

nav#menu {
	margin-top: 1px;
	background: #3498db;
	text-align: center;
	height: 50px;
	width: 100%;
}

nav#menu ul {
	padding: 0;
	background: white;
	margin: 0 auto;
	display: inline-block;
	height: 50px;
}

nav#menu ul li {
	float: left;
	padding: 0 20px;
	background: #3498db;
	list-style: none;
	margin-right: 5px;
	line-height: 50px;
	height: 50px;
	transition: margin 0.1s ease-in-out;
}

nav#menu ul li:nth-child(1) {
	margin-left: 5px;
}

nav#menu ul li.active {
	background: #2980b9;
}

nav#menu ul li a {
	color: white;
	text-decoration: none;
	font-size: 16px;
}

nav#menu h1#sitename {
	font-size: 1.2em;
	line-height: 50px;
	margin: 0;
	position: absolute;
	left: 0.5em;
	color: white;
	opacity: 0;
	transition: opacity 0.1s ease-in-out;
}

nav#menu.scrolled {
	margin: 0;
	position: fixed;
	top: 0;
}

nav#menu.scrolled ul li {
	margin: 0;
}

nav#menu.scrolled h1#sitename {
	opacity: 1;
}

@media (max-width: 568px) {
	nav#menu ul li a {
		font-size: 14px;
	}
}

@media (max-width: 428px) {
	nav#menu ul li {
		padding: 0 10px;
	}

	nav#menu ul li a {
		font-size: 11px;
	}
}

@media (max-width: 320px) {
	nav#menu ul li {
		padding: 0 5px;
	}

	nav#menu ul li a {
		font-size: 10px;
	}

	.home-wrapper__title {
		font-size: 25px;
	}

	.home-wrapper__text {
		font-size: 17px;
	}
}
</style>