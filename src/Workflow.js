import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, useNodesState, useEdgesState } from 'react-flow-renderer';
import InputNode from './components/InputNode';
import LLMNode from './components/LLMNode';
import OutputNode from './components/OutputNode';
import Sidebar from './Sidebar';

const nodeTypes = {
    inputNode: InputNode,
    llmNode: LLMNode,
    outputNode: OutputNode,
};

const initialNodes = [
    { id: 'input', type: 'input', position: { x: 100, y: 100 }, data: { label: 'Input Node' } },
    { id: 'llm', type: 'llm', position: { x: 400, y: 100 }, data: { label: 'LLM Engine' } },
    { id: 'output', type: 'output', position: { x: 700, y: 100 }, data: { label: 'Output Node' } },
];

const initialEdges = [
    { id: 'e1-2', source: 'input', target: 'llm', type: 'smoothstep' },
    { id: 'e2-3', source: 'llm', target: 'output', type: 'smoothstep' },
];

const Workflow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [output, setOutput] = useState(null);

    const addNode = (type) => {
        const newNode = {
            id: `${type}-${nodes.length}`,
            type,
            position: { x: Math.random() * 300, y: Math.random() * 200 },
            data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
        };
        setNodes((nds) => [...nds, newNode]);
    };

    const onConnect = useCallback((params) => {
        const { source, target } = params;
        const sourceNode = nodes.find(node => node.id === source);
        const targetNode = nodes.find(node => node.id === target);
        if (sourceNode.type === 'inputNode' && targetNode.type === 'llmNode') {
            setEdges((eds) => addEdge(params, eds));
        } else if (sourceNode.type === 'llmNode' && targetNode.type === 'outputNode') {
            setEdges((eds) => addEdge(params, eds));
        } else {
            alert("Invalid connection! Input can connect to LLM, and LLM to Output only.");
        }
    }, [nodes]);

    const executeWorkflow = () => {
        // Simulate LLM API call
        const inputNode = nodes.find(node => node.type === 'inputNode');
        const llmNode = nodes.find(node => node.type === 'llmNode');
        if (!inputNode || !llmNode) {
            alert("Workflow is incomplete! Please add all required nodes.");
            return;
        }

        // Dummy Output - Replace with actual API call
        setOutput("Science is a systematic approach to understanding natural phenomena.");
    };

    return (
        <div className="workflow">
            <Sidebar addNode={addNode} />
            <div className="reactflow-wrapper">
                <button className="run-button" onClick={executeWorkflow}>Run</button>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
};

export default Workflow;
