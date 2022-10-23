import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                }
                className='save'>토글 모드</button>
        </div>
    )
}

export default Header;