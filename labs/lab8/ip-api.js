// ip-api.js
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8082;

// ฟังก์ชันดึง IP address จาก httpbin.org
async function fetchIPAddress() {
  try {
    const response = await axios.get("https://httpbin.org/ip");
    return response.data.origin;
  } catch (error) {
    // โยน error กลับไป ถ้าเรียก API ไม่สำเร็จ
    throw new Error("Network error description");
  }
}

// กำหนด endpoint /ip
app.get("/ip", async (req, res) => {
  try {
    const ip = await fetchIPAddress();
    res.json({ ip: ip, source: "httpbin.org" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch IP address",
      message: "Network error description",
    });
  }
});

// เริ่ม server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
