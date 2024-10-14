const subscriptionService = require("../services/subscriptionService");

class SubscriptionController {
  // Add a new subscription plan
  async createPlan(req, res) {
    try {
      const plan = await subscriptionService.createPlan(req.body);
      res.status(201).json(plan);
    } catch (err) {
      next(err);
    }
  }
  // Get all free trial plans
  async getPlanById(req, res) {
    try {
      const plan = await subscriptionService.getPlanById(req.params.id);
      res.status(200).json(plan);
    } catch (err) {
      next(err);
    }
  }

  async updatePlan(req, res) {
    try {
      const plan = await subscriptionService.updatePlan(req.params.id, req.body);
      res.status(200).json(plan);
    } catch (err) {
      next(err);
    }
  }


  async deletePlan(req, res) {
    try {
      const result=  await subscriptionService.deletePlan(req.params.id);
  res.json(result);
    } catch (err) { 
      next(err);
    }
  }
  
  async getAllPlan(req, res) {
    try {
      const plans = await subscriptionService.getAllPlans();
      res.status(200).json(plans);
    } catch (err) { 
      next(err);
    }
  }
// //////////////////////////////////////////////////////////////////////////
  
}

module.exports = new SubscriptionController();
