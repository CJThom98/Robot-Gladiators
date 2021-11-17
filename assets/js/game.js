// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyNames) {

  while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? End "FIGHT" or "SKIP" to choose.');
    if (promptFight === "skip" || promptFight ==="SKIP"){
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");

        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        return;
      }
    }
    else if (promptFight === "fight" || promptFight === "FIGHT"){
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );

      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
        playerMoney = playerMoney + 20;
        return;

      }else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      playerHealth = playerHealth - enemyAttack;

      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );

      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        return;
      }else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }  
  }
};

var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choise."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
      
        window.alert("Refilling player's health by 20 for 7 dollars.");

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      return;

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      
      return;
    
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      return;
    default:
      window.alert("You did not pick a valid option. Try again.");

      shop();
      return;
  }
};

var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      var pickedEnemyName = enemyNames[i];
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
        if (storeConfirm) {
          shop();
        }
      }

      enemyHealth = 50;
      fight(pickedEnemyName);
    }

    else {
      window.alert('You have lost your robot in battle! Game Over!');
      return;
    }
  }
  endGame();
};

