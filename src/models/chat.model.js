const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const chatSchema = mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
      trim: true,
    },
    messages: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
chatSchema.plugin(toJSON);
chatSchema.plugin(paginate);

/**
 * @typedef Chat
 */
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
