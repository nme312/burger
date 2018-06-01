$(document).ready(function () {
    console.log("log");
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

    $(".devour-button").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("burger-id");
        console.log(id);
        $.ajax({
            url: "/update/" + id,
            method: "PUT",
        }).then(response => {
            location.reload()
            console.log(id);
        });
    });
});
