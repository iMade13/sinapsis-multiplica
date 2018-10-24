const request = new Request('http://mxdev.cl/desafio');

fetch(request).then(function(response) {
    // Convert to JSON
    return response.json();
}).then(function(data) {
    // Yay, `j` is a JavaScript object
    console.log(JSON.stringify(data));
}).catch(function(error) {
    console.log('Request failed', error)
});