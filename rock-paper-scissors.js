/* problem solving for Rock Paper Scissors game.
- Rules:
 rock beats scissors, paper beats rock, scissors beat paper.
- Planning the game:
 tree options will be displayed, Rock, Paper and Scissors.
 the "machine" will chose one too, randomly.
 after player choses, the chosen items by player and machine
will be compared.
 Following the rules, the winner will get a point.
 If both player and machine selection is the same, a tie is
 declared and no points are given.
 The first on getting 5 points will be declared as the
winner.
 The game should be able to be restarted to play again. */

/* pseudocode
 while <playerScore> is less tan 5 or <computerScore> is
less than 5:

 for var <playerPlay>, prompt "rock, paper or scissors".
 for var <computerPlay>, <rand()> function to chose.
 <rand()> generates a number between 0 and 2 and a
 switch-case will be used to return rock, paper or scissors.
 <judge()> function will be executed.
 <judge()> compares <playerPlay> with <computerPlay>, give
one point to the winner and showing a message:
• if <playerPlay> is equal to <computerPlay>, "It's a tie"
no points given.
• if <playerPlay> is rock and <computerPlay> is paper,
"Paper beats rock. Computer scores!", <computerScore> + 1
• if <playerPlay> is rock and <computerPlay> is scissors,
"Rock beats scissors. Player scores!", <playerScore> + 1
• if <playerPlay> is paper and <computerPlay> is rock,
"Paper beats rock. Player scores!", <playerScore> + 1
• if <playerPlay> is paper and <computerPlay> is scissors,
"Scissors beats paper. Computer sores!", <computerScore> + 1
• if <playerPlay> is scissors and <computerPlay> is rock,
"Rock beats scissors. Computer scores!"
• if <playerPlay> is scissors and <computerPlay> is paper,
"Scissors beats paper. Player scores!", <playerScore> + 1

 Once <playerScore> or <computerScore> reach 5; the game
stops and and:
 If <playerPlay> is 5; "You win the match!"
 else: "You lost the match!"
 
 [Note: check some ways to keep playing after the game
    is over]
*/