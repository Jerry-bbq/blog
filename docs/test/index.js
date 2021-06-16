class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected // {1}
    this.vertices = [] // {2}
    this.adjList = new Dictionary() // {3}
  }
}
