require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Batman has been Gotham City's protector for decades, CEO of Wayne Enterprises, Patriarch of the Bat Family and veteran member of the Justice League. Batman is a superhero co-created by artist Bob Kane and writer Bill Finger. The character made his first appearance in Detective Comics #27 (May, 1939). Batman is the secret identity of Bruce Wayne. Witnessing the murder of his parents as a child leads him to train himself to physical and intellectual perfection and don a bat-themed costume in order to fight crime. Batman operates in the Batcave, beneath Wayne Manor assisted by his butler Alfred Pennyworth. The Dark Knight fights an assortment of villains influenced by the characters' roots in film and pulp magazines. Unlike most superheroes, he does not possess any superpowers; he makes use (to the best that he can) of intellect, detective skills, science and technology, wealth, physical prowess, and intimidation in his war on crime.

    Batman became a popular character soon after his introduction, and eventually gained his own title, "Batman". As the decades wore on, differing takes on the character emerged. The late 1960s Batman television series utilized a camp aesthetic associated with the character for years after the show ended. Various creators worked to return the character to his dark roots, culminating in Frank Miller's 1986 Dark Knight series. That and the success of director Tim Burton's 1989 Batman motion picture helped reignite popular interest in the character. A cultural icon, Batman has been licensed and adapted into a variety of media, from radio to television and film, and appears on a variety of merchandise sold all over the world. The Batman goes by numerous nicknames, such as The Dark Knight, The Caped Crusader, World's Greatest Detective and the Defender of Gotham.</h1>
    `);
});
app.get('/port', (req, res) => {
  res.send(`<div>port is ${process.env.PORT}</div>`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

function heroku() {
  //eslint-disable-line
  console.log('arguments:', process.argv.slice(2));
  console.log(`Heroku is ${process.argv[2]}`);
}
function herokuEnv() {
  console.log(`your name is ${process.env.USERNAME}`);
  console.log(`your shell is ${process.env.SHELL}`);
  console.log(`in my env, yabba is ${process.env.YABBA}`);
  console.log(`my secret comes from ${process.env.SECRET}`);
}
herokuEnv();
