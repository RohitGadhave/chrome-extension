function generateQuery() {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const searchString = ['species and where is native place', 'species', 'where they found', 'max age of life', 'baby called', 'image'];
    let search = ' ' + searchString[randomInteger(0, searchString.length - 1)];
    const birds = ["Crow", "Kite", "Dove", "Sparrow", "Woodpecker", "Owl", "Eagle", "Hen", "Parrot", "Raven", "Stork", "Swan", "Quail", "Pelican", "Kingfisher", "Parakeet", "Ostrich", "Cockatiel", "Vulture", "Crane", "Penguin", "Hummingbird", "Weave - bird", "Hornbill", "Albatross", "Cuckoo", "Turkey", "Oilbird", "Emu", "Falcon", "Drongo", "Cockatoo", "Nightingale", "Sandpiper", "Goldfinch", "Robin", "Swallow", "Pheasant", "Toucan", "Canary", "Heron", "Potoo", "Bush warbler", "Cassowary", "Mallard", "Common swift", "Megapode", "Spoonbill", "Ospreys", "Rail", "Budgerigar", "Wren", "Loon", "Arctic tern", "Lovebird", "Rallidae", "Bee-eater", "Grebe", "Passerine", "Pelican", "Moa", "Nightjar", "Guinea fowl", "Dodo", "Greater coucal", "Turkey", "Gannet", "Avocet", "Catbird", "Bluebird", "Dunnock", "Northern cardinal", "Teal", "Gadwall", "Northern pintail", "Hoatzin", "Oriole", "Partridge", "Tailorbird", "Weaverbird", "Skylark", "Pigeon", "Goose", "Coot", "Peacock", "Finches", "Lark", "Duck", "Hawk", "Conure", "Macaw", "Wagtail", "Cygnet", "Thrush", "Myna", "Kiwi", "Roadrunner", "Blue jay", "Azure dollar"];
    const animals = ["Lion", "Fox", "Deer", "Moose", "Crocodile", "Camel", "Horse", "Cow", "Rabbit", "Peacock", "Hummingbird", "Zebra", "Armadillo", "Tiger", "Giraffe", "Turtle", "Elephant", "Snake", "Lizard", "Wolf", "Alligator", "Sheep", "Cheetah", "Rattlesnake", "Frog", "Raccoon", "Coyote", "Goat", "Panda", "Toad", "Pig", "Cobra", "Kangaroo", "Salamander", "Skunk", "Chicken", "Anaconda", "Koala", "Octopus", "Otter", "Duck", "Python", "Rhinoceros", "Polar bear", "Gorilla", "Hippopotamus", "Lobster", "Crab", "Jellyfish", "Seahorse", "Platypus", "Koala", "Hedgehog", "Mole", "Hawk", "Falcon", "Turkey", "Eagle", "Starfish", "Clam", "Garter snake", "Kingfisher", "Dolphin", "Whale", "Grizzly bear", "Chimpanzee", "Ant", "Spider", "Butterfly", "Bee", "Chimpanzee", "Gorilla", "Tasmanian Devil", "Dingo", "Penguin", "Sparrow", "Owl", "Parrot", "Whale", "Shark", "Dolphin", "Otter", "Pigeon", "Stingray", "Shark", "Penguin", "Swan", "Eel", "Scorpion", "Bat", "Ostrich", "Squirrel", "Orangutan", "Lemur", "Sloth", "Flamingo"];

    const allData = [...birds, ...animals];
    const ind = randomInteger(0, allData.length - 1);
    const name = allData[ind];

    return { name, ind }//+search;
}
let data = [];
const headers = ['name','age'];
console.time('data');
for(let i=0;i<10_000;i++){
    const { name, ind } = generateQuery();
    element = {}
    element.name = name;
    element.age = ind;
    data.push(element)
}
console.timeEnd('data');
let csv = [...headers].toString();
const title = headers.toString();
console.time('forof');

for (const d of data) {
    console.log(d);
    csv+=','+ [...d].toString();
}
console.timeEnd('forof');

console.time('forEach');

data.forEach((d) => {
    const { name, ind } = generateQuery();
    d = {}
    d.name = name;
    d.age = ind;
});
console.timeEnd('forEach');

// console.log(data);