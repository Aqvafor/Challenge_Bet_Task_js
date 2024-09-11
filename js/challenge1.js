'use strict';
const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds,
};


//
//// Мое решение - My solution
//const [gk1,...fieldPlayers1] = players1;
//console.log(gk1,fieldPlayers1);
//
//const [gk2,...fieldPlayers2] = players2;
//console.log(gk2,fieldPlayers2);
//
//let allPlayers = [...players1, ...players2];
//const playersFinal1 = [...players1,'Thiago','Coutinho','Perisic']
//
//console.log(allPlayers, playersFinal1);
//
//
//
//const  game1 = game.odds.team1;
//const  draw = game.odds.x;
//const  game3 = game.odds.team2;
//
//console.log(game1,draw,game3);
//
//const printGoals = function(...players) {
//  console.log(players);
//  console.log(players.length);
//};
//
//printGoals(...game.scored);
//
const win1Team = game.odds.team1 < game.odds.team2;
const win2Team = game.odds.team1 > game.odds.team2;

win1Team ??= win2Team;
win2Team ??= win1Team;

if (win1Team) {
  console.log('Шанс 1 победить выше');
} else console.log('Шанс 2 победить выше');

// Его решение
// 1. // Чет не додумался тоже так разъеденить их 
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


// 5. Создали переменные которые хранились в объекте и измеинли название для ничью с x на draw
const {
  odds: {
    team1,
    x: draw,
    team2
  }
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(`${players} who scored`);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowskiy', 'Kimmich');
printGoals('Davies', 'Muller');

printGoals(...game.scored);


// 7. То есть мы можем team1 < team2 && То есть это все одно условие и если оно выполнится то пропишется с помощью короткого замыкания, а иначе не отобразится, так как будет ложное И поэтому мы пишем для двух исходов. Без использования if else
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


// Мое решегия 2 челенджа + его 
// 1 // Одинаковое решения не сичтая {},так как 1 строка, они не нужны
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);


// 2 Мое решение . Нахождения среднего арифметического шанса
//const oddsValues = Object.values(odds);
//console.log(oddsValues);
//let average = 0;
// for (const odd of oddsValues){
//  average += odd;
// }
//console.log(average/oddsValues.length);

// Его решение запись покороче . Хотя на строчку длинее, так как отдельно средне вычислил в итоге 
const oddsValues = Object.values(odds);
let average = 0;
for (const odd of oddsValues)
  average += odd;
average /= oddsValues.length
console.log(average);

// 3 Мое решение 
//const entries = Object.entries(odds);
//console.log(entries);
//// Не совсем правильное . Я хардкодил название команды в объекте odds
//for (const [team, odd] of entries){
// console.log(`Odd of ${team}: ${odd}`);
//};

//Его решенгие 
for (const [team, odd] of Object.entries(game.odds)) { // То есть записываем в перепменную team ключ, а в odd значение
  const teamStr = team === 'x' ? 'draw' : `vicrory ${game[team]}`; 
  console.log(`Odd of ${teamStr}: ${odd}`);
};
// Потом в переменной teamStr определяем если team - ключ равен x то выведится draw, иначе ключ содержащий team из объекта game[team] (так как у свойств odd и game  есть одинаковые наименование team1 и team 2(то есть тут подставится если team1 то в объект подставится team 1 тоже , так же и со второй командой)

// Bonus

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// То есть свойство создается при помощи [scorers] квадратных скобок, а значение записываем через равно = 1; И если у нас есть уже данное свойство, то его значение увеличится на единицу

//const scorersa = {};
//for (const player of game.scored) {
//  console.log(player);
//  console.log(scorersa[player]);
//  console.log(scorersa[player] ? scorersa[player]++ : (scorersa[player] = 1));
//  // scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//}
//
//
//console.log(scorersa);



// Coding challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
//const events = new Set(gameEvents);
//console.log(events);

//2 
//events.delete('🔶 Yellow card');
//console.log(events);

//3 


//4 
//if(time > 0 && time < 45 ) {
//  first-half;
//} else { second half}
