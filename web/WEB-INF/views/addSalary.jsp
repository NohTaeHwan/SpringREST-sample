<%--
  Created by IntelliJ IDEA.
  User: taehwan
  Date: 2020-11-23
  Time: 16:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>연봉 정보 추가</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <meta name="_csrf" content="${_csrf.token}"/>
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1>연봉 정보 추가</h1>
        </div>

        <sf:form id="form" method="post" modelAttribute="user">

            <div class="form-group">
                <label for="name">이름 </label>
                <sf:input path="name" id="name" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="age">나이 </label>
                <sf:input path="age" id="age" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="salary">연봉 </label>
                <sf:input path="salary" id="salary" class="form-control"/>
            </div>

            <input type="button" id="create" value="추가" class="btn btn-success">
            <a href="<c:url value="/"/>" class="btn btn-dark">취소</a>

        </sf:form>


    </div>
    <script src="<c:url value="/resources/js/async.js"/>"></script>
</body>
</html>

<!-- action="${pageContext.request.contextPath}/api/users?${_csrf.parameterName}=${_csrf.token}" -->