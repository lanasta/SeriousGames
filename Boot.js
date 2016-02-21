var SeriousGames = {};

SeriousGames.Boot = function (game) {};

SeriousGames.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'images/loader_bar.png');
        this.load.image('titleimage', 'images/TitleImage.png');
    },
    
    create: function () {
        this.stage.disable.VisibilityChange = false;
        this.scale.scalemode = Phaser.ScaleManager.SHOW_All;
        this.scale.minWidth = 270;
        this.scale.minHeight = 480;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forceLandscape = true;
        this.scale.setScreenSize(true);
        this.input.addPointer();
        this.stage.backgroundColor('#171642')
        
        this.state.start('Preloader');
        
    }
    }