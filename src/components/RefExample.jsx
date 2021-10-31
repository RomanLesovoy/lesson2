import React, { useRef } from 'react';

const RefExample = () => {
    const ref = useRef();

    setTimeout(() => {
        console.log(ref.current);
    }, 1000)
    

    return (
        <div>
            <span className="asd" ref={ref}>I am ref</span>
        </div>
    )
}

export default RefExample; 