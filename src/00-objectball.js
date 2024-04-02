const nba = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turqoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};

debugger;

function gameObject(playerName) {
  const homePoints = nba.home.players[`${playerName}`].points;

  const awayPoints = nba.away.players[`${playerName}`].points;

  return homePoints || awayPoints
  // if (homePoints >=0) {
  //   return homePoints;
  // } else return awayPoints;
}

gameObject("Mason Plumlee");

// const homePoints = console.log(nba.home.players[`${playerName}`].points);

// const awayPoints = console.log(nba.away.players[`${playerName}`].points);

// let homePlayerPoints = console.log(nba.home.players[`${playerName}`].points);

// let awayPlayerPoints = console.log(nba.away.players[`${playerName}`].points);

debugger;

// function gameObject(playerName) {
//   if (console.log(nba) === "home") {
//     let pointsScored = console.log(nba.home.players[`${playerName}`].points);
//     return pointsScored;
//   }
//   else {
//     let pointsScored = console.log(nba.away.players[`${playerName}`].points);
//     return pointsScored;
//   }
// }

// gameObject();

// debugger;

// function numPointsScored(playerName) {
//   let playerPoints = nba.home.players(playerName).points;

//   return playerPoints;
// }

// numPointsScored();

// debugger;

// const football = {
//   england: {
//     teamName: "Manchester United",
//     colors: ["Red", "White"],
//     players: {
//       "Bruno Fernandes": {
//         goals: 8,
//         assists: 13,
//       },
//       "Marcus Rashford": {
//         goals: 10,
//         assists: 5,
//       },
//     },
//   },
//   spain: {
//     teamName: "Real Madrid",
//     colors: ["Black", "White"],
//     players: {
//       Rodrygo: {
//         goals: 15,
//         assists: 8,
//       },
//       "Vinicius Jr": {
//         goals: 19,
//         assists: 11,
//       },
//     },
//   },
// };

// function goalsScored(playerName) {
//   let playerGoals = football.england.players[`${playerName}`].goals;
//   return playerGoals;
// }

// goalsScored("Marcus Rashford");
