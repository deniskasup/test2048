class Thing {
    constructor(position, value) {
        this.x = position.x;
        this.y = position.y;
        this.value = value;
        this.lastPosition = null;
        this.combined = null; // Tracks tiles that merged together
    }

    changePosition(position) {
        this.x = position.x;
        this.y = position.y;

    }
    
    saveLastPosition(position) {
        this.lastPosition = {x: position.x, y: position.y}
    }
}