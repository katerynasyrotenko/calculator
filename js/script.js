
function selectRoomType(roomType) {
	var roomInfo = map[roomType];
	var scale = roomInfo.scale;
	var smallScale = document.querySelector ('.small-scale');
	var largeScale = document.querySelector ('.large-scale');
	switch (scale) {
		case 'small': 
			smallScale.style.display = 'block'; 
			largeScale.style.display = 'none';
			var select = smallScale.querySelector ('.input-area');
			removeChildren (select);

			for (var index = 0, array = roomInfo.infoList; index < array.length; index++) {
				var item = array[index];
				var option = document.createElement ('option');
				option.innerHTML = item.footage;
				option.value = index;
				select.appendChild (option);
			};
		break;
		
		case 'large': 
			smallScale.style.display = 'none';
			largeScale.style.display = 'block';
		break;
	}
}
function removeChildren(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild)
	}
};

function onSelectChange(event) {
	var select = event.srcElement;
	selectRoomType(select.value);
};
function onWindowLoad(){
	var select = document.querySelector('.select');
	for (var name in map) {
		var option = document.createElement ('option');	
		option.value = name;
		var room = map[name];
		option.innerHTML = room.label;
		select.appendChild (option);
	}
	select.addEventListener('change', onSelectChange);
	
	selectRoomType(select.value);
}
window.addEventListener("load", onWindowLoad);
console.log('immediately');