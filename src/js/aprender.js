//Dom para dropdown

$(document).ready(function() {

    $.getJSON("../api/city.json", function(data) {

        var options = [];

        $.each(data, function(id, city) {
            options.push("<a value='" + city.name + "'>" + city.name + "</a>");
        });

        $(".dropdown-item").html(options.join(""));
    });

});