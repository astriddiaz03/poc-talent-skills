// routes/assignmentRoutes.js
const express = require('express');
const router = express.Router();
const AssignamentController = require("../controllers/AssignamentController");
const AssignamentReportController = require("../controllers/AssignamentReportController");

router.post('/', AssignamentController.assignTasks);
router.get('/', AssignamentReportController.getReport);  

module.exports = router;
