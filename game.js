const { reactQuestions } = require('./questions');

const handleCallbackQuery = async (bot, callbackQuery, userScores) => {
    const chatId = callbackQuery.message.chat.id;
    const userChoice = callbackQuery.data;

    if (userChoice.startsWith('react_')) {
        const [prefix, questionIndex, answerIndex] = userChoice.split('_');
        const question = reactQuestions[questionIndex];
        const isCorrect = question.options[answerIndex].correct;

        if (isCorrect) {
            userScores[chatId]++; 
            await bot.sendMessage(chatId, 'Правильно!');
        } else {
            const correctAnswer = question.options.find(option => option.correct).text;
            await bot.sendMessage(chatId, `Неправильно! Правильный ответ: ${correctAnswer}`);
        }

        const nextQuestionIndex = parseInt(questionIndex, 10) + 1;
        if (nextQuestionIndex < reactQuestions.length) {
            sendReactQuestion(bot, chatId, nextQuestionIndex);
        } else {
            await bot.sendMessage(chatId, `Викторина завершена! Вы правильно ответили на ${userScores[chatId]} из ${reactQuestions.length} вопросов.`);
            delete userScores[chatId];
        }
    } else if (['Камень', 'Ножницы', 'Бумага'].includes(userChoice)) {
        const choices = ['Камень', 'Ножницы', 'Бумага'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let resultMessage;
        if (userChoice === computerChoice) {
            resultMessage = 'Ничья!';
        } else if (
            (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
            (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
            (userChoice === 'Бумага' && computerChoice === 'Камень')
        ) {
            resultMessage = 'Вы выиграли!';
        } else {
            resultMessage = 'Вы проиграли!';
        }

        await bot.sendMessage(chatId, `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${resultMessage}`);
    }
};

const sendReactQuestion = (bot, chatId, questionIndex) => {
    const question = reactQuestions[questionIndex];
    bot.sendMessage(chatId, question.question, {
        reply_markup: {
            inline_keyboard: question.options.map((option, index) => [{ text: option.text, callback_data: `react_${questionIndex}_${index}` }])
        }
    });
};

module.exports = {
    handleCallbackQuery,
    sendReactQuestion
};
