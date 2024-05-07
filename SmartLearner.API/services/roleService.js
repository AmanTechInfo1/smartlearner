const Role = require("../models/roleModel");

class RoleService {
  async createRoleAsync(roleData) {
    try {
      const role = await Role.create(roleData);
      const totalCount = await Role.countDocuments();
      const resultObject = {
        message: "Added successfully",
        statusCode: 201,
        success: true,
        data: { role, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create role");
    }
  }

  async getRolesAsync(pageNumber, pagesize, query) {
    try {
      const skip = (pageNumber - 1) * (pagesize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }];
      }
      const totalCount = await Role.countDocuments(filter);
      const roles = await Role.find(filter).skip(skip).limit(pagesize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { roles, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch roles");
    }
  }

  async getRoleByIdAsync(roleId) {
    try {
      const role = await Role.findById(roleId);
      return role;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getRoleByNameAsync(roleName) {
    try {
      const role = await Role.findOne({ name: roleName });
      return role;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async updateRoleAsync(roleId, roleData) {
    try {
      const role = await Role.findByIdAndUpdate(roleId, { name: roleData.name }, {
        new: true,
      });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { role },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async deleteRoleAsync(roleId) {
    try {
      await Role.findByIdAndDelete(roleId);
    } catch (err) {
      throw new Error("Could not delete role");
    }
  }
}

module.exports = new RoleService();
