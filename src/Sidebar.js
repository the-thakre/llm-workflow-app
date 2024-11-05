import React from 'react';

const Sidebar = ({ addNode }) => {
    return (
        <div className="sidebar">
            <h3>Components</h3>
            <p>Drag and Drop</p>
            <button onClick={() => addNode('inputNode')}>Input</button>
            <button onClick={() => addNode('llmNode')}>LLM Engine</button>
            <button onClick={() => addNode('outputNode')}>Output</button>
        </div>
    );
};

export default Sidebar;
