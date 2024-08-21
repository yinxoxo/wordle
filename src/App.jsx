import { useCallback, useEffect, useReducer } from 'react';
import { reducer, initialState } from './reducer/gameReducer';
import { useQuery } from '@tanstack/react-query';
import { fetchWord } from './firebase/fetchWord';
import Grid from './components/Grid';
import Keypad from './components/Keypad';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = useQuery({ queryKey: ['words'], queryFn: fetchWord });

  const getRandomWord = useCallback(() => {
    if (data) {
      const randomWord = data[Math.floor(Math.random() * data.length)];
      console.log('useEffect', randomWord);
      dispatch({ type: 'SET_ANSWER', word: randomWord });
    }
  }, [data]);

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  const handleKeyPress = useCallback(
    (letter) => {
      if (letter === 'ENTER') {
        dispatch({ type: 'CHECK_ANSWER' });
      } else if (letter === 'BACKSPACE') {
        dispatch({ type: 'REMOVE_LETTER' });
      } else {
        dispatch({ type: 'ADD_LETTER', letter });
      }
    },
    [dispatch]
  );

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setTimeout(() => {
      getRandomWord();
    }, 0);
  };

  useEffect(() => {
    console.log('New answer after reset:', state.answer);
  }, [state.answer]);

  return (
    <div className="relative">
      <Grid input={state.currentWord} guesses={state.previousGuesses} />
      <Keypad onKeyPress={handleKeyPress} />
      {state.message && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2  w-1/4 px-4 py-2  rounded-lg  text-center bg-zinc-200 opacity-80 text-white mt-5 font-bold cursor-pointer"
          onClick={handleReset}
        >
          {state.message}
        </div>
      )}
    </div>
  );
}

export default App;
