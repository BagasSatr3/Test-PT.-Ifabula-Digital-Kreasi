const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const validateHeaders = (req, res, next) => {
  const userIdHeader = req.get("User-id");
  const scopeHeader = req.get("Scope");

  if (userIdHeader !== "ifabula" || scopeHeader !== "user") {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }

  next();
};

app.use(validateHeaders);

app.get("/user", (req, res) => {
  try {
    const userId = req.get("User-id");
    const scope = req.get("Scope");

    res.json({
      userId,
      scope,
      message: "GET request successful",
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/user", (req, res) => {
  try {
    const userId = req.get("User-id");
    const scope = req.get("Scope");

    const { username, email } = req.body;

    res.json({
      userId,
      scope,
      username,
      email,
      message: "POST request successful",
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
