<%--
  Created by IntelliJ IDEA.
  User: taehwan
  Date: 2020-06-03
  Time: 17:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<head>
    <title>Ajax & Rest controller example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- font awesome ver.5 CDN-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
</head>
<body>
<div class="container">
    <div class="jumbotron">
        <h1>Salary Table</h1>
    </div>
    <table class="table table-dark table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>   </th>
        </tr>
        </thead>
        <tbody id="result">

        </tbody>
    </table>
    <a href="<c:url value="/add"/>" type="button" class="btn btn-success">추가</a>
    <button type="button" class="btn btn-danger" id="clear">초기화</button>


</div>

<script src="<c:url value="/resources/js/async.js"/>"></script>
</body>