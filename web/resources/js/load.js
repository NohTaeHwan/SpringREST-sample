
/**
 * Ajax getUsers : GET
 * 페이지 로드 시 유저 정보 조회
 */
//page load 할 때 전부 read
$(document).ready(function () {
    $.ajax({
        url: '/api/users',
        type: "GET",
        contentType: "application/json; charset=utf-8;",
        dataType: "json",
        success: function(data){
            $('#result').empty();

            if(data != null){
                var content = [];

                for(var i=0; i<data.length; i++){
                    var id = JSON.stringify(data[i].id);

                    content.push("<tr>");
                    content.push("<td>" + JSON.stringify(data[i].name).replace(/\"/gi, "") +"</td>");
                    content.push("<td>" + JSON.stringify(data[i].age) +"</td>");
                    content.push("<td>" + JSON.stringify(data[i].salary) +"</td>");
                    content.push("<td>"
                        +"<a class='updateBtn' id='"+id+"' href='#'>"+"<i class=\"fas fa-edit\"></i>"+"</a>"
                        +"<a class='deleteBtn' id='"+id+"' href='#'>"+"<i class=\"fas fa-minus\"></i>"+"</a>"
                        +"</td>");
                    content.push("</tr>");

                }

                $('#result').append(content);
            }

        },
        error: function(error){
            alert("restController err");
            console.log(error);
        }
    });
});

$('#result').on('click',"a.updateBtn",function () {

    var id = $(this).attr("id");
    location.href = "/update/"+id;

});