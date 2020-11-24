const game = new Game();

/**
 * Test commit
 */

 document.getElementById('begin-game').addEventListener('click', function () {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});
