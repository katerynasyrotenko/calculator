function onSelectChange(test) {
	var roomType = document.querySelector('.room-type');
	roomType.innerHTML=test.srcElement.value;
};
function onAreaChange(event) {
	var area = document.querySelector('.area');
	area.innerHTML = event.srcElement.value;
};
function onWindowLoad(){
	var select = document.querySelector('.select');
	var roomType = document.querySelector('.room-type');
	roomType.innerHTML = select.value;
	select.addEventListener('change', onSelectChange);
	var input = document.querySelector('.area-input');
	input.addEventListener('change', onAreaChange);
	input.addEventListener('keyup', onAreaChange);
}
window.addEventListener("load", onWindowLoad);
console.log('immediately');