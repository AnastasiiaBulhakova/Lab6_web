function closeBlock(btn) {
    btn.parentNode.outerHTML = "";
}




function activate(cell) {
    if (cell.style.backgroundColor === "red") {
        cell.style.backgroundColor = "";
        cell.style.color = "";
    } else {
        cell.style.backgroundColor = "red";
        cell.style.color = "white";
    }
}

let table = document.getElementById("myTable");
let cells = table.getElementsByTagName("td");

function sumActive() {
    let sum = 0;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "red") {
            sum += Number(cells[i].textContent);
        }
    }
    document.getElementById("result").textContent = "Сума: " + sum;
}

function resetActive() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
        cells[i].style.color = "";
    }
    document.getElementById("result").textContent = "";
}
