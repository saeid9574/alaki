
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')

let amountHeight = document.querySelector('#height-val')
let amoutWeight = document.querySelector('#weight-val')
let resultElm = document.querySelector('#result')
let categoryElm = document.querySelector('#category')


function calculate() {
	let weightVal = weight.value
	let heightVal = height.value

	amountHeight.innerHTML = heightVal + 'cm'
	amoutWeight.innerHTML = weightVal + 'kg'
	
	let BMI = (weightVal / Math.pow((heightVal/100) , 2)).toFixed(1)
	resultElm.innerHTML = BMI

	if (BMI < 18.5) {
		category.innerHTML = 'کم وزنی'
		categoryElm.style.color = 'red'
		resultElm.style.color = 'red'
	}else if (BMI >= 18.5 && BMI <= 24.9){
		category.innerHTML = 'وزن  متناسب'
		categoryElm.style.color = 'green'
		resultElm.style.color = 'green'
	}else if (BMI >= 25 && BMI < 29.9) {
		category.innerHTML = 'اضافه وزنی'
		categoryElm.style.color = 'lighblue'
		resultElm.style.color = 'lighblue'
	}else {
		category.innerHTML = 'چاقی'
		categoryElm.style.color = 'blue'
		resultElm.style.color = 'blue'
	}
}