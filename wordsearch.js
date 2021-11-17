// should find word if written horizontally and vertically
const wordSearch = (letters, word) => {
  // if letters is a empty array, then return undefined
  if (letters.length === 0) return undefined;
  
  const horizontalLetters = letters.map(ls => ls.join(''));
  const verticalLetters = transpose(letters).map(ls => ls.join(''));

  return isWordPresentInArrayOfStrings(horizontalLetters, word) || isWordPresentInArrayOfStrings(verticalLetters, word) ? true : false;
};

// helper function - for finding words written vertically
const transpose = function(matrix) {
  const newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const newInnerArray = [];
    for (let j = 0; j < matrix.length; j++) {
      newInnerArray.push(matrix[j][i]);
    }
    newArray.push(newInnerArray);
  }
  return newArray;
};

// helper function - search array of strings for the given word and return true or false, accordingly
const isWordPresentInArrayOfStrings = function(array, word) {
  for (const string of array) {
    if (string.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;