const reactQuestions = [
    {
        question: 'Что такое React?',
        options: [
            { text: 'Библиотека для управления состоянием', correct: false },
            { text: 'Фреймворк для создания серверных приложений', correct: false },
            { text: 'Библиотека для создания пользовательских интерфейсов', correct: true }
        ]
    },
    {
        question: 'Как называется процесс преобразования JSX в JavaScript?',
        options: [
            { text: 'Transpiling', correct: true },
            { text: 'Compiling', correct: false },
            { text: 'Interpreting', correct: false }
        ]
    },
    {
        question: 'Что такое компонент в React?',
        options: [
            { text: 'Функция или класс, возвращающие элемент React', correct: true },
            { text: 'Стилизация элементов', correct: false },
            { text: 'Библиотека для работы с API', correct: false }
        ]
    },
    {
        question: 'Какой хук используется для работы с состоянием в функциональных компонентах?',
        options: [
            { text: 'useState', correct: true },
            { text: 'useEffect', correct: false },
            { text: 'useContext', correct: false }
        ]
    },
    {
        question: 'Какой метод жизненного цикла вызывается при первом рендере компонента?',
        options: [
            { text: 'componentDidMount', correct: true },
            { text: 'componentDidUpdate', correct: false },
            { text: 'componentWillUnmount', correct: false }
        ]
    },
    {
        question: 'Какой командой создается новый проект на React?',
        options: [
            { text: 'npx create-react-app my-app', correct: true },
            { text: 'npm init react-app my-app', correct: false },
            { text: 'react-create-app my-app', correct: false }
        ]
    },
    {
        question: 'Что такое JSX?',
        options: [
            { text: 'Расширение синтаксиса JavaScript', correct: true },
            { text: 'Специальный тип компонента', correct: false },
            { text: 'Метод жизненного цикла', correct: false }
        ]
    },
    {
        question: 'Какой метод используется для отправки props компоненту?',
        options: [
            { text: 'props.send()', correct: false },
            { text: 'props()', correct: false },
            { text: 'props', correct: true }
        ]
    },
    {
        question: 'Что делает метод render() в классовом компоненте?',
        options: [
            { text: 'Возвращает разметку компонента', correct: true },
            { text: 'Изменяет состояние компонента', correct: false },
            { text: 'Обновляет DOM', correct: false }
        ]
    },
    {
        question: 'Какой хук используется для выполнения побочных эффектов?',
        options: [
            { text: 'useEffect', correct: true },
            { text: 'useState', correct: false },
            { text: 'useReducer', correct: false }
        ]
    }
];

module.exports = {
    reactQuestions
};
