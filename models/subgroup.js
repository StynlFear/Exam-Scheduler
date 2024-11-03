const mongoose = require('mongoose');

const subgroupSchema = new mongoose.Schema({
    subgroup_id: { type: String, unique: true },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true }, // Reference to Group model
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], // Reference to Student model
}, { timestamps: true });

module.exports = mongoose.model('Subgroup', subgroupSchema);
