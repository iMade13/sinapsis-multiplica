//DOM para dropdown, escoger ciudad

let dropdown = document.getElementById('city');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Elige una ciudad';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://mxdev.cl/desafio/city.json';

fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.warn('Al parecer hay un problema. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response  
            response.json().then(function(data) {
                let option;

                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].name;
                    option.value = data[i].abbreviation;
                    dropdown.add(option);
                }
            });
        }
    )
    .catch(function(err) {
        console.error('Fetch Error -', err);
    });