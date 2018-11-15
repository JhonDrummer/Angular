let datos;
let url = 'https://jsonplaceholder.typicode.com/users';

//XHR
/*
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	console.log(xhr.readyState);

	if(xhr.readyState === 4){
		console.log(xhr.responseText);
		datos = JSON.parse(xhr.responseText);
	}
};

xhr.open('GET', url);

xhr.send();
*/

//jQuery
/*
$.get(url, function(data){
	console.log(data);
	datos = data;
});
*/

//Axios
/*axios.get(url)
.then((data)=>{
	console.log(data);
})
.catch(error => console.log(`Se ha producido un error ${error}`));
*/

//fetch
fetch(url)
  .then((prueba) => {
	  console.log(prueba);
	  return prueba.json();
  })
.then((json) => {
	console.log(json);
});
