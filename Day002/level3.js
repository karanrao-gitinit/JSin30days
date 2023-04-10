// #1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const pattern = /love/gi;
console.log(sentence.match(pattern)); 

// #2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match(/because/g).length);

// #3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
/**
 *  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
 *  The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. 
 * ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. 
 * %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
 * %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt 
 * of &love& of tea&ching'
 */

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// To clear all the symbols
const clearedSentence = sentence3.replace(/[\%\$\#\@\&\;\!\?]/gi, '');

// Prints clean text
console.log(clearedSentence); 

// Splits words into seperate indexes
const frequentWord = clearedSentence.split(' ');

// Prints the array containing 
console.log(frequentWord);