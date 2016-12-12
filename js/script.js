
function selectRoomType(roomType) {
	var roomInfo = map[roomType];
	var scale = roomInfo.scale;
	var smallScale = document.querySelector ('.small-scale');
	var largeScale = document.querySelector ('.large-scale');
	switch (scale) {
		case 'small': 
			smallScale.style.display = 'block'; 
			largeScale.style.display = 'none';
		break;
		case 'large': 
			smallScale.style.display = 'none'; 
			largeScale.style.display = 'block';
		break;
	}
}

function onSelectChange(event) {
	var select = event.srcElement;
	selectRoomType(select.value);
};
function onAreaChange(event) {
	var area = document.querySelector('.area');
	area.innerHTML = event.srcElement.value;
};
function onWindowLoad(){
	var select = document.querySelector('.select');
	for (var name in map) {
		var option = document.createElement ('option');	
		option.value = name;
		option.innerHTML = map [name].label;
		select.appendChild (option);
	}
	select.addEventListener('change', onSelectChange);
	
	selectRoomType(select.value);
	
	var input = document.querySelector('.area-input');
	input.addEventListener('change', onAreaChange);
	input.addEventListener('keyup', onAreaChange);
}
window.addEventListener("load", onWindowLoad);
console.log('immediately');