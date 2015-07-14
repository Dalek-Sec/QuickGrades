$(document).ready(function(){
    $("#submit").click(function(){
        var schoolID = $("#schoolId").val();
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        $.ajax({
            type: "post",
            url: "https://app.sycamoreeducation.com/oauth/token",
            data: {
                schoolid: schoolID,
                username: userName,
                password: passWord,
                grant_type: "password" 
            }
        
        }).success(function(){
            console.log("IT WORKED JOHNNY!");
        }).fail(function(){
            alert("Sumtin' kapooped!\nCheck your internet and stuff.")
        });
    });
});
