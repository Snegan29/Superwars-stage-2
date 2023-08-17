const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength

const createPlayer = (name, type) => {
    return {
        name: name,
        strength: getRandomStrength(1, 100),
        image: `images/super-${PLAYERS.indexOf(name) + 1}.png`,
        type: type
    };
};
// console.log(createPlayer)

const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i=0;i<players.length;i++){
        let playerType = (i%2==0) ? "hero":"villain";      // i used odd even method here.
        let player = createPlayer(players[i], playerType)
        detailedPlayers.push(player)
        console.log(detailedPlayers)
    };
    return detailedPlayers
};
// getting random strength
const getRandomStrength = (min, max) => {
    // Return a random integer (0,100)
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (const player of players) {
        if (player.type === type) {
            fragment += `
                <div class="player">
                    <img src="${player.image}">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>`;
        };
    }
    return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};