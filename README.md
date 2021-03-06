# boiler-plate

> [인프런-따라하며 배우는 노드, 리액트 시리즈 - 기본 강의](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8)<br>
> boiler plate는 변경없이 반복해서 재사용할 수 있는 저작품을 의미<br>
> 웹개발에 사용하는 library를 사용하고 개발환경을 구축해두는 것을 말한다.

## 백엔드 순서

- **Node.js, Express.js**

  - 1. _node-v_ : node가 이미 존재하는지 확인
  - 2. 존재하지 않는다면 [node.js 홈페이지](https://nodejs.org/ko/) 이동 후 다운로드
  - 3. 프로젝트 폴더 생성 (ex. C:\Users\username\Documents\boiler-plate)
  - 4. _npm init_ : node 프로그램을 시작 명령어, package.json 파일 생성 -> 명령어 입력 후 모두 enter
  - 5. index.js 생성
  - 6. _npm install express --save_ : express js 다운로드 (--save : package.json 안의 dependencies에 저장)
  - 7. [hello world example](https://expressjs.com/en/starter/hello-world.html)의 내용을 index.js에 저장
  - 8. package.json에서 scripts에서 "start": "node index.js" custom script 등록
  - 9. _npm run start_ : index.js 실행
  - 10. require() : node.js에서 module을 import하기 위해 사용

- **MongoDB**

  - 1. [mongodb 홈페이지](https://www.mongodb.com/)
  - 2. cluster 만들기 (free tier), mongodb user 생성(아이디와 비번 기억하기)
  - 3. _npm install mongoose --save_ : mongoose 다운로드(mongodb 편하게 쓸 수 있음)
  - 4. [mongoose 설명](https://www.npmjs.com/package/mongoose)에서 connect mongodb 참조

- **MongoDB Model, Schema**

  - 1. user.js 에 schema 생성 mongoose.Schema()
  - 2. mongoose.model()로 schema 등록
  - 3. module.exports() : require() 함수를 사용했을 때 반환 받는 함수

- **Git 설치**

  - 1. Git : distributed version control
  - 2. _git --version_ : git 설치 확인
  - 3. [Git 홈페이지](https://git-scm.com/)
  - 4. 작업하는 폴더에서 _git init_ : 새로운 git repository 생성 (버전 관리 시작)
  - 5. _git status_ : git 상태 파악
  - 6. _git add ._ : staging area에 등록
  - 7. _git commit -m "내용"_ : git local repository에 올리기
  - 8. .gitignore 생성 후 node_modules 추가

- **SSH를 이용해 Github 연결**

  - 1. Github : service for Git repositories
  - 2. [Github 홈페이지](https://github.com/)
  - 3. New repository 생성
  - 4. ssh 설정 : 안전하게 통신하기 위해
  - 5. ls ~/.ssh : ssh key 존재 확인
  - 6. [Git ssh 홈페이지](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) windows 기준
  - 7. 이후 생성한 repository에서 나머지 목록 끝까지 만들기

- **BodyParser, PostMan, 회원가입**

  - 1. body-parser : node.js 모듈, POST request data의 body로부터 파라미터 추출
  - 2. _npm install body-parser --save_ : body-parser 설치
  - 3. postman : request를 확인해야하는데 현재 client가 없어서 postman을 활용
  - 4. [postman 홈페이지](https://www.postman.com/)
  - 5. postman에서 request 후 success:true 확인

- **nodemon**

  - 1. 소스를 변경할 때 감지해서 자동으로 서버를 재시작해준다.
  - 2. _npm install nodemon --save-dev_ : 설치 (devDependencies에 저장)
  - 3. package.json에서 scripts에서 "backend": "nodemon index.js" custom script 등록
  - 4. _npm run backend_ : 실행

- **비밀정보 관리**

  - 1. config 폴더 생성 후 dev.js 생성 -> mongoURI 저장
  - 2. key.js 생성 후 process.env.NODE_ENV(환경변수)에 따라 deploy, local 설정
  - 3. .gitignore에서 보호해야할 정보가 있는 dev.js 추가
  - 4. github 서버에서 dev.js를 볼 수 없다.

- **Bcrypt로 비밀번호 암호화**

  - 1. 윈도우 cmd를 관리자 모드로 실행
  - 2. _npm install --global --production windows-build-tools_
  - 3. 멈추면 다시 실행 후 위 명령어를 다시 한번 실행시킨다. (All done! 이 나오면 완료)
  - 4. _npm install bcrypt --save_ : bcrypt 설치
  - 5. [bcrypt 홈페이지](https://www.npmjs.com/package/bcrypt) 참고하여 진행

- **로그인 기능(Bcrypt)**

  - 1. _npm install jsonwebtoken --save_ : token 생성을 위해 설치
  - 2. _npm install cookie-parser --save_ : token을 cookie에 저장해주기 위해 설치

- **Auth 기능**

  - 1. 로그인 유지가 되어있는지나 관리자인지 확인 가능
  - 2. cookie에 저장된 token 복호화
  - 3. user ID를 이용해 DB에서 찾은 후 token 확인으로 일치하면 true, 일치하지 않다면 false

- **로그아웃 기능**
  - 1. 로그아웃하려는 user를 DB에서 찾는다.
  - 2. token을 지워준다.

## 프론트엔드 순서

- **React JS**

  - 1. library이며 facebook에서 만들어짐.
  - 2. module과 비슷하게 components로 이루어져 재사용성이 뛰어남.
  - 3. virtual DOM : real DOM은 전체 리스트를 다시 reload하는 반면 바뀐 것만 DOM에서 바꿔준다.

- **create-react-app**

  - 1. Babel : 최신 JS 문법을 지원하지 않는 브라우저들을 위해서 변환시켜줌.
  - 2. Webpack : 많은 module들을 간단하게 만들어준다.
  - 3. client 라는 새로운 폴더 생성후 이동
  - 4. _npx create-react-app ._
  - 5. npm : node package manager
  - 6. npx 사용 이유
    - 1. 원래는 _npm install -g create-react-app_ 사용해서 global directory에 다운
    - 2. 이제는 npx를 사용한다.
    - 3. npx가 npm registry에서 create-react-app을 찾아서 다운 없이 실행시켜준다
    - 4. disk 메모리 낭비하지 않고 최신 버전 사용 가능의 장점

- **구조**

  - 1. public/index.html : 임시 page
  - 2. src/index.js : js entry point
  - 3. public 폴더에 있는 파일들은 오직 public/index.html만 사용
  - 4. src에 js,css 파일을 넣는다.
  - 5. webpack은 src에 있는 파일만 본다.

- **React Router Dom**

  - 1. 페이지 이동 시에 사용
  - 2. clients 폴더 이동 후 _npm install react-router-dom --save_ 실행
  - 3. [react-router-dom 사용법](https://reacttraining.com/react-router/web/example/basic) 참조

- **Axios**

  - 1. jQuery의 AJAX와 비슷한 개념
  - 2. React JS 부분에서 Request를 보낼 때 사용
  - 3. _npm install axios --save_

- **CORS 이슈, PROXY 설정**

  - 1. server, client의 port 번호가 달라서 발생.
  - 2. CORS : Cross-Origin Resource Sharing
  - 3. 여러 방법 중에 proxy 설정으로 해결하려고 함
  - 4. [Proxy 홈페이지](https://create-react-app.dev/docs/proxying-api-requests-in-development/)에서 Configuring the Proxy Manually 참조

- **Concurrently 이용해 백, 프론트 같이 실행**

  - 1. _npm install concurrently --save_
  - 2. pacage.json에 "dev": "concurrently \"npm run backend \" \"npm run start --prefix client\"" 추가

- **css framework**

  - 1. 여기서는 ant design 사용
  - 2. [홈페이지](https://ant.design/)
  - 3. _npm install antd --save_
  - 4. client의 index.js에 import "antd/dist/antd.css" 추가

- **Redux**

  - 1. State 관리
  - 2. flow : action, reducer, store, react component
  - 3. _npm install redux react-redux redux-promise redux-thunk --save_

- **React Hooks**
  - 1. Class Component, Functional Component 있었는데 functional이 더 짧고 빠르다.
  - 2. 하지만 life-cycle 같이 class component를 주로 사용했었다.
  - 3. 16.8 부터 hook이 update
  - 4. state -> userState(), componentDidMount() -> useEffect() 등 functional을 더 사용한다.
