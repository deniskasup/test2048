class Game {
    constructor(size = 4) {
        this.size = size;
        this.visual = new Visual;
        this.gameSetup()

    }

    gameSetup() {
        this.grid = new Grid(this.size);
        this.gamewon = false;
        this.gameover = false;
        this.score = 0;
        console.log(this.grid);
        this.visualRefresh();
        window.addEventListener('keydown', e => {
            console.log(e.code);
            this.controls(e.code)

        })
        document.querySelector('.reset-button').addEventListener('click', () => {
            this.visual.clearBoard()
            this.gameSetup()
            this.addStartThings()
        })

    }

    addStartThings() {
        this.newRandomThing()
        this.newRandomThing()
        this.visualRefresh();
        console.table(this.grid.cells);
    }

    newRandomThing() {
        let options = [];

        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
                if (this.grid.cells[i][k] === 0) {
                    options.push({ x: i, y: k });
                };
            }
        }
        if (options.length > 0) {
            let value = Math.random() > 0.1 ? 2 : 4;
            let position = options[Math.floor(Math.random() * options.length)];
            let thing = new Thing(position, value);
            this.grid.addThing(thing);
            this.visual.drawThing(thing);
        } else {
            console.log('Game Over');
            this.gameover = true;
        }
    }

    changePositions() {
        this.grid.allCells((x, y, thing) => {
            if (thing) {
                // console.log('thing----', thing);

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
        // debugger
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
                    // debugger
                    column[i].combined = { x: column[i - 1].x, y: column[i - 1].y };
                    column[i].lastPosition = null;
                    column[i - 1] = 0;
                }
            }
            // console.log(a);
        }
        return column;
    }

    visualRefresh() {
        this.visual.draw(this.grid);
    }

    controls(keyCode) {
        let flipped = false;
        let transposed = false;
        let played = true;
        let cells = this.grid.cells;
        switch (keyCode) {
            case 'ArrowDown':
                // do nothing
                this.savePositions()

                break;
            case 'ArrowUp':
                this.savePositions()
                cells = this.grid.flipCells(cells);
                flipped = true;
                break;
            case 'ArrowRight':
                this.savePositions()
                // debugger
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                transposed = true;
                break;
            case 'ArrowLeft':
                this.savePositions()
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                this.grid.cells = this.grid.flipCells(this.grid.cells);
                transposed = true;
                flipped = true;
                // console.table(cells)
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
            console.log('changed??', changed);
            
            if (flipped) {
                this.grid.cells = this.grid.flipCells(cells);
                this.changePositions()

            }
            if (transposed) {
                // debugger
                this.grid.cells = this.grid.transposeCells(this.grid.cells);
                this.changePositions()

            }
            if (changed) {
                this.visualRefresh()
                setTimeout(() => { this.newRandomThing() }, 200)
            }
            // let gameover = isGameOver();
            // if (gameover) {
            //     console.log('GAME OVER');
            // }

            // let gamewon = isGameWon();
            // if (gamewon) {
            //     console.log('GAME WON');
            // }
        }





    }

    // keyPressed() {
    //     // debugger
    //     this.savePositions()
    //     for (let i = 0; i < 4; i++) {
    //         this.grid.cells[i] = this.moveProcess(this.grid.cells[i]);
    //     }
    //     this.changePositions()
    //     this.visualRefresh()
    //     setTimeout(() => { this.newRandomThing() }, 200)

    // }

    moveProcess(column) {
        column = this.moveThings(column);
        column = this.combiineThings(column);
        column = this.moveThings(column);
        return column

    }

}

let check = new Game
check.addStartThings()


