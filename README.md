# boiler-plate

> [인프런-따라하며 배우는 노드, 리액트 시리즈 - 기본 강의](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8)<br>
> boiler plate는 변경없이 반복해서 재사용할 수 있는 저작품을 의미<br>
> 웹개발에 사용하는 library를 사용하고 개발환경을 구축해두는 것을 말한다.

## 순서

- **node js, express js**
  - 1. _node-v_ : node가 이미 존재하는지 확인
  - 2. 존재하지 않는다면 [node.js 홈페이지](https://nodejs.org/ko/) 이동 후 다운로드
  - 3. 프로젝트 폴더 생성 (ex. C:\Users\username\Documents\boiler-plate)
  - 4. _npm init_ : node 프로그램을 시작 명령어, package.json 파일 생성 -> 명령어 입력 후 모두 enter
  - 5. index.js 생성
  - 6. _npm install express --save_ : express js 다운로드 (--save : package.json 안의 dependencies에 저장)
  - 7. [hello world example](https://expressjs.com/en/starter/hello-world.html)의 내용을 index.js에 저장
  - 8. package.json에서 scripts에서 "start": "node index.js" custom script 등록
  - 9. _npm run start_ : index.js 실행
