$(document).ready(function () {
    console.log("log");

    $("#devour-button").on("click", function (event) {
        event.preventDefault();
        
    })

    $(".add-burger-button").on("click", function (event) {
        event.preventDefault();
        var data = { burger_name: $("#new-burger").val() };
        console.log(data);
        $.ajax({
            url: "/insert",
            method: "POST",
            data: data
        }).then(response => location.reload());
    });
});
