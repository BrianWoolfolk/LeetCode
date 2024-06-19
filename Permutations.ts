/**
 * Driver function that executes the `perm` function with initial parameters and a 'saveResult'
 * array to store any permutation.
 * 
 * @param nums Array of values to pass into the `perm` function
 * @returns The resulting list of arrays for each possible permutation
 */
function permute(nums: number[]): number[][] {
  const saveResult = [];
  perm(nums, 0, [], saveResult);

  return saveResult;
}

/**
 * Checks all possible permutations of any given `array`, it iterates through the indexes and
 * keeps track of the current position & depth within the recursive calls. It DOES NOT repeats
 * positions, meaning that the initial array must have unique values to properly work.
 * 
 * Finally, it saves the resulting permutations inside the `save` parameter by mutating it.
 * 
 * @param array Initial array from which identify all possible permutations
 * @param index Status number to keep track of the 'depth' of the recursive calls
 * @param stacked Initially an empty array in which will be sorted all the elements
 * @param save External array reference to append the final `stacked` array and thus save it
 * @returns Void, but instead it saves every final stack via mutating the `save` array
 */
function perm(array: number[], index: number, stacked: number[], save: number[][]) {
  if (array.length <= index) return save.push(stacked);

  for (let i = 0; i < array.length; i++) {
    const aux = array[i];
    if (!stacked.includes(aux)) perm(array, index + 1, [...stacked, aux], save);
  }
}
