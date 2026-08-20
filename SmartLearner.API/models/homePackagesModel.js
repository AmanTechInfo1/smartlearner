const mongoose = require("mongoose");

const homePackagesSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true
    },

    subHeading: {
      type: String,
      default: "Our packages"
    },

    heading: {
      type: String,
      default: "Pick the way that suits you."
    },

    description: {
      type: String,
      default:
        "Whether you want to take your time, hit it hard in a week, or hop into an automatic — there's a package for it."
    },

    buttonText: {
      type: String,
      default: "See all packages →"
    },

    buttonLink: {
      type: String,
      default: "/courses"
    }
  },
  {
    timestamps: true
  }
);



const HomePackages = mongoose.model("HomePackages", homePackagesSchema);

module.exports = HomePackages;