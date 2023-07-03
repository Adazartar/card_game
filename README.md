# Unnamed Card Game

Unnamed card game is a semi-perfect information card game where players both draw from the same deck. They will take turns managing their cards and resources to whittle down the opponent by bringing their life total to 0. As the game is semi-perfect information, both players will be able to see each others hands, however players will not be able to see the cards they are going to draw next.


## Modes

There are 3 modes planned.

Player vs AI: Game will function for a single player versing an AI agent.

Player vs Player (Local): Main focus of the game, each player will choose their move on the same device by passing control to the other player when their turn changes.

Player vs Player (Online): May need to use a different hosting service for this, I'm thinking firebase realtime database where we upload the game state for a given game to a database, which can be read from each turn to update each players board state.

## Rules

### Resource

Players will begin the game with 1 resource. Each turn the player recieves resource equal to the resource recieved the prior turn + 1. For example turn 2 they will recieve 2 resource, then on turn 3 they will resource 3 resource. This continues up until players are recieving 5 resource a turn. Resource is maintained between turns, so not spending it will allow players to accumulate a large amount to use a bigger card.

### Attack phase

Upon entering the attack phase a player will be assigned first depending on whether they were first last turn, if they weren't they become first this turn. The player that is attacking first decides what cards will be attacking from what location (subject to change - still need to decide how the board will play), upon confirming the player attacking second will respond by attacking by placing against the first players cards or to attack directly. The second player will have advantage in this regard as they can decide whether to let damage go through and also decide whether to attack directly (can make cards that benefit attacking first).

### Draw phase

Players start the game with 5 cards in hand. At the start of each new turn excluding the first one they will draw 3 cards. This allows for more decisions to be considering for each turn. 

### Win condition

Each player starts the game with (undecided amount) of life points. Players reduce enemy life total by using cards to directly effect their life total or by attacking directly. Upon a player reaching 0 life, the opposing player wins and the game is concluded. 

### Board setup

(To be determined) Each player can assign cards to any of 5 positions on their side of the board during the attack phase. Cards in these positions are committed to attack and can be opposed by the player acting second. Cards with no card directly opposite to them will attack the other players life total directly.

## Cards

### Units

These cards can be placed on the field and can be committed for attack. They have a damage and health stat. Damage corresponds to the amount of life points opposing players lose upon a direct attack or the amount of health an opposing unit loses upon being attacked by the unit. 

### Spells

These cards can be used at any time to affect the board state.