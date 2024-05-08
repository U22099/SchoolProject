let welcome = [
    [0,4, 6,7,8,9, 11, 16,17,18, 21,22, 25,29, 31,32,33],
    [0,4, 6, 11, 15, 20,23, 25,26,28,29, 31],
    [0,2,4, 6,7,8,9, 11, 15, 20,23, 25,27,29, 31,32,33],
    [0,1,3,4, 6, 11, 15, 20,23, 25,29, 31],
    [0,4, 6,7,8,9, 11,12,13,14, 16,17,18, 21,22, 25,29, 31,32,33]
]
let to = [
    [13,14,15,16,17, 19,20,21],
    [15, 18,22],
    [15, 18,22],
    [15, 18,22],
    [15, 19,20,21]
]
let csgs = [
    [1,2,3, 8,9,10, 16,17,18, 22,23,24],
    [0, 7,  15,  21],
    [0, 8,9,10, 15,18, 22,23,24],
    [0, 11, 15,18, 25],
    [1,2,3, 5, 8,9,10, 13, 16,17,18, 20, 22,23,24, 27, 29, 31]
]
let watcher = 0;
let myRows = document.getElementsByClassName('rows');
document.getElementById('btn').addEventListener("click", ()=>{
    if(watcher > 2){
        watcher = 0
    }
    if(watcher == 0){
        clear()
        displayX(welcome);
        watcher++
    }else if(watcher == 1){
        clear()
        displayX(to)
        watcher++
    }else{
        clear()
        displayX(csgs)
        watcher++
    }
})
function clear(){
    let col = [
        myRows[0].getElementsByTagName('div'),
        myRows[1].getElementsByTagName('div'),
        myRows[2].getElementsByTagName('div'),
        myRows[3].getElementsByTagName('div'),
        myRows[4].getElementsByTagName('div')]
    for(let i = 0; i < col.length; i++){
        for(let q = 0; q < col[i].length; q++){
            col[i][q].getElementsByTagName('p')[0].style.backgroundColor = "black";
            col[i][q].getElementsByTagName('p')[0].style.boxShadow = "none";
            col[i][q].getElementsByTagName('p')[0].style.filter = "brightness(1)";
            
        }
    }
}
function displayX(x){
    for(let i = 0; i < x.length; i++){
        for(let q = 0; q < x[i].length; q++){
            myRows[i].getElementsByTagName('div')[x[i][q]].getElementsByTagName('p')[0].style.backgroundColor = "greenyellow";
            myRows[i].getElementsByTagName('div')[x[i][q]].getElementsByTagName('p')[0].style.boxShadow = "0px 0px 2px 2px green";
            myRows[i].getElementsByTagName('div')[x[i][q]].getElementsByTagName('p')[0].style.filter = "brightness(1.5)";
        }
    }
}