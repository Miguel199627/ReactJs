import React,{ useState } from 'react';

export default function AddColorForm({ onNewColor = params => params}) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("");
    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }
    
    return(
        <form onSubmit={submit}>            
            <input {...titleProps} type="text" placeholder="Titulo del color" required/>
            <input {...colorProps} type="color" required/>
            <button>Add</button>
        </form>
    );
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange:event => setValue(event.target.value)},
        ()=> setValue(initialValue)
    ];
};