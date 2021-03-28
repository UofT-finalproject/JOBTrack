const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  searchId: String,
  title: { type: String, required: true },
  description: String,
  type: String,
  location: String,
  company: String,
  url: String,
  created_at: String,
  applied: { type: Boolean, default: false },
  date_applied: String,
  status: { type: String, enum: ['None', 'Applied', 'Interviewed', 'Approved', 'Declined', 'Archived']},
  notes: String,
  attachments: [String],
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User',
   required: true}
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;