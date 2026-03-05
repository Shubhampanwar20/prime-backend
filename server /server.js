require("dotenv").config();

const app = require("./src/app");

const PORT = 5055;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on port ${PORT}`);
});