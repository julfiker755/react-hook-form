import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 lg:max-w-7xl  m-auto'>
            {children}
        </div>
    );
};

export default Container;