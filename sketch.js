var tree;

function setup() {
    noCanvas();

    tree = new Tree();

    for(var i = 0; i < 100; i++) {
        tree.addValue(floor(random(0,1000)));

    }
    
    console.log(tree);
    tree.traverse();

}


function draw() {
    background(0);

}


