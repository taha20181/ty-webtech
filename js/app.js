var db = ["12", "13", "14", "15", "786", "734", "23", "73", "94", "54", "56", "654", "965", "39"];
var arr = [0, 4];
demo();

function demo() {
    var d = new Date();
    var h = Math.floor(Math.random() * 11);
    // var h = 6;
    console.log(h);
    console.log("array => ", arr[0]);
    if (h == 6) {
        for (var i = arr[0]; i<arr[1]; i++) {
            console.log(db[i]);
            if (arr[1]%4 != 0) {
                break;
            }
        }
        arr[1] = arr[1] + 4;
        arr[0] = arr[0] + 4;
    }
    setTimeout(demo, 600);
}