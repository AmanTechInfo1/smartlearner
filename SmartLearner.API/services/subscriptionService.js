const Plans = require('../models/planUserModel');

class SubscriptionService {
  async createPlan(data) {
    const plan = new Plans(data);
    return await plan.save();
  }

  async getPlanById(planId) {
    return await Plans.findById(planId);
  }

  async updatePlan(planId, data) {
    return await Plans.findByIdAndUpdate(planId, data, { new: true });
  }

  async deletePlan(planId) {
    return await Plans.findByIdAndDelete(planId);
  }

  async getAllPlans() {
    return await Plans.find();
  }
}

module.exports = new SubscriptionService();
