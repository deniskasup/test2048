export class Grid {
    constructor(size = 4) {
        this.size = size;
        this.cells = this.emptyGrid()
    }

    // создание пустой сетки
    emptyGrid() {
        let cells = [];
        for (let i = 0; i < this.size; i++) {
            let row = cells[i] = [];
            for (let k = 0; k < this.size; k++) {
                row.push(0);
            }
        }
        return cells;
    }

    // перевернуть сетку
    flipCells() {
        for (let i = 0; i < this.size; i++) {
            this.cells[i].reverse();
        }
        return this.cells;
    }

    // транспонировать сетку
    transposeCells(cells) {
        let transposedCells = this.emptyGrid()
        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
                transposedCells[i][k] = cells[k][i];
            }
        }
        return transposedCells;

    }

    // скопировать сетки
    copyGrid() {
        let copy = this.emptyGrid();
        for (let i = 0; i < this.size; i++) {   
            for (let j = 0; j < this.size; j++) {
                copy[i][j] = this.cells[i][j];
            }
        }
        return copy;
    }

    // проверить изменения в сетке
    compare(a, b) {
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                if (a[i][k] !== b[i][k]) {
                    return true;
                }
            }
        }
        return false;
    }

    // добавление новой плитки
    addThing(thing) {
        this.cells[thing.x][thing.y] = thing;
    }

    // удаление плитки
    removeThing(thing) {
        this.cells[thing.x][thing.y] = null
    }

    // колбэк для всех ячеек
    allCells(callback) {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                callback(x, y, this.cells[x][y]);
            }
        }
    }

}

