
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const referencia = document.querySelector('#referencia');
const imgd1 = document.querySelector('.img-1-product');
const imgd2 = document.querySelector('.img-2-product');
const imgd3 = document.querySelector('.img-3-product');
const imgd4 = document.querySelector('.img-4-product');
const imgz  = document.querySelector('#img-z');





var index = 1;
function cargarInfo(){
    fetch('zapato.json')
    .then(response => response.json())
    .then(response => {response.forEach(response => {
        
        title.innerHTML =response.nombre;
        price.innerHTML =response.precio;
        referencia.innerHTML =response.referencia;
        $(imgd1).css("background-image","url(../img/"+ response.foto +")");
        $(imgd2).css("background-image","url(../img/"+ response.foto +")");
        $(imgd3).css("background-image","url(../img/"+ response.foto +")");
        $(imgd4).css("background-image","url(../img/"+ response.foto +")");
        imgz.setAttribute("src","img/"+response.foto);
     
        


        var card = document.querySelector('.n' + index);
        var nombre = $(card).find('h4');
        var precio = $(card).find('h2');
        var foto = $(card).find('.shoe');
       

        nombre[0].innerHTML = response.nombre;
        precio[0].innerHTML = response.precio;
        foto[0].setAttribute("src","img/"+response.foto);
        

      
       
        index++;
    });})

 
}

cargarInfo();