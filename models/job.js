const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  searchId: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: String,
  location: String,
  company: String,
  url: String,
  created_at: String,
  applied: { type: Boolean, default: false },
  date_applied: String,
  status: { type: String, enum: ['None', 'Applied', 'Interviewed', 'Approved', 'Declined', 'Archived']},
  notes: String,
  attachments: String,
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
