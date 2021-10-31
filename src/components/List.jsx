import React, { useState } from 'react';

const List = () => {
    const [text, setText] = useState('');
    const list = ['string 1', 'string 2', 'string 3'];

    const renderList = () => list.map((el, index) => (
        <li key={`${el}${index}`}>{ el }</li>
    ));

    const renderSomeText = () => (
        <div>
            <span>asdasd</span>
        </div>
    );

    return (
        <div className="list">
            <ul>
                { renderList() }
            </ul>
            { renderSomeText() }
        </div>
    );
}

export default List