import React, { useState } from 'react';

export default function ButtonHook() {
    
    const [buttonText, setButtonText] = useState('Жми с хуками');

    return (
        <button onClick={() => setButtonText('Нажал')}>{buttonText}</button>
    );
}