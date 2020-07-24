
class Player {
    constructor(name) {
        this.name = this.setName(name);
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        return namePicked ? namePicked : Math.random() < 0.5 ? "Mario" : "Luigi"
    }

    gotHit() {
        if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false
        }
        this.status === "Big" && (this.status = "Small")
        this.status === "Powered Up" && (this.status = "Big")
    }

    gotPowerup() {
        this.status === "Small" && (this.status = "Big")
        this.status === "Big" && (this.status = "Powered Up")
        if (this.status === "Powered Up") {
            this.hasStar = true
            console.log("\nYou got a star!")
        }
    }

    addCoin() {this.totalCoins++}

    print() {
        console.log(`
Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}
Star: ${this.hasStar}
Game Over: ${!this.gameActive}`)
    }
}

const player = new Player()

const randRange = () => Math.floor(Math.random() * 3)

const gameTick = setInterval(() => {
    player.hasStar = false
    randRange() === 0 && player.gotHit()
    randRange() === 1 && player.gotPowerup()
    randRange() === 2 && player.addCoin()
    player.print()
    !player.gameActive && clearInterval(gameTick)
}, 100);

