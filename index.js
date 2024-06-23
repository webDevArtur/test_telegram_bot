const TelegramApi = require('node-telegram-bot-api');
const { handleStartCommand, handleGameCommand, handleReactCommand, handleUnknownCommand } = require('./commands');
const { handleCallbackQuery } = require('./game');

const token = '7432200895:AAE5lk_EZBO17YRvx5da0W88WPtvpsa8PZI';
const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
    { command: '/start', description: 'Начать диалог' },
    { command: '/game', description: 'Игра камень, ножницы, бумага' },
    { command: '/react', description: 'Реактивим на реакт' }
]);

const userScores = {};

bot.on('message', async msg => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await handleStartCommand(bot, chatId, msg.from);
    } else if (text === '/game') {
        await handleGameCommand(bot, chatId);
    } else if (text === '/react') {
        await handleReactCommand(bot, chatId, userScores);
    } else {
        await handleUnknownCommand(bot, chatId, text);
    }
});

bot.on('callback_query', async callbackQuery => {
    await handleCallbackQuery(bot, callbackQuery, userScores);
});
