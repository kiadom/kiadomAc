import React, {useState} from 'react';

const Index = () => {
    const [variable1,setVariable1]=useState('soy un estado');
    return <div className='fondo'>
        <span>el valor de esto vale</span>
        <div>{variable1}</div>
    </div>;
};

export default Index
