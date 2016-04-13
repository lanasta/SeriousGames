// var StartMenu {
//     this.startBG; // background
//     this.startPrompt;
// 
// 	preload: function() {
// 		game.load.image('titlescreen', 'assets/TitleBG.png');
// 	}
// 	create: function () { // actually something that's built in phaser
// 		startBG = this.add.image(0, 0, 'titlescreen');
// 		startBG.inputEnabled = true; // allows accepting mouse clip and touches
// 		startBG.events.onInputDown.addOnce(this.startGame, this); // goes to startGame function and passes game
// 
// 		startPrompt = this.add.text(game.world.centerX, game.world.centerY, 'Touch to Start!', {fontSize: '30', fill: 'yellow'});
// 		startPrompt.anchor.x = Math.round(startPrompt.width * 0.5) / startPrompt.width;
// 	},
// 
// 	startGame: function (pointer) { // created by him and once click happens
// 		this.state.start('game'); // 'Game' is final state to be created
// 	}
// };
