const express = require("express");
const PORT = process.env.PORT || 3500;
const path = require("path");
const app = express();
app.use(path.dirname(__dirname, ""));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
