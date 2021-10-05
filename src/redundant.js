/**
 * @copyright https://edabit.com/challenge/hzxN9bAebBPNqdQto
 * @param {string} greeting
 * @returns {Function}
 */
export default function redundant(greeting) {
  const decorator = () => greeting;
  return decorator;
}
