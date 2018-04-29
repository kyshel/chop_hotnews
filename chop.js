

function nodeInsertedCallback(event) {
	id_that_will_chopped = 'content_right';
	obj_div=document.getElementById(id_that_will_chopped)
	if ( obj_div) {
		obj_div.innerHTML = "";
	}else{
		return
	}
	//console.log(event);
};



document.addEventListener('DOMNodeInserted', nodeInsertedCallback);

console.log('Chop_hotspot is working, the sidebar has been masked');


