# Unnamed Card Game

Unnamed card game is a semi-perfect information card game where players both draw from the same deck. They will take turns managing their cards and resources to whittle down the opponent by bringing their life total to 0. As the game is semi-perfect information, both players will be able to see each others hands, however players will not be able to see the cards they are going to draw next.


## Modes

There are 3 modes planned.

Player vs AI: Game will function for a single player versing an AI agent.

Player vs Player (Local): Main focus of the game, each player will choose their move on the same device by passing control to the other player when their turn changes.

Player vs Player (Online): May need to use a different hosting service for this, I'm thinking firebase realtime database where we upload the game state for a given game to a database, which can be read from each turn to update each players board state.

## Rules

### Resource

Resource is used to create units and to cast spells, once resource is used for this purpose it is removed from the player and they must wait to generate more resources on the following turns. Players will begin the game with 1 resource. Each turn the player recieves resource equal to the resource recieved the prior turn + 1. For example turn 2 they will recieve 2 resource, then on turn 3 they will resource 3 resource. This continues up until players are recieving 5 resource a turn. Resource is maintained between turns, so not spending it will allow players to accumulate a large amount to use a bigger card.

### Attacking

Upon entering the attack phase a player will be assigned first depending on whether they were first last turn, if they weren't they become first this turn. The player that is attacking first decides what cards will be attacking from what location (subject to change - still need to decide how the board will play), upon confirming the player attacking second will respond by attacking by placing against the first players cards or to attack directly. The second player will have advantage in this regard as they can decide whether to let damage go through and also decide whether to attack directly (can make cards that benefit attacking first).

### Cards in hand

Players start the game with 5 cards in hand. At the start of each new turn excluding the first one they will draw 3 cards. This allows for more decisions to be considering for each turn. There is no maximum hand size.

### Win condition

Each player starts the game with (undecided amount) of life points. Players reduce enemy life total by using cards to directly effect their life total or by attacking directly. Upon a player reaching 0 life, the opposing player wins and the game is concluded. (Potential idea) Once the deck is fully drawn the player with the most life remaining is the winner.

### Board setup

(To be determined) Each player can assign cards to any of 5 lanes on their side of the board during the attack phase. Cards in these positions are committed to attack and can be opposed by the player acting second. Cards with no card directly opposite to them will attack the other players life total directly. Once attack phase is over the cards return the the corresponding players side of the field, any number of cards may be on each side of the field.

### Phases

The player acting first will be the first to complete each of these phases, this switches every turn.

Replenish phase: Players resource is replenish with the respective amount for the turn. This resource does not go away when the turns end so can be accumulated to large amounts over multiple turns.

Dump phase: (Potential idea) Before draw phase, players are able to pay 1 resource to replace any of the cards in their hand, the card will be placed in a dump pile and a new card will be drawn from the deck. A player can do this any number of times in this phase as long as they have the resource to do it.

Draw phase: Each player draws 3 (?) cards.

Summon phase: Each player summons the cards they want to summon.

Attack phase: Seeing attacking above.

After this the turn switches over.

## Cards

### Units

These cards can be placed on the field and can be committed for attack. They have a damage and health stat. Damage corresponds to the amount of life points opposing players lose upon a direct attack or the amount of health an opposing unit loses upon being attacked by the unit. 

### Spells

These cards can be used at any time to affect the board state.