<template>
	<header>
		<div class="container-config">
			<div class="config direction">
				<div v-for="item in  directionSets " @click="setClassName(item, 'direction')" class="config-item"
					 :class="activeName(item, 'direction')">
					{{ item }}
				</div>
			</div>
			<div class="config justifyContent">
				<div v-for=" item  in  justifyContentSets " @click="setClassName(item, 'justifyContent')"
					 class="config-item" :class="activeName(item, 'justifyContent')">
					{{ item }}
				</div>
			</div>
			<div class="config alignContent">
				<div v-for=" item  in  alignContentSets " @click="setClassName(item, 'alignContent')" class="config-item"
					 :class="activeName(item, 'alignContent')">
					{{ item }}
				</div>
			</div>
			<div class="config alignItems">
				<div v-for=" item  in  alignItemsSets " @click="setClassName(item, 'alignItems')" class="config-item"
					 :class="activeName(item, 'alignItems')">
					{{ item }}
				</div>
			</div>
		</div>
	</header>
	<main>
		<div class="container" :class="className()">
			<div v-for="( item, idx ) in  9 " class="item">{{ idx + 1 }}</div>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue'

const directionSets = ['row', 'row-reverse', 'column', 'column-reverse']
const justifyContentSets = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
const alignContentSets = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
const alignItemsSets = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

let direction = ref('direction-row')
let justifyContent = ref('justifyContent-flex-start')
let alignContent = ref('alignContent-flex-start')
let alignItems = ref('alignItems-flex-start')

const setClassName = (item, attribute) => {
	if (attribute === 'direction') direction.value = 'direction-' + item
	if (attribute === 'justifyContent') justifyContent.value = 'justifyContent-' + item
	if (attribute === 'alignContent') alignContent.value = 'alignContent-' + item
	if (attribute === 'alignItems') alignItems.value = 'alignItems-' + item
}

const className = () => {
	return [direction.value, justifyContent.value, alignContent.value, alignItems.value]
}

const activeName = (item, attribute) => {
	switch (attribute) {
		case 'direction':
			return attribute + '-' + item === direction.value ? 'active' : ''
		case 'justifyContent':
			return attribute + '-' + item === justifyContent.value ? 'active' : ''
		case 'alignContent':
			return attribute + '-' + item === alignContent.value ? 'active' : ''
		case 'alignItems':
			return attribute + '-' + item === alignItems.value ? 'active' : ''
		default:
			break
	}
}

</script>

<style lang="less" scoped>
.container-config {
	// margin: 0 auto;
	background-color: #fff;
	border: 3px solid #eee;
	border-radius: 16px;
	padding: 10px;
	box-shadow: 3px 3px 10px 3px #00000055;
	width: 800px;
	margin-bottom: 16px;

	.config {
		display: flex;
		margin-bottom: 10px;

		.config-item {
			margin: 0 8px;
			padding: 10px;
			height: fit-content;
			border-radius: 5px;
			border: 3px solid #eee;
			color: #555;
			box-shadow: 3px 3px 10px 3px #00000055;
			cursor: pointer;

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
	height: 450px;
	border-radius: 16px;
	padding: 10px;
	border: 3px solid #eee;
	box-shadow: 3px 3px 10px 3px #00000055;
	display: flex;
	flex-wrap: wrap;

	&.direction-row {
		flex-direction: row;
	}

	&.direction-row-reverse {
		flex-direction: row-reverse;
	}

	&.direction-column {
		flex-direction: column;
	}

	&.direction-column-reverse {
		flex-direction: column-reverse;
	}

	&.justifyContent-flex-start {
		justify-content: flex-start;
	}

	&.justifyContent-flex-end {
		justify-content: flex-end;
	}

	&.justifyContent-center {
		justify-content: center;
	}

	&.justifyContent-space-between {
		justify-content: space-between;
	}

	&.justifyContent-space-around {
		justify-content: space-around;
	}

	&.justifyContent-space-evenly {
		justify-content: space-evenly;
	}

	&.alignContent-flex-start {
		align-content: flex-start;
	}

	&.alignContent-flex-end {
		align-content: flex-end;
	}

	&.alignContent-center {
		align-content: center;
	}

	&.alignContent-space-between {
		align-content: space-between;
	}

	&.alignContent-space-around {
		align-content: space-around;
	}

	&.alignContent-stretch {
		align-content: stretch;
	}


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
