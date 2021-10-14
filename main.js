const API = '../api.json';
let  carrito = {};

const getData = (apiUrl) => {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json),
            printData(json)
        })
        .catch(error => { console.error('Error ', error) })

}

const printData = (data) => {
    let html = '';
    data.forEach(c => {
        html += '<div class="col-xl-3 col-lg-6 col-md-12 col-xs-12 carta">' +
            '<div>'+
                '<img src="' + c.img + '" class="imgCart">' +
                '<span class="precio">$' + c.precio + '</span>' +
                '<p class="descripcion">' + c.title + '</p>' +
                '<button class="btn-grad" id="'+ c.id +'"> ' + "comprar" + '</button>' +
            '</div>'+
            '</div>'  

    });
    
    $(".productos").html(html);

}

$(".productos").click(e => {
    
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-grad'))
    if(e.target.classList.contains('btn-grad')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation();
})

const setCarrito = objeto => {
    console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-grad').id,
        title: objeto.querySelector('p').textContent,
        precio: objeto.querySelector('span').textContent

    }
    console.log(producto);


}

getData(API);
