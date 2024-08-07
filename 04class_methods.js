

class DriverLicense {

    constructor(state, lno) {
        this.state = state;
        this.license = lno;
    }

    getState() {
        return this.state;
    }

}


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


}




let p1 = new Person("Jeff", 32);
let license = new DriverLicense('NSW', '443322116677');


p1.setLicense(license); //.setLicense(0x0);

license = null;

console.log(p1.license.getState());