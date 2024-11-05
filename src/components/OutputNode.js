import React from 'react';

const OutputNode = ({ data }) => {
    return (
        <div className="node output-node">
            <div className="header">
                <span>📤 OUTPUT</span>
            </div>
            <textarea readOnly placeholder="Generated output will appear here..." value={data.output || ""}></textarea>
        </div>
    );
};

export default OutputNode;
