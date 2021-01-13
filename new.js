var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li')
var body = document.querySelector('body');

button.addEventListener('click', Onclick);
input.addEventListener('keypress', addElement);

var x = true;
var y = true;
var keyC = 0;
input.addEventListener('keypress',function(o){
	if (o.key === 'Enter'){
		console.log(++keyC);
	}
})

var clicks = 0;
button.addEventListener('click', function(e){
	console.log(++clicks);
});


liEvent();
buttonListElement();
clickListClear();
delButton();


function checkInputlength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		var button = document.createElement('button');
		button.setAttribute("id","delbtn" )
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.appendChild(button);
		button.innerHTML = "Delete";
		input.value = "";

		liEvent();
		buttonListElement();
		clickListClear();
		delButton();
		
}

function clearAll(){
	var buttontwo = document.createElement('button');
	buttontwo.setAttribute("id","buttontwo");
	body.appendChild(buttontwo);
	buttontwo.innerHTML = "clear all";
}

function Onclick(){
	if(checkInputlength() > 0 && clicks === 0){
		clearAll();
		createListElement();
	} else if(checkInputlength() === 0) {
		console.log("");
	} else {
		createListElement();
	}
	
}

function addElement(){
	if(checkInputlength() > 0 && event.keyCode === 13){
		if (keyC === 0){
			clearAll();
			createListElement();
		} else {
			createListElement();
		}
}}

function liEvent(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
	}
}

function changeClass(){
	this.classList.toggle('done');
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

function clickListClear(){
	var button = document.getElementById('buttontwo');
	button.addEventListener('click',clearList);
}

function clearList(){
	ul.innerHTML = "";
}

function delButton(){
	var button = document.getElementById('buttontwo');
	button.addEventListener('click',delBut);
	
}

function delBut(){
	document.getElementById('buttontwo').remove();
	clicks = 0;
	keyC = 0;
	console.clear();
}

