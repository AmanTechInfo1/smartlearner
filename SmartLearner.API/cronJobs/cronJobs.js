const cron = require("node-cron");
const AccountService = require("../services/accountService"); // Adjust the path if needed

// Schedule a job to run every day at midnight
const scheduleJobs = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      await AccountService.checkExpiredSubscriptions();
      console.log("Checked for expired subscriptions.");
    } catch (error) {
      console.error("Error checking expired subscriptions:", error);
    }
  });
};

module.exports = { scheduleJobs };
