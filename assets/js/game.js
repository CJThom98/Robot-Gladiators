var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of the playerAttack from the value of the enemyHealth, and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console to confirm that it worked
    console.log(
        playerHealth + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Substract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console to confirm that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();