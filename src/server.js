const PORT = require("config").get("PORT");
const app = require("./app");

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
