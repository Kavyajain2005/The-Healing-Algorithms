const express = require("express");
const router = express.Router();

router.get("/:appointmentId", (req, res) => {
  res.json({ transcript: `Transcript for appointment ${req.params.appointmentId}` });
});

module.exports = router;
