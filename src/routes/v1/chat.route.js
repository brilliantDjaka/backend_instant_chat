const express = require('express');
const chatController = require('../../controllers/chat.controller');

const router = express.Router();

router.route('/').post(chatController.postChat);

router.route('/all').post(chatController.getChat);

module.exports = router;
