
/**
 * Ajax getUsers : GET
 * 페이지 로드 시 유저 정보 조회
 */
//page load 할 때 전부 read
$('#result').ready(function () {
    $.ajax({
        url: 'api/users',
        type: "GET",
        contentType: "application/json; charset=utf-8;",
        dataType: "json",
        success: function(data){
            $('#result').empty();

            if(data != null){
                var content = [];

                for(var i=0; i<data.length; i++){
                    content.push("<tr>");
                    content.push("<td>" + JSON.stringify(data[i].name).replace(/\"/gi, "") +"</td>");
                    content.push("<td>" + JSON.stringify(data[i].age) +"</td>");
                    content.push("<td>" + JSON.stringify(data[i].salary) +"</td>");
                    content.push("<td>"
                        +"<a class='updateBtn' id='"+JSON.stringify(data[i].id)+"' href='#'>"+"<i class=\"fas fa-edit\"></i>"+"</a>"
                        +"<a class='deleteBtn' id='"+JSON.stringify(data[i].id)+"' href='#'>"+"<i class=\"fas fa-minus\"></i>"+"</a>"
                        +"</td>");
                    content.push("</tr>");

                }

                $('#result').append(content);
            }

        },
        error: function(){
            alert("restController err");
        }
    });
});

/**
 * Ajax delete one user : DELETE
 * 유저 한명 삭제
 *
 */
//동적으로 생성된 요소에 대해서는 on 을 사용하여 위임된 바인딩 이용
$('#result').on('click',"a.deleteBtn",function () {

    var id = $(this).attr("id");

    $.ajax({
        url: 'api/users/'+id,
        type: "DELETE",
        contentType: "application/json; charset=utf-8;",
        dataType : 'json',
        success:function () {
            alert("삭제 성공");
            location.href = "/helloRest";
        },
        error: function (error,textStatus) {
            alert("초기화 실패");
            console.log(error);
            console.log(textStatus);
        }
    });

});

/**
 * Ajax create user : POST
 * 유저 생성
 * redirect to /helloRest
 */
$('#create').on('click',function () {

    var formData = $('#form').serializeObject();


    $.ajax({
        url: 'api/users',
        type: "POST",
        data: JSON.stringify(formData) ,
        contentType: "application/json; charset=utf-8;",
        success:function () {
            alert("추가 성공");
            location.href = "/helloRest";
        },
        error: function (error,textStatus) {
            alert("추가 실패");
            console.log(error);
            console.log(textStatus);
        }
    });


});

/**
 * Ajax delete All user : DELETE
 */
$('#clear').on("click",function () {

    $.ajax({
        url: 'api/users',
        type: "DELETE",
        contentType: "application/json; charset=utf-8;",
        dataType : 'json',
        success:function () {
            alert("초기화 성공");
            $('#result').empty();
        },
        error: function (error,textStatus) {
            alert("초기화 실패");
            console.log(error);
            console.log(textStatus);
        }
    });
});


/**
 * data -> json parse 함수
 *
 * @returns json parsed data
 */
jQuery.fn.serializeObject = function() {
    var obj = null;
    try {
        if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {
            var arr = this.serializeArray();
            if(arr){ obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value; });
            }
        }
    }catch(e) {
        alert(e.message);
    }finally {}
    return obj;
};