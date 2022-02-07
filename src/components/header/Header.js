import './Header.css';

const Header = ({ name }) => {

    return (
        <div className="header-container">
            { name }
        </div>
    );
};

export default Header;
