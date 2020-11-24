
/**
 * Ajax delete one user : DELETE
 * 유저 한명 삭제
 *
 */
//동적으로 생성된 요소에 대해서는 on 을 사용하여 위임된 바인딩 이용
$('#result').on('click',"a.deleteBtn",function () {

    var id = $(this).attr("id");

    $.ajax({
        url: '/api/users/'+id,
        type: "DELETE",
        contentType: "application/json; charset=utf-8;",
        dataType : 'json',
        success:function () {
            alert("삭제 성공");
            location.href = "/";
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

    var formData = $('#addForm').serializeObject();


    $.ajax({
        url: '/api/users',
        type: "POST",
        data: JSON.stringify(formData) ,
        contentType: "application/json; charset=utf-8;",
        success:function () {
            alert("추가 성공");
            location.href = "/";
        },
        error: function (error,textStatus) {
            alert("추가 실패");
            console.log(error);
            console.log(textStatus);
        }
    });


});
/**
 * Ajax update user : PUT
 */
$('#update').on('click',function () {

    var formData = $('#updateForm').serializeObject();
    var id = formData["id"];

    $.ajax({
        url: '/api/users/'+id,
        type: "PUT",
        data: JSON.stringify(formData) ,
        contentType: "application/json; charset=utf-8;",
        success:function () {
            alert("수정 성공");
            location.href = "/";
        },
        error: function (error,textStatus) {
            alert("수정 실패");
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
        url: '/api/users',
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