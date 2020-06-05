# Spring RESTful Api Test

## List
1. [Overview](#overview)
2. [Project info](#project-info)
3. [Description](#description)



## Overview

spring을 이용한 RESTful Api 서버 샘플 코드입니다. user라는 모델 bean을 만들어 테스트했으며 db는 따로 연결하지 않고 객체로 처리했습니다(그래서 따로 DAO는 없습니다). json 데이터 처리로는 jackson databind 라이브러리를 이용하였습니다. 추가적으로 Not Found , duplicate 에러 핸들러를 커스텀으로 작성하였습니다.


## Project info


### version info
- JDK 1.8
- spring mvc 4.3.18
- lombok 1.18.8
- jackson-databind 2.9.8


### project structure
- project framework : spring mvc , maven
- Directory tree
```
helloRest
.
├── lib
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── spring
│   │   │           └── thnoh
│   │   │               ├── controller
│   │   │               │   ├── GlobalExceptionController.java
│   │   │               │   ├── HomeController.java
│   │   │               │   └── RestAPIController.java
│   │   │               ├── exception
│   │   │               │   ├── ErrorResponse.java
│   │   │               │   ├── UserDuplicatedException.java
│   │   │               │   └── UserNotFoundException.java
│   │   │               ├── model
│   │   │               │   └── User.java
│   │   │               └── service
│   │   │                   └── UserService.java
│   │   └── resources
│   └── test
│       └── java
└── web
    └── WEB-INF
        ├── servlets
        │   ├── dispatcher-servlet.xml
        │   └── service-servlet.xml
        ├── views
        │   └── home.jsp
        └── web.xml
```
   - target과 out 폴더는 제외시켰습니다.


## Description
### API 목록
- 유저 목록 : GET /api/users
- 유저 읽기 : GET /api/users/:userid
- 유저 생성 : POST /api/users
- 유저 수정 : PUT /api/users/:userid
- 유저 삭제 : DELETE /api/users/:userid
- 모든 유저 삭제 : DELETE /api/users

### user 모델
```
User {
    id : long;
    name : String;
    age : int;
    salary : double;
}

```
