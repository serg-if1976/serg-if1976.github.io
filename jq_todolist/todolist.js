$(document).ready(function() {
    $("#add").click(function() {
        if ($("#task").val() == "") return;
        $("#tasks").append("<li>" + $("#task").val() + "</li>");
        $("#task").val("");
    });

    $("#tasks").on("click", "li", function() {
        $(this).toggleClass("done");
    });

});