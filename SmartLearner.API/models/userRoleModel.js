const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }
});

module.exports = mongoose.model('UserRole', userRoleSchema);
