


/*

Lets say we have airports and each airports have connections to other
    airports

There are outgoing connections and incoming connections
    We need to model this concept in code

*/

class Airport {

    constructor(name) {
        this.name = name;
        this.outgoing = [];
    }

    addOutgoing(airport) {
        this.outgoing.push(airport);
    }

}

let syd = new Airport("Sydney");
let melb = new Airport("Melbourne");
let bris = new Airport("Brisbane");
let auk = new Airport("Auckland");
let pth = new Airport("Perth");
let dar = new Airport("Darwin");

syd.addOutgoing(melb); //sydney adds the address of melbourne to its outgoing array
syd.addOutgoing(bris);
melb.addOutgoing(bris); //we update melbourne with new outgoing connections
melb.addOutgoing(pth);
auk.addOutgoing(syd);
pth.addOutgoing(auk);

/*
 constructor(name) {
        this.name = name;
        this.outgoing = [];
    }

*/
    // sydney.outgoing[0]
    // which is melbourne
        //sydney.outgoing[0].outgoing[1]
        //melb.outgoing[1] which is perth
//console.log(syd.outgoing[0].outgoing[1]);

//syd -> melb -> perth -> auk -> syd

// Compose a statement that will allow me to take this path:
//         syd -> melb -> perth -> auk -> syd
    //syd.outgoing -> Array
    //syd.outgoing[0] -> Airport object (which has .outgoing)
console.log(syd.outgoing[0].outgoing[1].outgoing[0].outgoing[0]);






