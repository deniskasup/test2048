class Visual {
    constructor() {
        this.board = document.querySelector('.play-board')
        this.scoreText = document.querySelector('.score span')
    }

    draw(grid, score) {
        this.clearBoard()

        // перерисовка всех ячеек
        grid.cells.forEach(column => {
            column.forEach(thing => {
                if (thing) {
                    this.drawThing(thing);
                }
            });
        });

        // обновить счет 
        this.scoreText.innerHTML = score;

    }

    drawThing(thing) {
        let id = 'id' + Math.floor(Math.random() * 20000)
        let thingDiv = document.createElement('div');
        let position = { x: thing.x, y: thing.y };

        if (thing.lastPosition) {

            thingDiv.classList.add('thing', 't' + thing.value, id)
            thingDiv.style.cssText = (this.positionStyle(thing.lastPosition));
            this.board.append(thingDiv)
            this.animate('move', position, id);
        } else if (thing.positionBeforeCombined) {

            thingDiv.classList.add('thing', 't' + thing.value, id, 'combined');
            thingDiv.style.cssText = (this.positionStyle(thing.positionBeforeCombined))
            this.board.append(thingDiv)
            this.animate('move', position, id)

        } else {
            thingDiv.classList.add('thing', 't' + thing.value, id, 'new');
            thingDiv.style.cssText = (this.positionStyle(position))
            this.board.append(thingDiv)
            // this.animate('new')

        }

    }

    positionStyle(position) {
        return (`top:${position.y + '00px'}; left:${position.x + '00px'}`)
    }

    moveThing(thing, position) {
        thing.style.cssText = (this.positionStyle(position));
    }

    clearBoard() {
        while (this.board.firstChild) {
            this.board.removeChild(this.board.firstChild)
        }
    }

    animate(type, position, id) {
        if (type == 'move') {
            setTimeout(() => {
                document.querySelector('.' + id).style.cssText = (this.positionStyle(position));
            }, 0)
        } else if (type == 'new') {
                document.querySelector('.new').classList.add('new-thing');
            setTimeout(() => {
                document.querySelector('.new').classList.remove('new-thing');
            }, 10)
        } else if (type == 'combined') {
                document.querySelector('.combined').classList.add('combined-thing');
            setTimeout(() => {
                document.querySelector('.combined').classList.remove('combine-thing');
            }, 0);
        }
    }

}
