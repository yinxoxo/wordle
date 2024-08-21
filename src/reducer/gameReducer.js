export const initialState = {
  currentWord: '',
  previousGuesses: [],
  answer: '',
  message: '',
};

const validateWord = (guess, answer) => {
  const result = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      result.push('correct');
    } else if (answer.includes(guess[i])) {
      result.push('misplaced');
    } else {
      result.push('incorrect');
    }
  }
  console.log('Validation result:', result);
  return result;
};

export const reducer = (state, action) => {
  if (action.type === 'RESET') {
    return { ...initialState, answer: state.answer };
  }
  if (state.message === 'You win!' || state.message === 'You lose!') {
    return state;
  }
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answer: action.word,
      };
    case 'ADD_LETTER':
      if (state.currentWord.length < 5) {
        return {
          ...state,
          currentWord: state.currentWord + action.letter,
        };
      }
      return state;

    case 'REMOVE_LETTER':
      return {
        ...state,
        currentWord: state.currentWord.slice(0, -1),
      };

    case 'CHECK_ANSWER':
      if (state.currentWord.length === 5) {
        const result = validateWord(state.currentWord, state.answer);
        const isCorrect = state.answer === state.currentWord;
        console.log('Validation result in reducer:', result);

        let message = '';

        if (isCorrect) {
          message = 'You win!';
        } else if (state.previousGuesses.length === 5) {
          message = 'You lose!';
        }

        return {
          ...state,
          previousGuesses: [
            ...state.previousGuesses,
            { word: state.currentWord, result },
          ],
          currentWord: '',
          message,
        };
      }
      return state;

    default:
      return state;
  }
};
