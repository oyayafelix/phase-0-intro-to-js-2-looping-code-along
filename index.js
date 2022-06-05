// Code your solutions in this file

/*
function writeCards(name, occasion) {
    let message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`)
    }
    return message;
}

function countDown(num) {
    for (let i = 0; i <= num; i++) {
        console.log(num - i)
    }
}
*/

function writeCards(names, text) {
  const newArr = [];
  for (let name of names) {
    newArr.push(`Thank you, ${name}, for the wonderful ${text} gift!`);
  }
  return newArr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}