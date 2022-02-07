import './Keyboard.css';

const Keyboard = ({ keys }) => {

    return (
        <div className="keyboard-container">
            { keys }
        </div>
    );
};

export default Keyboard;
