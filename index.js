// Import and initalize express
const express = require("express");
const app = express();
// port address
const PORT = 8080;

const getEveryThreeLetters = (string) => {
  const splitStr = string.split("");
  if (string.length <= 3) {
    return string;
  }
  // Filter results and return every third element
  const result = splitStr.filter((element, index) => index % 3 === 3 - 1);
  return result.join("");
};

// Use middleware to convert body into JSON
app.use(express.json());

// Listen on port 8080
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

// GET requests
app.get("/", (req, res) => {
  res.send("Lyft apprenticeship API");
});

// POST requests
app.post("/test", (req, res) => {
  const { string_to_cut } = req.body;
  let newString;
  if (!string_to_cut) {
    res.status(418).send({ message: "A string is required." });
  }
  newString = getEveryThreeLetters(string_to_cut);
  res.status(200).send({ return_string: `${newString}` });
});
