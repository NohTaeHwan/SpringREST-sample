
function getUsers(){
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
                    content.push("</tr>");
                }

                $('#result').append(content);
            }

        },
        error: function(){
            alert("restController err");
        }
    });
}


/*

$('#read').on('click', function(){

});*/