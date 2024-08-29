export default class Score {
    score = 0;
    HIGH_SCORE_KEY = "highScore";

    constructor(ctx, scaleRatio) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.scaleRatio = scaleRatio;
    }

    update(frameTimeDelta) {
        this.score += frameTimeDelta * 0.01;
    }

    reset() {
        this.score = 0;
    }

    setHighScore() {
        const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
        if (this.score > highScore) {
            localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
        }
    }

    draw() {
        const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
        const y = 30 * this.scaleRatio;
    
        const fontSize = 25 * this.scaleRatio;
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillStyle = "#525250";
        const scoreX = this.canvas.width - 150 * this.scaleRatio;
        const highScoreX = this.canvas.width - 300 * this.scaleRatio;
    
        const scorePadded = Math.floor(this.score).toString().padStart(6, '0');
        const highScorePadded = highScore.toString().padStart(6, '0');
    
        this.ctx.fillText(scorePadded, scoreX, y);
        this.ctx.fillText(highScorePadded, highScoreX, y);
    }
    
}
