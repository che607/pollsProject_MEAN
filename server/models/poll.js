const mongoose = require('mongoose');

const {Schema} = mongoose;

const pollSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question cannot be blank."],
    minlength: [8, "Question must be at least 8 characters"],
    trim: true,
  },
  option1: {
    type: String,
    required: [true, "Option 1 cannot be blank."],
    minlength: [3, "Option 1 must be at least 3 characters"],
    trim: true,
  },
  option2: {
    type: String,
    required: [true, "Option 2 cannot be blank."],
    minlength: [3, "Option 2 must be at least 3 characters"],
    trim: true,
  },
  option3: {
    type: String,
    required: [true, "Option 3 cannot be blank."],
    minlength: [3, "Option 3 must be at least 3 characters"],
    trim: true,
  },
  option4: {
    type: String,
    required: [true, "Option 4 cannot be blank."],
    minlength: [3, "Option 4 must be at least 3 characters"],
    trim: true,
  },
  count1: {
    type: Number,
    trim: true,
  },
  count2: {
    type: Number,
    trim: true,
  },
  count3: {
    type: Number,
    trim: true,
  },
  count4: {
    type: Number,
    trim: true,
  },
  user: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Poll', pollSchema);
