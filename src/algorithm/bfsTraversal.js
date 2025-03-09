export function bfsTraversal(graph, startNode) {
    let animation = [];
    let visited = new Set();
    let queue = [startNode];

    while (queue.length > 0) {
        let node = queue.shift();
        
        if (!visited.has(node)) {
            visited.add(node);
            animation.push([node, true]);
            
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    animation.push([node, neighbor, true]);
                }
            }
        }
    }
    
    return animation;
}
