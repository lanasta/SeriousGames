SquirrelPacification.StartMenu = function(game) {
    this.TitleBG; // background
    this.startPrompt;
}

BunnyDefender.StartMenu.prototype = {

	create: function () { // actually something that's built in phaser
		startBG = this.add.image(0, 0, 'titlescreen');
		startBG.inputEnabled = true; // allows accepting mouse clip and touches
		startBG.events.onInputDown.addOnce(this.startGame, this); // goes to startGame function and passes game

		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Touch to Start!', 24);
	},

	startGame: function (pointer) { // created by him and once click happens
		this.state.start('Game'); // 'Game' is final state to be created
	}
};
