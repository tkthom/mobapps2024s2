

class Box {
    constructor(name) {
        this.name = name;
        this.otherboxes = [];

    }

    addBox(box) {
        this.otherboxes.push(box);
    }
}

let b = new Box("Things");
b.addBox(new Box("Games"));
b.otherboxes[0].addBox(new Box("GameboyGames"));

console.log(b.otherboxes[0]);