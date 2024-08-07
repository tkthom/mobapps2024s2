//We want to duplicate an object

//Example 2

class DriverLicense {

    constructor(state, lno) {
        this.state = state;
        this.license = lno;
    }

    getState() {
        return this.state;
    }

    getLicense() {
        return this.license;
    }
    
    copy() {
        return new DriverLicense(this.state, this.license)
    }

}

// let lno = new DriverLicense('VIC', '7878878232');
// 
// lno.copy()
//      this == lno when .copy() is called
//      example: lno.state is the same as this.state inside .copy() when called
//


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.license = null; //0x0

    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setLicense(license) {
        this.license = license;
    }

    getLicense() {
        return this.license;
    }

    copy() {
        let p = new Person(this.name, this.age);
        if(this.license != null) {
            p.setLicense(this.license.copy());
        }
        return p;
    }

}


let p1 = new Person("Jeff", 32);
let lno = new DriverLicense("NSW", '4433221166');

p1.setLicense(lno);

let pdup1 = new Person(p1.getName(), p1.getAge());
//pdup1 is a duplicate but no with the license.
let lnodup = new DriverLicense(p1.getLicense().state, p1.getLicense().license)
pdup1.setLicense(lnodup);

/*console.log(p1);
console.log(pdup1);*/



// Example 2 -> The cleaner version, we use methods

// Person -> DriverLicense (X)

let pdup2 = p1.copy();
//console.log(pdup2);

// Example 3

// Box -> otherboxes [Box] -> otherboxes [Box] -> otherboxes [Box] -> otherboxes [Box] ...
    // There is no end (well kind of)

class Box {
    constructor(name) {
        this.name = name;
        this.otherboxes = [];

    }

    addBox(box) {
        this.otherboxes.push(box);
    }

    duplicate() {

        let bdup = new Box(this.name); //1. Where we duplicate the current box
        console.log("Duplicating: " + this.name);
        for(let i = 0; i < this.otherboxes.length; i++) {
            let obox = this.otherboxes[i].duplicate(); // this.otherboxes[0].duplicate
            bdup.addBox(obox);
        }

        return bdup;
    }
}

let b = new Box("Things");
b.addBox(new Box("Games"));
b.addBox(new Box("Music"));
b.addBox(new Box("DVDs"));
b.otherboxes[0].addBox(new Box("GameboyGames"));
b.otherboxes[1].addBox(new Box("CDs"));



// We want to duplicate these boxes

/*
1. We need to duplicate the current box
2. We then need to duplicate all other boxes associated with the current box
3. Add the duplicated to the current duplicated box
Start

Things
Things -> Games
Things -> Games -> GameboyGames
Things -> Games
Things
Things -> Music
Things -> Music -> CDs
Things -> Music
Things
Things -> DVDs
Things

finished
 

*/

let newbox = b.duplicate();

console.log(newbox);
