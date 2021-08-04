$(document).ready(function () {

    $("#btnopen").click(function () {

        $(".overlay,.popup").fadeIn();

        ProgressBarStart();

        APIcall();

    });

    function ProgressBarStart() {
        var currentDate = new Date();
        var second = currentDate.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }
        $(".progress-bar").css('width', second + '%');            
        setTimeout(function () {
            ProgressBarStart()
        }, 500);
    }

    function ProgressBarClose() {
        $("#Fade_area").removeAttr("style");
        $("myModal").removeAttr("style");

    }

    function APIcall() {
        $.ajax({
            url: "",
            type: 'post',
            ContentType: "application/json",
            success: function () {
                setTimeout(function () {
                    ProgressBarClose()
                }, 10000);
            },
            error: function () { 
                setTimeout(function () {
                    ProgressBarClose()
                }, 10000);
            }

        });

    }
});