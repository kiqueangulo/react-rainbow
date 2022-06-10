import React, { useState } from "react";

function ColorForm(props) {
    let [input, setInput] = useState('');

    const isColor = str => {
        let s = new Option().style;
        s.color = str;
        return s.color == str.toLowerCase();
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if (isColor(input)) props.addColor(input)
        else props.addColor('That\'s not a valid color')

        setInput('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Type a color to get it added and displayed!</label>
                <br />
                <input
                type='text'                
                value={input}
                onChange={e => setInput(e.target.value)}
                />
                <button 
                type="submit"
                >
                    Submit!
                </button>
            </form>
        </div>
    )
};

export default ColorForm;