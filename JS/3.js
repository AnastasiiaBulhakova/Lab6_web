class Animal {
    constructor(name, h, k) {
        if (h > 0 && k > 0) {
            this.name = name;
            this.h = h;
            this.k = k;
        } else {
            this.name = "NoName";
            this.h = 0.5;
            this.k = 10;
        }
    }

    weightKg() {
        return this.k * Math.pow(this.h, 3);
    }
}

class Cat extends Animal {
    constructor(name, h, breed) {
        super(name, h, 15);
        if (breed && breed.trim() !== "") {
            this.breed = breed;
        } else {
            this.breed = "NoName";
        }
    }

    weightGr() {
        return this.weightKg() * 1000;
    }
}

function show(msg, id, res) {
    document.getElementById(id).innerHTML = msg + res;
}

function calcAnimal() {
    let name = document.getElementById("name").value;
    let h = parseFloat(document.getElementById("height").value);
    let k = parseFloat(document.getElementById("coef").value);

    let catName = document.getElementById("catName").value;
    let catH = parseFloat(document.getElementById("catHeight").value);
    let breed = document.getElementById("breed").value;

    let an = new Animal(name, h, k);
    let cat = new Cat(catName, catH, breed);

    show("Тварина: " + an.name + ", вага (кг): ", "w1", an.weightKg().toFixed(3));
    show("Кішка: " + cat.name + ", вага (г): ", "w2", cat.weightGr().toFixed(1));
    show("Порода кішки: ", "br", cat.breed);
}