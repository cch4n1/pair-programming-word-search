/**
* a word search solver, as a function that receives a 2D array of letters and a word. The function must:
* Check to find the word horizontally and vertically
* Return true if the word is found, and return false if the word is not found
*/
// Worked on pair programming with @aulakhhardeep @cch4n1

const wordSearch = (letters, word) => {
  //checks for empty array
  //checks if word is longer than column
  if (letters.length === 0 || word.length > letters.length) {
    return false;
  }
  //check if word is longer than row
  for (let letter of letters) {
    if (word.length > letter.length) {
      return false;
    }
  }

  //joins each column together and puts it in verticalJoin
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let columnLetters = '';
    for (const row of letters) {
      columnLetters += row[i];
    }
    verticalJoin.push(columnLetters);
  }
  // joins each row together and puts it in horizontalJoin
  const horizontalJoin = letters.map(ls => ls.join(''));

  // loops through entire rows and columns that have been joined together to find word
  const joinedRowCol = [...verticalJoin, ...horizontalJoin];
  for (let l of joinedRowCol) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;