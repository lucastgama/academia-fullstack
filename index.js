const app = require("express")();
const consign = require("consign");

const port = 8080;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
