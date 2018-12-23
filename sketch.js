
var tree;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  tree = new Tree();
  for (var i = 0; i < 40; i++) {
    tree.addValue(floor(random(0, 70)));
  }
  console.log(tree);
  tree.traverse();

  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}