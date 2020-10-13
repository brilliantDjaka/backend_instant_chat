const catchAsync = require('../utils/catchAsync');
const { chatService } = require('../services');

const postChat = catchAsync(async (req, res) => {
  const { sender, messages } = req.body;
  const response = await chatService.postChat(sender, messages);
  res.send(response);
});

const getChat = catchAsync(async (req, res) => {
  const { page, size } = req.body;
  const response = await chatService.getChat(page, size);
  res.send(response);
});

module.exports = {
  postChat,
  getChat,
};
