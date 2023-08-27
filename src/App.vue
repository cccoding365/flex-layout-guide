<template>
	<header>
		<div class="container-config">
			<div v-for="property in Object.keys(flexProperties)" class="config">
				<span class="config-item">{{ property }}</span>
				<span v-for="it in flexProperties[property]" @click="setProperty(property, it)" class="config-item"
					  :class="{ active: defaultConfig[property] === it }">
					{{ it }}
				</span>
			</div>
		</div>
	</header>
	<main>
		<div class="container" :style="defaultConfig">
			<div v-for="( item, idx ) in  9 " class="item">{{ idx + 1 }}</div>
		</div>
	</main>
</template>

<script setup>
import flexProperties from "../src/config/flex-properties.json"

import { ref } from 'vue'

let defaultConfig = ref({
	'display': 'flex',
	'flex-direction': 'row',
	'flex-wrap': 'nowrap',
	'justify-content': 'flex-start',
	'align-items': 'flex-start',
	'align-content': 'flex-start'
})

const setProperty = (property, it) => {
	defaultConfig.value[property] = it
}

</script>

<style lang="less" scoped>
.container-config {
	background-color: #fff;
	border: 3px solid #eee;
	border-radius: 16px;
	padding: 10px;
	box-shadow: 3px 3px 10px 3px #00000055;
	width: fit-content;
	margin-bottom: 16px;

	.config {
		display: flex;
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}

		.config-item {
			margin: 0 8px 0 0;
			padding: 10px;
			height: fit-content;
			border-radius: 8px;
			border: 3px solid #eee;
			color: #aaa;
			width: 150px;
			text-align: center;
			cursor: pointer;
			box-shadow: none;

			&:first-child {
				color: #333;
				font-weight: bold;
				box-shadow: -3px 3px 10px 3px #00000055;
			}

			&:last-child {
				margin-right: 0;
			}

			&.active {
				background-color: pink;
				color: #fff;
			}
		}
	}
}

.container {
	background-color: #fff;
	// margin: 0 auto;
	width: 800px;
	height: 400px;
	border-radius: 16px;
	padding: 10px;
	border: 3px solid #eee;
	box-shadow: 3px 3px 10px 3px #00000055;

	.item {
		margin: 8px;
		width: 100px;
		// height: 100px;
		color: #fff;
		font-size: 50px;
		line-height: 100px;
		text-align: center;
		border-radius: 10px;
		border: 3px solid #eee;
		background-color: skyblue;
		box-shadow: 3px 3px 10px 3px #00000055;
		transition: all .25s ease-in-out;
	}
}
</style>
