import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div>
            <input type="text" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
        </div>
    );
}

export default Message;

Message.propTypes = {
    message: PropTypes.string,
    setMessage: PropTypes.func.isRequired,
}
