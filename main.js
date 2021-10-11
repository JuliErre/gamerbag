const API = '../api.json';

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
                '<button class="btn-grad"> ' + "comprar" + '</button>' +
            '</div>'+
            '</div>'  

    });
    
    $(".productos").html(html);

}

getData(API);