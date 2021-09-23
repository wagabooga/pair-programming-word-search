const transpose = function(matrix) {
    // Put your solution here
    const width = matrix[0].length;
    //console.log(width);
    let result = [];
    for (let i = 0; i < width; i++) {
      result.push([]);
      for (let j = 0; j < matrix.length; j++) {
        result[i].push(matrix[j][i]);
      }
    }
    return result;
  };

const wordSearch = (letters, word) => { 
    //should return false if passed an empty array
    if (letters.length === 0 ){
        return false
    }
    // should return false if no word
    if (word === undefined){
        return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //should return true if word appears vertically
    const transposedArray = transpose(letters);
    const horizontalJoin2 = transposedArray.map(ls => ls.join(''))
    for (l of horizontalJoin2) {
        if (l.includes(word)) return true
    }

    return false

}

module.exports = wordSearch