
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
			showSmallScale(array[parseFloat(select.value)], smallScale);
		break;

		case 'large': 
			smallScale.style.display = 'none';
			largeScale.style.display = 'block';
			showLargeScale(roomInfo.infoList[0], largeScale, true);
		break;
	}
}
function showLargeScale (object, template, flag) {
	var inputArea = template.querySelector('.input-area');
	if (flag) { 
		inputArea.value = object.minFootage;
	} 
	else if (parseFloat(inputArea.value) < parseFloat(inputArea.min)) {
		inputArea.value = inputArea.min;
	};
	var area = template.querySelector ('.area');
	area.innerHTML = inputArea.value;
	var unitPrice = template.querySelector('.unit-price');
	unitPrice.innerHTML = object.price;
	var totalPrice = template.querySelector('.total-price');
	totalPrice.innerHTML = inputArea.value * object.price;
}

function showSmallScale(object, template) {
	var area = template.querySelector('.area');
	area.innerHTML = object.footage;
	var minPrice = template.querySelector('.min-price');
	minPrice.innerHTML = object.minPrice;
	var maxPrice = template.querySelector('.max-price');
	maxPrice.innerHTML = object.maxPrice;
	var minTerm = template.querySelector('.min-term');
	minTerm.innerHTML = object.minTerm;
	var maxTerm = template.querySelector('.max-term');
	maxTerm.innerHTML = object.maxTerm;
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

function onSmallScaleAreaChange(event) {
	var select = event.srcElement;
	var roomTypeSelect = document.querySelector('.select');
	var array = map[roomTypeSelect.value].infoList;
	showSmallScale(array[select.value], document.querySelector('.small-scale'));
}
function onLargeScaleAreaChange(event) {
	var roomTypeSelect = document.querySelector('.select');
	var array = map[roomTypeSelect.value].infoList;
	var inputValue = event.srcElement.value; 
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		if (item.maxFootage == undefined) {
			break;
		}
		if (inputValue >= item.minFootage && inputValue <= item.maxFootage) {
			break;
		}
	}
	showLargeScale(item, document.querySelector ('.large-scale'), false);
}

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
	document.querySelector('.small-scale .input-area').addEventListener('change', onSmallScaleAreaChange);
	document.querySelector('.large-scale .input-area').addEventListener('change', onLargeScaleAreaChange);
	
	selectRoomType(select.value);
}
window.addEventListener("load", onWindowLoad);