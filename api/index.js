const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "fortune_sticks_28.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data.sticks);
  } catch (error) {
    console.error("Error reading fortune_sticks_28.json:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
}
