// https://leetcode.com/problems/find-if-path-exists-in-graph/

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let graph = createGraph(edges);
    let visited = new Set<number>();
    let queue = [];
    queue[0] = source;
    
    while(queue.length > 0) {
        let curr = queue.shift();
        visited.add(curr);
        
        if(curr === destination) {
            return true;
        }
        
        graph.get(curr).forEach((val, idx) => {
            if(!visited.has(val)) {
                queue.push(val);
            }
        });
    }
    return false;
};

function createGraph(edges) {
    let graph = new Map<number, Array<number>>();
    for(let i=0;i<edges.length;i++) {
        if(!graph.has(edges[i][0])) {
                graph.set(edges[i][0], new Array<number>());
           }
        
        if(!graph.has(edges[i][1])) {
                graph.set(edges[i][1], new Array<number>());
           }
        graph.get(edges[i][0]).push(edges[i][1]);
        graph.get(edges[i][1]).push(edges[i][0]);
    }
    return graph;
};




/**
 * Getting TLE
 * @param n 
 * @param edges 
 * @param source 
 * @param destination 
 * @returns 
 */
function validPathTLE(n: number, edges: number[][], source: number, destination: number): boolean {
    let graph = new Map<number, Array<number>>();
    for(let i=0;i<edges.length;i++) {
        if(!graph.has(edges[i][0])) {
                graph.set(edges[i][0], new Array<number>());
           }
        
        if(!graph.has(edges[i][1])) {
                graph.set(edges[i][1], new Array<number>());
           }
        graph.get(edges[i][0]).push(edges[i][1]);
        graph.get(edges[i][1]).push(edges[i][0]);
    }
    return getPath(edges, source, destination, new Set(), graph);
};

function getPath(edges, source, destination, visited, graph) {
    if(source === destination) {
        return true;
    }
    
    let attachedNodes = graph.get(source);
    visited.add(source);
    let res = false;
    
    for(let i=0; i<attachedNodes.length; i++) {
        if(!visited.has(attachedNodes[i])) {
            res = res || getPath(edges, attachedNodes[i], destination, visited, graph);
        }
    }
    
    visited.delete(source);
    return res;
};
