const httpStatus = require('http-status');
const { Chat } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Post a Chat
 * @param {string} sender
 * @param {String} messages
 * @returns {Promise<User>}
 */
const postChat = async (sender, messages) => {
  try {
    const data = await Chat.create({ sender, messages });
    return {
      data,
    };
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Can't Post Message");
  }
};
const getChat = async (page, size) => {
  try {
    const chats = await Chat.paginate(
      {},
      {
        page,
        limit: size,
        sortBy: 'createdAt:desc',
      }
    );

    return chats;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Can't Get Chat");
  }
};

module.exports = {
  postChat,
  getChat,
};
