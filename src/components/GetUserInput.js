import { useState } from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    console.log("inside userInput Hook!")
    
    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: event => {
                event.preventDefault();
                setValue(event.target.value);
            }
        },
        update: (updateValue) => setValue(updateValue)
    };
};