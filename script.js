
const nounArr = ['office', 'city', 'tower', 'skirt', 'pants', 'dinner', 'garden', 'bed', 'radio', 'region'];
const pluralNounArr = ['boxes', 'knives', 'mangoes', 'casinos', 'buttons', 'broaches', 'faxes', 'beliefs', 'teeth', 'cacti', 'books', 'birds', 'dresses', 'benches', 'toys', 'drinks', 'files', 'keys', 'doors', 'clubs'];
const verbPresentArr = ['deliver', 'count', 'brush', 'develop', 'irritate', 'knit', 'swim', 'dance', 'drive', 'disappear', 'polish', 'radiate', 'announce', 'shave', 'whistle', 'escape', 'scribble', 'sing', 'bless', 'jog'];
const adjectiveArr = ['abrasive', 'helpless', 'secret', 'spicy', 'tidy', 'soggy', 'thirsty', 'aware', 'jolly', 'truthful', 'nervous', 'heavenly', 'spiteful', 'puny', 'loving', 'brainy', 'robust', 'filthy', 'aromatic', 'imaginary', 'bright', 'silky', 'curly', 'glossy', 'bitter', 'lopsided', 'swift', 'flashy', 'itchy', 'ripe'];

const outOfTen = () => Math.floor(Math.random() * 10);
const outOfTwenty = () => Math.floor(Math.random() * 20);
const outOfThirty = () => Math.floor(Math.random() * 30);

function getMadLib() {
    let words = [];
    for (let i = 0; i < 8; i++) {
        //noun, plural noun, verb, verb, adj, adj, plural noun, adj
        if (i === 0) {
            words.push(nounArr[outOfTen()])
        } else if (i === 1 || i === 6) {
            words.push(pluralNounArr[outOfTwenty()])
        } else if (i === 2 || i === 3) {
            words.push(verbPresentArr[outOfTwenty()])
        } else if (i === 4 || i === 5 || i === 7) {
            words.push(adjectiveArr[outOfThirty()])
        }
    }
    console.log("Today, every student has a computer small enought to fit into their " + words[0] + ". They can solve any math problem by simply pushing the computer's little " + words[1] + ". Computers can add, multiply, divide and " + words[2] + ". They can also " + words[3] + " better than a human. Some computers are " + words[4] + ", others have a/an " + words[5] + " screen that shows all kinds of " + words[6] + " and " + words[7] + " figures.")
}

getMadLib()