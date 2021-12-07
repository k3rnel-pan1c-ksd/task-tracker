import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router';

const Header = ({title, showAdd, onToggleNew}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button onClick={onToggleNew} color={showAdd ? 'Red' : 'Green'} label={showAdd ? 'Close' : 'Add'} />)}
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;