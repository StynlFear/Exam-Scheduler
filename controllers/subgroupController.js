const Subgroup = require('../models/subgroup');

// Add a student to a subgroup
const addStudentToSubgroup = async (req, res) => {
    try {
        const { groupId, subgroupId } = req.params;
        const { student } = req.body; // Expecting the student object in the request body

        // Find the group and the specific subgroup
        const group = await Group.findOne({ group_id: groupId });
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        const subgroup = group.subgroups.id(subgroupId);
        if (!subgroup) {
            return res.status(404).json({ message: 'Subgroup not found' });
        }

        // Add the student to the subgroup's students array
        subgroup.students.push(student);
        await group.save();

        res.status(200).json(subgroup);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all students in a subgroup
const getStudentsInSubgroup = async (req, res) => {
    try {
        const { groupId, subgroupId } = req.params;

        const group = await Group.findOne({ group_id: groupId });
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        const subgroup = group.subgroups.id(subgroupId);
        if (!subgroup) {
            return res.status(404).json({ message: 'Subgroup not found' });
        }

        res.status(200).json(subgroup.students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addStudentToSubgroup, getStudentsInSubgroup };
