import { useReducer } from 'react';
import { reducer, initialState } from './reducer/gameReducer';
import Grid from './components/Grid';
import Keypad from './components/Keypad';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyPress = (letter) => {
    if (letter === 'ENTER') {
      dispatch({ type: 'CHECK_ANSWER' });
    } else if (letter === 'BACKSPACE') {
      dispatch({ type: 'REMOVE_LETTER' });
    } else {
      dispatch({ type: 'ADD_LETTER', letter });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="relative">
      <Grid input={state.currentWord} guesses={state.previousGuesses} />
      <Keypad onKeyPress={handleKeyPress} />
      {state.message && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2  w-1/4 px-4 py-2  rounded-lg  text-center bg-cyan-600 text-white mt-5 font-bold cursor-pointer"
          onClick={handleReset}
        >
          {state.message}
        </div>
      )}
    </div>
  );
}

export default App;
