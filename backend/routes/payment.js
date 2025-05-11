const express = require("express");
const router = express.Router();

router.get("/:appointmentId", (req, res) => {
  res.json({ message: `Processing payment for appointment ${req.params.appointmentId}` });
});

module.exports = router;
