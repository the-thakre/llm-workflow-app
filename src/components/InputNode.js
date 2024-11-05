import React from 'react';

const InputNode = ({ data }) => {
    return (
        <div className="node input-node">
            <h3>Input</h3>
            <p>Write the input/question you want to ask.</p>
            <input type="text" placeholder="Enter your question" onChange={(e) => (data.value = e.target.value)} />
        </div>
    );
};

export default InputNode;
