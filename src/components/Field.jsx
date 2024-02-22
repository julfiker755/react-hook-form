import React from 'react';

const Field = ({label,children,htmlFor,error}) => {
    const id=htmlFor || getChildId(children)
    return (
        <div className='flex flex-col my-2'>
            {label && <label  htmlFor={id} className='mb-1'>{label}</label>}
            {children}
            {!!error && <div className='text-[red]'>{error?.message}</div>}
            
        </div>
    );
}; 

const getChildId=(children)=>{
    const child=React.Children.only(children)
    if("id" in child?.props){
        return child.props.id
    }
}

export default Field;