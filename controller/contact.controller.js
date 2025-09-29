import contactModel, { Contact } from "../model/contact.model.js";

export const contactController = async (req, res) => {
  try {
    const { fullName, email, mobile, subject, message } = req.body;
    if (!fullName) {
      return res
        .status(400)
        .json({ success: false, message: "fullName is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    }
    if (!mobile) {
      return res
        .status(400)
        .json({ success: false, message: "mobile is required" });
    }
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "subject is required" });
    }

    const contact = new Contact({ fullName, email, mobile, subject, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message:
        "Thank you for reaching out. Your inquiry has been received and our team will get in touch with you shortly.",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Interval Server error",
        error: error.message,
      });
  }
};
