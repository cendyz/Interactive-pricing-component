<template>
	<div
		class="absolute top-0 left-0 w-full h-[26em] bg-paleBlue rounded-bl-[7em] opacity-20"></div>
	<main class="flex flex-col py-[7em] px-[1em] container relative">
		<div class="relative flex flex-col gap-y-[.6em] text-center">
			<h1 class="font-manrope800 relative z-10 text-[1.2rem]">
				Simple, traffic-based pricing
			</h1>
			<p
				class="relative z-10 text-[.8rem] px-[6em] text-grayishBlue font-manrope600">
				Sign-up for our 30-day trial. No credit card required.
			</p>
			<img
				:src="circles"
				alt=""
				class="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]" />
		</div>
		<div
			class="flex flex-col items-center mt-[5em] p-[1.7em] bg-white rounded-xl rounded-b-none border-b border-b-gray-slate-100 md:w-[28em] md:mx-auto md:p-[2.5em] downShadow">
			<div
				class="flex justify-center md:justify-between items-center w-full">
				<h2
					class="uppercase text-grayishBlue font-manrope600 text-[.8rem]">
					100k pageviews
				</h2>
				<div class="gap-x-[.5em] items-center hidden md:flex">
					<p class="text-[2rem] font-manrope800">{{ pageviews }}.00</p>
					<p class="text-grayishBlue">/ month</p>
				</div>
			</div>
			<input
				type="range"
				id="amount"
				class="input my-[1.7em] appearance-none w-full bg-transparent cursor-pointer"
				min="0.00"
				max="32.00"
				v-model="data.default"
				@input="updateTrackBackground" />
			<div class="flex gap-x-[.5em] items-center md:hidden">
				<p class="text-[2rem] font-manrope800">{{ pageviews }}.00</p>
				<p class="text-grayishBlue">/ month</p>
			</div>
			<div class="flex items-center mt-[1.7em]">
				<p
					class="capitalize text-[.8rem] text-grayishBlue font-manrope600">
					monthly billing
				</p>
				<button
					type="button"
					class="py-[.8em] px-[1.5em] bg-lightGrayishBlue-toggleBackground rounded-3xl mx-[.7em] relative transition-colors duration-200 hover:bg-softCyan"
					@click="data.toggle = !data.toggle">
					<span
						class="absolute top-[15.6%] left-[8%] w-[1.1em] h-[1.1em] bg-white rounded-full btnToggle"
						:style="{ left: data.toggle ? '56%' : '8%' }"></span>
				</button>
				<p
					class="text-[.8rem] text-grayishBlue relative after:content-['-25%'] after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-55%] after:text-lightRed after:bg-lightGrayishRed after:text-[.6rem] font-manrope600 after:px-[.7em] after:py-[.2em] after:rounded-2xl md:after:right-[-110%] discount">
					Yearly Billing
				</p>
			</div>
		</div>
		<div
			class="flex flex-col bg-white p-[1.7em] items-center gap-y-[.3em] md:w-[28em] md:mx-auto md:p-[2.5em] md:flex-row md: justify-between md:items-center downShadow">
			<div class="">
				<div
					class="flex items-center gap-x-[1.1em]"
					v-for="item in prosData"
					:key="nanoid()">
					<img :src="check" alt="" />
					<p class="text-grayishBlue text-[.8rem] font-manrope600">
						{{ item.text }}
					</p>
				</div>
			</div>
			<button
				type="button"
				class="py-[.8em] px-[3.5em] mt-[2em] rounded-3xl bg-darkDesaturatedBlue text-paleBlue font-manrope600 text-[.8rem] md:mt-0 transition-colors hover:text-white">
				Start my trial
			</button>
		</div>
	</main>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { nanoid } from 'nanoid'
import check from '@/images/icon-check.svg'
import circles from '@/images/pattern-circles.svg'
const data = reactive({
	min: 0,
	max: 32,
	default: 16,
	toggle: false,
})
const pageviews = computed(() => `$${data.default}`)

const updateTrackBackground = (): void => {
	const actualValue =
		((data.default - data.min) / (data.max - data.min)) * 100
	document.documentElement.style.setProperty(
		'--slider-fill',
		`${actualValue}%`
	)
}

const prosData: { [key: number]: { text: string } } = {
	0: {
		text: 'Unlimited websites',
	},
	1: {
		text: '100% data ownership',
	},
	2: {
		text: 'Email reports',
	},
}
</script>

<style lang="scss">
:root {
	--slider-fill: 50%;
}
.btnToggle {
	transition: left 0.2s;
}

input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-moz-range-track,
input[type='range']::-ms-track {
	height: 0.6em;
	border-radius: 1em;
	background: linear-gradient(
		to right,
		#a5f3eb var(--slider-fill),
		hsl(224, 65%, 95%) var(--slider-fill)
	);
}

input[type='range']::-webkit-slider-thumb,
input[type='range']::-moz-range-thumb,
input[type='range']::-ms-thumb {
	-webkit-appearance: none;
	appearance: none;
	background-color: hsl(174, 86%, 45%);
	height: 2.2em;
	width: 2.2em;
	border: none;
	border-radius: 50%;
	background-image: url('./images/icon-slider.svg');
	background-repeat: no-repeat;
	background-position: center;
	transition: background-color 0.2s;
	box-shadow: 0px 15px 20px 4px rgb(165, 243, 235);
}

input[type='range']:active::-webkit-slider-thumb,
input[type='range']:active::-moz-range-thumb {
	cursor: grab;
}
input[type='range']:hover::-webkit-slider-thumb,
input[type='range']:hover::-moz-range-thumb {
	background-color: rgb(106, 231, 218);
}

.downShadow {
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

@media (min-width: 769px) {
	.discount {
		&::after {
			content: '25% discount';
		}
	}
}
</style>
