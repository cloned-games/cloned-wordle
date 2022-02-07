import './App.css';
import Grid from './components/grid/Grid';
import Header from './components/header/Header';
import Keyboard from './components/keyboard/Keyboard';

function App() {

    return (
        <div className="game-container">
            <Header
                name="Cloned Wordle"
            />
            <Grid
                input="ELDER"
            />
            <Keyboard
                keys="QWERTY"
            />
        </div>
    );
};

export default App;
