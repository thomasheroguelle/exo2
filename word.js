function findLongestWord(str) {
  var longestWord = str.split(" ").reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  console.log("voici la phrase: " + str);
  console.log(
    "le mot le plus long de la phrase est : " +
      longestWord +
      " et il possède " +
      longestWord.length +
      " caractères"
  );
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
