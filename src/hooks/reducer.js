export const initialState = {
  currentWord: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
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
  }
};
