const path = require("path");

const express = require("express");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const podyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(podyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/", shopRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`The app listening on port ${PORT}...`);
});
