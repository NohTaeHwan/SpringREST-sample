
//page load 할 때 전부 read
$('#result').ready(function () {
    $.ajax({
        url: 'api/users',
        type: "GET",
        data: {
            id : '1'
        },
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
                        +"<a href='"+JSON.stringify(data[i].id)+"'>"+"<i class=\"fas fa-edit\"></i>"+"</a>"
                        +"<a href='"+JSON.stringify(data[i].id)+"'>"+"<i class=\"fas fa-minus\"></i>"+"</a>"
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
}

/**
 * Ajax create user : POST
 * form -> json
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
    })


});


//추후에 delete all 기능
$('#clear').on("click",function () {
    $('#result').empty();
});


