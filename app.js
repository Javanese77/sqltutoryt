const express = require("express");
const app = express();
const port = 3000;
const siagaRouter = require("./route");

app.use(siagaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
