<template>
	<main class="flex flex-col py-[7em] px-[1em]">
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
			class="flex flex-col items-center mt-[5em] p-[1.7em] bg-white rounded-xl rounded-b-none border-b border-b-gray-slate-100">
			<h2 class="uppercase text-grayishBlue font-manrope600 text-[.8rem]">
				100k pageviews
			</h2>
			<input
				type="range"
				id="amount"
				class="input my-[1.7em] appearance-none w-full bg-transparent cursor-pointer"
				min="0.00"
				max="32.00"
				v-model="data.default"
				@input="updateTrackBackground" />
			<div class="flex gap-x-[.5em] items-center">
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
					class="py-[.8em] px-[1.5em] bg-lightGrayishBlue-toggleBackground rounded-3xl mx-[.7em] relative"
					@click="data.toggle = !data.toggle">
					<span
						:class="[
							'absolute top-[15.6%] left-[8%] w-[17px] h-[17px] bg-white rounded-full btnToggle',
							{ 'left-[56%]': data.toggle },
						]"></span>
				</button>
				<p
					class="capitalize text-[.8rem] text-grayishBlue relative after:content-['-25%'] after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-55%] after:text-lightRed after:bg-lightGrayishRed after:text-[.6rem] font-manrope600 after:px-[.7em] after:py-[.2em] after:rounded-2xl">
					yearly billing
				</p>
			</div>
		</div>
		<div
			class="flex flex-col bg-white p-[1.7em] items-center gap-y-[.3em]">
			<div
				class="flex items-center gap-x-[1.1em]"
				v-for="item in prosData"
				:key="nanoid()">
				<img :src="check" alt="" />
				<p class="text-grayishBlue text-[.8rem] font-manrope600">
					{{ item.text }}
				</p>
			</div>
			<button
				type="button"
				class="py-[.8em] px-[3.5em] mt-[2em] rounded-3xl bg-darkDesaturatedBlue text-paleBlue font-manrope600 text-[.8rem]">
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
	2: {
		text: '100% data ownership',
	},
	3: {
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

.input {
	&::-webkit-slider-runnable-track,
	&::-moz-range-track {
		height: 0.6em;
		border-radius: 1em;
		background: linear-gradient(
			to right,
			#a5f3eb var(--slider-fill),
			hsl(224, 65%, 95%) var(--slider-fill)
		);
	}

	&::-webkit-slider-thumb,
	&::-moz-range-thumb {
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

	&:active::-webkit-slider-thumb,
	&:active::-moz-range-thumb {
		cursor: grab;
	}
	&:hover::-webkit-slider-thumb,
	&:hover::-moz-range-thumb {
		background-color: rgb(106, 231, 218);
	}
}
</style>
