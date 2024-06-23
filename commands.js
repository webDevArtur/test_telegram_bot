const { sendReactQuestion } = require('./game');

const handleStartCommand = async (bot, chatId, username) => {
    await bot.sendPhoto(chatId, './img.png');
    return bot.sendMessage(chatId, 'Привет, ' + username + '!');
};

const handleGameCommand = async (bot, chatId) => {
    await bot.sendMessage(chatId, 'Сейчас будет игра "Камень, ножницы, бумага". Выберите один из вариантов:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Камень', callback_data: 'Камень' }, { text: 'Ножницы', callback_data: 'Ножницы' }, { text: 'Бумага', callback_data: 'Бумага' }],
            ]
        }
    });
};

const handleReactCommand = async (bot, chatId, userScores) => {
    userScores[chatId] = 0;
    sendReactQuestion(bot, chatId, 0);
};

const handleUnknownCommand = async (bot, chatId, text) => {
    return bot.sendMessage(chatId, '- Ты написал: ' + text + '.' + '\n' + '- Я не знаю что тебе сказать на этот счёт.');
};

module.exports = {
    handleStartCommand,
    handleGameCommand,
    handleReactCommand,
    handleUnknownCommand
};
