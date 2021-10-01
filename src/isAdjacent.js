/**
 * @copyright https://edabit.com/challenge/N7PGFudDcNh5aueS3
 * @param {[Array<number>]} matrix
 * @param {number} node1
 * @param {number} node2
 * @returns
 */
export default function isAdjacent(matrix, node1, node2) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      return matrix[node1][node2] === 1;
    }
  }
}
