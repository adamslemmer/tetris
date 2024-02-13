var IPiecerot = function(pos, piece){
    var divlist = [];
    for (i = 0; i < counter; i++){
        if (document.getElementById(i).className == piece){
            divlist.push(i);
        }
    }

    var rots = [
        [[-40, 20], [-20, 0], [0, -20], [20, -40]], 
        [[20, 40], [0, 20], [-20, 0], [-40, -20]], 
        [[40, -20], [20, 0], [0, 20], [-20, 40]], 
        [[-20, -40], [0, -20], [20, 0], [40, 20]]
    ]

    for (i = 0; i < divlist.length; i++){
        var thisdiv = document.getElementById(divlist[i]);
        thisdiv.style.left = thisdiv.offsetLeft + rots[pos][i][0] + "px";
        thisdiv.style.top = thisdiv.offsetTop + rots[pos][i][1] + "px";
    }
}