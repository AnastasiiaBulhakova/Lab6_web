let arrclass = [];

arrclass[0] = {
    sub: "Математика",
    time: "09:00",
    teach: "Іваненко"
};
arrclass[1] = {
    sub: "Програмування",
    time: "10:30",
    teach: ""
};
arrclass[2] = {
    sub: "Фізика",
    time: "12:10",
    teach: "Петренко"
};
arrclass[3] = {
    sub: "Історія",
    time: "13:40",
    teach: "Сидоренко"
};

function timetomin(time) {
    var t = time.split(":");
    return Number(t[0]) * 60 + Number(t[1]);
}

// функція для кнопки
function check() {
    var dur = 80;
    var nowd = new Date();
    var curmin = nowd.getHours() * 60 + nowd.getMinutes();

    // таблиця
    var table = "<table><tr><th>Пара</th><th>Час</th><th>Предмет</th><th>Викладач</th></tr>";
    for (var i = 0; i < arrclass.length; i++) {
        table += "<tr>";
        table += "<td>" + (i + 1) + "</td>";
        table += "<td>" + arrclass[i].time + "</td>";
        table += "<td>" + arrclass[i].sub + "</td>";
        table += "<td>" + (arrclass[i].teach || "Не вказано") + "</td>";
        table += "</tr>";
    }
    table += "</table>";

    var startday = timetomin(arrclass[0].time);
    var endday = timetomin(arrclass[arrclass.length - 1].time) + dur;

    var result = "";
    var found = false;

    for (var i = 0; i < arrclass.length; i++) {
        var start = timetomin(arrclass[i].time);
        var end = start + dur;

        if (curmin >= start && curmin < end) {
            result = "Зараз пара: " + arrclass[i].sub + ".";
            if (arrclass[i].teach == "") {
                result += " Викладача не вказано!";
            } else {
                result += " Викладач: " + arrclass[i].teach + ".";
            }
            found = true;
            break;
        }
    }

    if (!found) {
        if (curmin < startday) {
            result = "Пари ще не почалися.";
        } else if (curmin >= endday) {
            result = "Пари закінчилися.";
        } else {
            for (var i = 0; i < arrclass.length - 1; i++) {
                var end = timetomin(arrclass[i].time) + dur;
                var nextstart = timetomin(arrclass[i + 1].time);
                if (curmin >= end && curmin < nextstart) {
                    result = "Зараз перерва після " + (i + 1) + "-ї пари";
                    break;
                }
            }
        }
    }

    document.getElementById("rezult").innerHTML = table + "<p>" + result + "</p>";
}