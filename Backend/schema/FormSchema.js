const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    ngoName: {
      type: String,
      required: [true, "Please Enter Your Ngo Name"],
      maxLength: [30, "NGO Name cannot exceed 30 characters"],
      minLength: [5, "NGO Name should have more than 5 characters"],
    },
    description: {
      type: String,
      required: [true, "Please Enter Your Description"],
      minLength: [10, "Description should have more than 10 characters"],
    },
    YearOfCommencement: {
      type: String,
      required: [true, "Please Select Year Of Commencement"],
    },
    website: {
      type: String,
    },
    spocName: {
      type: String,
      required: [true, "Please Enter Your SPOC Name"],
      maxLength: [30, "SPOC cannot exceed 30 characters"],
      minLength: [5, "SPOC should have more than 5 characters"],
    },
    contactNumber: {
      type: Number,
      required: [true, "Please Enter Contact Number"],
      min: 1000000000,
      max: 9999999999,
      validate: {
        validator: function (value) {
          return /^\d{10}$/.test(value.toString());
        },
        message: "Contact number must be exactly 10 digits",
      },
    },

    beneficialOwner: {
      type: String,
      required: [true, "Please Enter Your beneficial Owner "],
      maxLength: [30, "beneficial Owner cannot exceed 30 characters"],
      minLength: [5, "beneficial Owner should have more than 5 characters"],
    },

    socialMedia: {
      type: String,
      maxLength: [30, "instagram cannot exceed 30 characters"],
      minLength: [5, "instagram should have more than 5 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("data", formSchema);
