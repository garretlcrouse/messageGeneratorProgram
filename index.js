let messageOne = 'Gryffindor!'
let messageTwo = 'Ravenclaw!'
let messageThree = 'Hufflepuff!'
let messageFour = 'Slytherin!'

console.log('Welcome first year! Please call the fucntion, sorting(), in the commandline of the browser to be sorted into a house!')

function sorting() {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    console.log('Hmm which house shall I put you...')
    if (randomNum === 1) {
        console.log(`Yes I know, ${messageOne}`)
    }
    else if (randomNum === 2) {
        console.log(`Yes I know, ${messageTwo}`)
    }
    else if (randomNum === 3) {
        console.log(`Yes I know, ${messageThree}`)
    }
    else {
        console.log(`Yes I know, ${messageFour}`)
    }

}