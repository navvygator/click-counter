const clickBtn = document.getElementById('click-btn')
const clickReset = document.getElementById('click-reset')
const clickValue = document.getElementById('click-value')
const clickLeft = document.getElementById('click-left')
const clickStep = document.getElementById('click-step')
const clickStepValue = document.getElementById('click-step-value')
const clickMaxBtn = document.getElementById('click-max-btn')
const clickMaxValue = document.getElementById('click-max-value')

let clicks = 0
let step = 1
let maxValue = 20

clickLeft.innerHTML = maxValue
clickMaxValue.innerHTML = maxValue
clickStepValue.innerHTML = step

clickBtn.onclick = () => {
	clicks = clicks + step

	if (clicks > maxValue) {
		clickValue.disbled = true
		clickValue.innerHTML = 'Maximum number reached'
		return
	}
	clickLeft.innerHTML = maxValue - clicks
	clickValue.innerHTML = clicks
}

clickReset.onclick = () => {
	clicks = 0
	step = 1
	maxValue = 20

	clickLeft.innerHTML = maxValue - clicks
	clickValue.innerHTML = clicks
	clickStepValue.innerHTML = step
}

clickStep.onclick = () => {
	step = step + 1
	clickStepValue.innerHTML = step
}

clickMaxBtn.onclick = () => {
	maxValue = maxValue + 1
	clickMaxValue.innerHTML = maxValue

	if (clicks < maxValue) {
		clickLeft.innerHTML = maxValue - clicks
		clickValue.innerHTML = clicks
	}
}
