const express = require("express");
const fs = require("fs");
const app = express();

app.get("/photos", async (req, res) => {
  const buffer = fs.readFileSync("./bb.jpg");
  const uint8Array = new Uint8Array(buffer);

  const imageBuffer = Buffer.from(uint8Array);
  const base64Image = imageBuffer.toString("base64");

  const html = `
    <div>
      <img src="data:image/jpeg;base64,${base64Image}" alt="BB">
    </div>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
