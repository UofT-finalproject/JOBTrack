const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    }, 
    last_name: {
      type: String,
      required: true,
    },
    job: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
  },
);

const User = mongoose.model("user", userSchema);
module.exports = User;
