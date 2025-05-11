const express = require("express");
const cors = require("cors");
const paymentRoutes = require("./routes/Payment");
const consultationRoutes = require("./routes/consultation");
const transcriptRoutes = require("./routes/transcript");

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/payment", paymentRoutes);
app.use("/api/consultation", consultationRoutes);
app.use("/api/transcript", transcriptRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
