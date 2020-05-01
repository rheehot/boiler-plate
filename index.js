const express = require("express"); // express 가져오기
const app = express();
const port = 5000; // port는 임의지정

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://han:1234@boilerplate-oo9v2.mongodb.net/test?retryWrites=true&w=majority",
    {
      // 오류 발생 방지
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Conncected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~하이")); // root directory에 오면 출력

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
