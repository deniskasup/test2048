var myRegion = new ZingTouch.Region(document.body);
var myElement = document.getElementById('touch-container');

class Game {
    constructor(size = 4) {
        this.size = size;
        this.visual = new Visual;
        this.gameSetup();
        this.inputallowed = true;

    }

    gameSetup() {
        this.grid = new Grid(this.size);
        this.gameover = false;
        this.score = 0;
        this.visualRefresh();
        document.querySelector('.gameover').style.display = 'none'

        // мышь
        this.touchControls();


        // клавиатура
        window.addEventListener('keydown', e => {
            if (this.inputallowed) {
                this.controls(e.code)
            }
        })

        // reset
        document.querySelector('.reset-button').addEventListener('click', () => {
            this.restartGame();
        })

    }

    restartGame() {
        this.visual.clearBoard()
        this.gameSetup()
        this.addStartThings()
    }

    addStartThings() {
        this.newRandomThing()
        this.newRandomThing()
        this.visualRefresh();
        // console.table(this.grid.cells);
    }

    newRandomThing() {
        this.options()
        let options = this.availibleOptions;

        if (options.length > 0) {
            let value = Math.random() > 0.1 ? 2 : 4;
            let position = options[Math.floor(Math.random() * options.length)];
            let thing = new Thing(position, value);
            this.grid.addThing(thing);
            this.visual.drawThing(thing);

            //
            this.inputallowed = true;
        }

    }

    changePositions() {
        this.grid.allCells((x, y, thing) => {
            if (thing) {
                thing.changePosition({ x: x, y: y });
            }
        });

    }

    savePositions() {
        this.grid.allCells((x, y, thing) => {
            if (thing) {
                thing.mergedFrom = null;
                thing.saveLastPosition({ x: x, y: y });
            }
        });
    }

    moveThings(column) {
        let arr = column.filter(val => val)
        let missing = 4 - arr.length;
        let zeros = Array(missing).fill(0);
        arr = zeros.concat(arr);
        return arr;
    }

    combiineThings(column) {
        for (let i = this.size - 1; i >= 1; i--) {

            if (column[i] != 0) {
                let a = column[i].value;
                let b = column[i - 1].value;
                if (a == b) {
                    column[i].value = a + b;
                    this.score = this.score + column[i].value;
                    column[i].positionBeforeCombined = { x: column[i - 1].x, y: column[i - 1].y };
                    column[i].previousValue = column[i - 1].value;
                    column[i].lastPosition = null;
                    column[i - 1] = 0;
                }
            }
        }
        return column;
    }

    visualRefresh() {
        this.visual.draw(this.grid, this.score);
    }

    touchControls() {
        myRegion.bind(myElement, 'swipe', e => {

            if (this.inputallowed) {
                let direction = e.detail.data[0].currentDirection;
                if (direction < 135 && direction > 45) {
                    this.controls('ArrowUp')
                } else if (direction < 45 || direction > 315) {
                    this.controls('ArrowRight')
                } else if (direction < 315 && direction > 225) {
                    this.controls('ArrowDown')
                } else if (direction < 225 || direction > 135) {
                    this.controls('ArrowLeft')
                }
            }
        }, { passive: false });
    }

    controls(keyCode) {
        let flipped = false;
        let transposed = false;
        let played = true;
        let cells = this.grid.cells;
        switch (keyCode) {
            case 'ArrowDown':
                this.savePositions()
                break;
            case 'ArrowUp':
                this.savePositions()
                cells = this.grid.flipCells(cells);
                flipped = true;
                break;
            case 'ArrowRight':
                this.savePositions()
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                transposed = true;
                break;
            case 'ArrowLeft':
                this.savePositions()
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                this.grid.cells = this.grid.flipCells(this.grid.cells);
                transposed = true;
                flipped = true;
                break;
            default:
                played = false;
        }

        if (played) {
            let pastCells = this.grid.copyGrid(this.grid.cells);
            for (let i = 0; i < 4; i++) {
                this.grid.cells[i] = this.moveProcess(this.grid.cells[i]);
            }
            this.changePositions()
            let changed = this.grid.compare(pastCells, this.grid.cells);
            if (flipped) {
                this.grid.cells = this.grid.flipCells(cells);
                this.changePositions()
            }
            if (transposed) {
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                this.changePositions()
            }
            if (changed) {
                this.inputallowed = false;
                this.visualRefresh();
                setTimeout(() => this.newRandomThing(), 150);
            }

            // проверяем остались ли пустые места
            this.options()
            if (this.availibleOptions == 0) {
                let gameover = this.isGameOver()
                if (gameover) {
                    document.querySelector('.gameover').style.display = 'block';
                }
            }
        }
    }

    moveProcess(column) {
        column = this.moveThings(column);
        column = this.combiineThings(column);
        column = this.moveThings(column);
        return column

    }

    isGameOver() {
        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
                if (i !== (this.size - 1) && this.grid.cells[i][k].value === this.grid.cells[i + 1][k].value) {
                    return false;
                }
                if (k !== (this.size - 1) && this.grid.cells[i][k].value === this.grid.cells[i][k + 1].value) {
                    return false;
                }
            }
        }
        return true;
    }

    options() {
        let options = [];
        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
                if (this.grid.cells[i][k] === 0) {
                    options.push({ x: i, y: k });
                };
            }
        }
        this.availibleOptions = options;
    }

}

let check = new Game
check.addStartThings()