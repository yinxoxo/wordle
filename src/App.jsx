import { useReducer } from 'react';
import { reducer, initialState } from './reducer/reducer';
import Grid from './components/Grid';
import Keypad from './components/Keypad';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyPress = (letter) => {
    if (letter === 'ENTER') {
      // Do something
    } else if (letter === 'BACKSPACE') {
      dispatch({ type: 'REMOVE_LETTER' });
    } else {
      dispatch({ type: 'ADD_LETTER', letter });
    }
  };
  return (
    <>
      <Grid input={state.currentWord} />
      <Keypad onKeyPress={handleKeyPress} />
    </>
  );
}

export default App;
