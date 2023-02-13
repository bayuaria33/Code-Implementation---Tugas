/*Deteksi Palindrome
Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
tidak. Misalnya teks “Malam”, output = palindrom.
*/
function cekPalindrome(text) {
  if (text.length) {
    let tempString = "";
    let panjangString = text.length - 1;
    for (let index = 0; index <= text.length - 1; index++) {
      text[panjangString] == " "
        ? (tempString = tempString.concat(" "))
        : (tempString = tempString.concat(text[panjangString]));
      panjangString--;
    }
    tempString === text
      ? console.log(`${text} adalah palindrome`)
      : console.log(`${text} bukan palindrome, ${tempString} x ${text}`);
  } else {
    console.log("bukan string");
  }
}
//cekPalindrome(`Step on no pets`.toLowerCase());


/*Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript belajar
Saya” */
function reverseWords(sentence){
    if(sentence.length){
        let tempSentence = [];
        let arraySentence = sentence.split(" ");
        let jumlahKata = arraySentence.length - 1;
        for(let index = 0; index <= arraySentence.length - 1; index++){
            tempSentence.push(arraySentence[jumlahKata]);
            jumlahKata--;
        }
        console.log(tempSentence.join(" "))
    }else{
        console.log(`bukan kalimat`);
    }

}
//reverseWords(`Saya belajar javascript`)