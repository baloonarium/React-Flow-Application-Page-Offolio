import ReactFlow, { Controls, Background, addEdge, applyEdgeChanges, applyNodeChanges, } from 'reactflow';
import 'reactflow/dist/style.css';

function Flow() {

    const nodes = [
        {
            id: 'A',
            type: 'group',
            label: 'Production line',
            position: { x: 0, y: 0 },
            style: {
              width: 1000,
              height: 500,
            },
          },
          {
            id: 'A-A',
            type: 'group',
            data: { label: 'Child Node 1' },
            position: { x: '5', y: '5' },
            parentNode: 'A',
            extent: 'parent',
            style: {
                width: 400,
                height:80,
              }
            
          },
          {
            id: 'A-B',
            type: 'group',
            data: { label: 'Child Node 2' },
            position: { x: '5', y: '15' },
            parentNode: 'A',
            extent: 'parent',
            style: {
                width: 400,
                height:80,
              }
          },
          {
            id: 'A-C',
            type: 'group',
            data: { label: 'Child Node 3' },
            position: { x: '5', y: '25' },
            parentNode: 'A',
            extent: 'parent',
            style: {
                width: 400,
                height:80,
              }
          },
      ];
      const edges = [{ id: '1-2', source: '1', target: '2' }];

  return (
    <div className='divFlow' >
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
