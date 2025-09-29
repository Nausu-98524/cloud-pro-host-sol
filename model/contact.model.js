import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: String,
  },
  {
    timestamps: true,
  }
);
export const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
