import React from 'react';

const LLMNode = ({ data }) => {
    return (
        <div className="node llm-node">
            <div className="header">
                <span>⚙️ LLM ENGINE</span>
            </div>
            <label>Model Name</label>
            <select>
                <option value="gpt-3.5">gpt-3.5</option>
                <option value="gpt-4">gpt-4</option>
            </select>
            <label>API Base URL</label>
            <input type="text" defaultValue="https://openai.base.link" />
            <label>API Key</label>
            <input type="password" defaultValue="**************" />
            <label>Max Tokens</label>
            <input type="number" defaultValue="2000" />
            <label>Temperature</label>
            <input type="number" defaultValue="0.5" />
        </div>
    );
};

export default LLMNode;
