const Group = require('../models/group');

// Create a new group
const createGroup = async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all groups
const getGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a subgroup to a group
const addSubgroupToGroup = async (req, res) => {
    const { groupId, subgroup } = req.body; // Assuming subgroup is an object with subgroup details

    try {
        const group = await Group.findOne({ group_id: groupId });

        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        group.subgroups.push(subgroup);
        await group.save();
        res.status(200).json({ message: 'Subgroup added to group', group });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createGroup, getGroups, addSubgroupToGroup };
