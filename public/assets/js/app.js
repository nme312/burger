$(document).ready(function () {
    console.log("log");
    $(".add-burger-button").on("click", function (event) {
        event.preventDefault();
        var newBurger = $("#new-burger").val();
        // location.reload();
        console.log(newBurger);
    });
})