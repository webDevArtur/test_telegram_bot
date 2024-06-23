const { sendReactQuestion } = require('./game');

function getUserName(from) {
    if (from.username) {
        return from.username;
    }
    if (from.first_name && from.last_name) {
        return `${from.first_name} ${from.last_name}`;
    }
    return from.first_name || from.last_name || 'пользователь';
}

const handleStartCommand = async (bot, chatId, from) => {
    const userName = getUserName(from);
    await bot.sendPhoto(chatId, './img.png');
    return bot.sendMessage(chatId, 'Привет, ' + userName + '!');
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
