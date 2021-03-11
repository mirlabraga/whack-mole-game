# whack-mole-game

The challange is: it is creating a implementation that Whack Mole Game
For more information link in: [Whack Mole Game](https://en.wikipedia.org/wiki/Great-circle_distance).

## Development Requirements

- Web Browser: sugestion: Chrome >= Version 88 [(https://www.google.co.uk/chrome)](https://www.google.co.uk/chrome)


## Installation

```bash
$ git clone git@github.com:mirlabraga/whack-mole-game.git
$ cd whack-mole-game
```

## Run

Open the *../whack-mole-game/src/html/dashboard.html* in your web browser.

## Configurate Game

On the *../whack-mole-game/src/js/cofig.js* you can config parameter for


|  Improvement |  Descrition | Default |
|---|---|---|
|  timeoutGame | time until the game finish in miliseconds | 10 seconds |
|  timeoutMole  | interval between show each mole after the game started in mileseconds | 0.7 seconds|
|  maxSimultaneousMole  | maximum mole shows in simultaneous time | until 3 moles in the same time|
|  messages.help  | message for the help the gamer use to the game | - |
|  messages.finalGame  | final messages in the end of the game | - |


## How does it work?!

![](http://g.recordit.co/Yk5YRGGhI0.gif)ss

## Improvement points

|  Improvement |  Descrition |
|---|---|
|  Cick twice in the same mole image | remove the double click or more in the image |
|  add error/warn treatments  | add label with error/warn messages |


## License
[MIT](https://choosealicense.com/licenses/mit/)
