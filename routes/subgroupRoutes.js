const express = require('express');
const router = express.Router();
const { addStudentToSubgroup, getStudentsInSubgroup } = require('../controllers/subgroupController');

// Add a student to a subgroup
router.post('/groups/:groupId/subgroups/:subgroupId/students', addStudentToSubgroup);

// Get all students in a subgroup
router.get('/groups/:groupId/subgroups/:subgroupId/students', getStudentsInSubgroup);

module.exports = router;
