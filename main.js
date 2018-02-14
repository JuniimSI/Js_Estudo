
var click_me = document.getElementById('click_me');
var input = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');
var body1 = document.getElementsByTagName('body');
var select = document.createElement('select');
var title = document.getElementById('h1');
title.style.color = '#fff000';
select.style.background = '#fff000';
body1[0].appendChild(select);
for(var i = 0; i < 10; i++){
	var option = document.createElement('option');
	option.id = '#id_'+i;
	option.value = i;
	option.innerHTML = i;

	select.appendChild(option);
}

click_me.addEventListener('click', fnClickMe);
btn_generate.addEventListener('click', generate);

function ff(){
	var t = prompt("kasd");
  	if(!isNaN(parseFloat(t)) && isFinite(t))
  		console.log("NUMERO");
  	else console.log("NÂO NUMERO");
}

ff();
function generate(){
	var value = input[0].value;
	
	for(var i = 0;i<parseInt(value); i++){
		var inpt = document.createElement('input');
		inpt.id="btn_"+i;

		var body = document.getElementsByTagName('body');
		body[0].appendChild(inpt);
	}
}


function fnClickMe(){
	alert('clicked_me');
}

function over(obj){
	obj.innerHTML = "Over mejs";
	obj.style.background = '#ffffff';
	//console.log('over me');
}

function out(obj){
	obj.style.background= '#fff000';
	obj.color = '#ccc';
}

function validateNumber(){
	var number = document.getElementById("number_val").value;
	if (isNaN(number) || (number >= 1 && number <= 10)){
		alert('input is not valid');
	}else{
		alert('input is valid');
	}
}


/*


var ft2 = [1, 2, 3,45, 6];

var ft = ['junior', 'soraia'];
var ft1 = ['Roberto'];

var result = ft.concat(ft1);
console.log(result);

ft.push('Pedro');
console.log(ft);
ft.pop();
console.log(ft);
ft.unshift('Pedro');
console.log(ft);
ft.pop();
console.log(ft);
console.log(ft[0]);
ft.shift();
console.log(ft);
ft.push('Kallyne');
ft.push('Gardenia');
console.log(ft);
console.log(ft.indexOf('junior'));
//ft.splice(0, 1);
//console.log(ft);

var prop1 = prompt('Model ?');
var prop2 = prompt('Name ?');
var prop3 = prompt('Color ?');

var obj = {};

obj.model = prop1;
obj.name  = prop2;
obj.color = prop3;
obj.start = function(){
	console.log('I am ready');
};
obj.start();

console.log(JSON.stringify(obj));
console.log(obj);

function myFunction(name){
	return 'Name => '+ name;
}

console.log(myFunction(prompt('Seu name')));


//console.log('external script');






var age = prompt('Qual sua idade?')

var ageParser = parseInt(age);

if(ageParser >= 18){
	console.log('Voc é demaior');
}else{
	console.log('não é demaior');
}


[1,2, 3, 4, 5].forEach(function(value, key){
	console.log(key,value);
});
var i = 0;
while(i<10){
	console.log(i);
	i++;
}

for(var a = 0;a < ageParser; a++){
	console.log(a);
}

*/
/*var number = 0;
var number1  = 1;
var bool = false;
var double = 0.0;

console.log(typeof number);

number = "0" + number1;
console.log(typeof number);
console.log(number);

var myFunction = function(){
	var number=0.1+number1;
	console.log(number);
}
myFunction();*/


