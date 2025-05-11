const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.json({ message: `Starting consultation session ${req.params.id}` });
});

module.exports = router;
