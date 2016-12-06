function highlight (id, visibility) {
  var objects =[]
  app.scene.traverse ( function(child) {
    if (child instanceof THREE.Mesh && child.userData['layerId'] == id) {
      objects.push(child);
      for ( var i = 0; i < objects.length; i ++ ) {
        objects[i].visible = visibility;
        };
      }
  });
}
function highlight_line (id, visibility) {
  var objects =[]
  app.scene.traverse ( function(child) {
    if (child instanceof THREE.Line && child.userData['layerId'] == id ) {
      objects.push(child);
      for ( var i = 0; i < objects.length; i ++ ) {
        objects[i].visible = visibility;
        };
      }
  });
}
function update_labels(remove_id, add_id) {
  remove_id.forEach(function (label) {
    var i = visible_labels.indexOf(label);
    if(i != -1) {
  	 visible_labels.splice(i, 1);
    }
  });
  add_id.forEach(function (label) {
    visible_labels.push(label);
  });
}
var waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function(direction) {
    highlight_line("7", false);
  },
  offset: "10%"
});
var waypoint1 = new Waypoint({
  element: document.getElementById('first'),
  handler: function(direction) {
    $('#viewport').hide();
    var newCords = {x: 135, y: -10, z: 40}
    animate(newCords, 5000);
    highlight_line("7", true);
    highlighted_labels = ["id4"];
  },
  offset: "130%"
});
var waypoint2 = new Waypoint({
  element: document.getElementById('second'),
  handler: function(direction) {
    $('#viewport').hide();
    highlight_line("7", false);
    var newCords = {x: 120, y: -5, z: 50}
    animate(newCords, 3000);
  },
  offset: "130%"
});
var waypoint3 = new Waypoint({
  element: document.getElementById('third'),
  handler: function(direction) {
    var newCords = {x: 130, y: 20, z: 45}
    animate(newCords, 3000);
    highlighted_labels = ["id4"];
  },
  offset: "130%"
});
var waypoint4 = new Waypoint({
  element: document.getElementById('fourth'),
  handler: function(direction) {
    var newCords = {x: 140, y: -60, z: 65}
    animate(newCords, 3000);
    update_labels(["id9", "id10"],[]);
    highlighted_labels = ["id0"];
  },
  offset: "130%"
});
var waypoint4 = new Waypoint({
  element: document.getElementById('fifth'),
  handler: function(direction) {
    var newCords = {x: 150, y: -30, z: 55}
    animate(newCords, 3000);
    update_labels(["id7","id8"],["id5","id9","id10"]);
    highlighted_labels = ["id9", "id10"];
  },
  offset: "130%"
});
var waypoint6 = new Waypoint({
  element: document.getElementById('six'),
  handler: function(direction) {
    var newCords = {x: 118, y: -25, z: 52}
    animate(newCords, 3000);
    update_labels(["id9", "id10"], ["id7","id8"]);
    highlighted_labels = ["id7", "id8"];
  },
  offset: "130%"
});
var waypoint7 = new Waypoint({
  element: document.getElementById('seven'),
  handler: function(direction) {
    var newCords = {x: 120, y: -98, z: 70}
    animate(newCords, 3000);
    update_labels(["id7","id8","id21"],[]);
    console.log("removed 21!!!!!!!");
    highlighted_labels = [];
    highlight("8", false);
  },
  offset: "130%"
});
var waypoint8 = new Waypoint({
  element: document.getElementById('eight'),
  handler: function(direction) {
    var newCords = {x: 85, y: -114, z: 60}
    animate(newCords, 3000);
    update_labels(["id11"],["id21"]);
    highlighted_labels = ["id21"];
    highlight("8", true);
    highlight("16", false);
  },
  offset: "130%"
});
var waypoint9 = new Waypoint({
  element: document.getElementById('nine'),
  handler: function(direction) {
    update_labels(["id21"],["id11"]);
    highlighted_labels = ["id11"];
    var newCords = {x: 97, y: -40, z: 64}
    animate(newCords, 3000);
    highlight("8", false);
    highlight("16", true);
    highlight_line("4", false);
  },
  offset: "130%"
});
var waypoint10 = new Waypoint({
  element: document.getElementById('ten'),
  handler: function(direction) {
    var newCords = {x: -20, y: -30, z: 160}
    animate(newCords, 3000);
    update_labels(["id11","id12"],[]);
    highlighted_labels = [];
    highlight_line("4", true);
    highlight("16", false);
    highlight("12", false);
  },
  offset: "130%"
});
var waypoint11 = new Waypoint({
  element: document.getElementById('eleven'),
  handler: function(direction) {
    var newCords = {x: 110, y: 30, z: 50}
    animate(newCords, 3000);
    update_labels(["id20"],["id12"]);
    highlighted_labels = ["id12"];
    highlight_line("4", false);
    highlight("19", false);
    highlight("12", true);
  },
  offset: "130%"
});
var waypoint12 = new Waypoint({
  element: document.getElementById('twelve'),
  handler: function(direction) {
    var newCords = {x: 79, y: 10, z: 55}
    animate(newCords, 3000);
    update_labels(["id12","id19"],["id20"]);
    highlighted_labels = ["id20"];
    highlight("12", false);
    highlight("1", false);
    highlight("19", true);
  },
  offset: "130%"
});
var waypoint13 = new Waypoint({
  element: document.getElementById('thirteen'),
  handler: function(direction) {
    var newCords = {x: 110, y: -10, z: 60}
    animate(newCords, 3000);
    update_labels(["id20"],["id19"]);
    highlighted_labels = ["id19"];
    highlight("19", false);
    highlight("1", true);
  },
  offset: "130%"
});
var waypoint14 = new Waypoint({
  element: document.getElementById('fourteen'),
  handler: function(direction) {
    var newCords = {x: 85, y: 50, z: 60}
    animate(newCords, 3000);
    update_labels(["id19", "id22"],[]);
    highlighted_labels = ["id6"];
    highlight("1", false);
    highlight("2", false);
  },
  offset: "130%"
});
var waypoint15 = new Waypoint({
  element: document.getElementById('fifteen'),
  handler: function(direction) {
    var newCords = {x: 65, y: 60, z: 50};
    animate(newCords, 3000);
    update_labels([],["id22"]);
    highlighted_labels = ["id6","id22"];
    highlight("2", true);
  },
  offset: "130%"
});
var waypoint16 = new Waypoint({
  element: document.getElementById('sixteen'),
  handler: function(direction) {
    var newCords = {x: -95, y: 70, z: 50};
    animate(newCords, 3000);
    update_labels(["id22"],[]);
    highlighted_labels = ["id5"];
    highlight("2", false);
    highlight_line("3", false);
  },
  offset: "130%"
});
var waypoint17 = new Waypoint({
  element: document.getElementById('seventeen'),
  handler: function(direction) {
    var newCords = {x: -175, y: 70, z: 40};
    animate(newCords, 3000);
    highlighted_labels = ["id5"];
    highlight_line("3", true);
  },
  offset: "130%"
});
var waypoint18 = new Waypoint({
  element: document.getElementById('eighteen'),
  handler: function(direction) {
    var newCords = {x: -61, y: -90, z: 75};
    animate(newCords, 3000);
    update_labels(["id15"],[]);
    highlighted_labels = [];
    highlight_line("3", false);
    highlight("10", false);
  },
  offset: "130%"
});
var waypoint19 = new Waypoint({
  element: document.getElementById('nineteen'),
  handler: function(direction) {
    var newCords = {x:3, y: -72, z: 120};
    animate(newCords, 3000);
    update_labels(["id18"],["id15"]);
    highlighted_labels = ["id15"];
    highlight("10", true);
    highlight("9", false);
  },
  offset: "130%"
});
var waypoint20 = new Waypoint({
  element: document.getElementById('twenty'),
  handler: function(direction) {
    var newCords = {x:  1, y: -3, z: 130};
    update_labels(["id15","id18"],["id18"]);
    highlighted_labels = ["id18"];
    animate(newCords, 3000);
    highlight("10", false);
    highlight("9", true);
  },
  offset: "130%"
});
var waypoint21 = new Waypoint({
  element: document.getElementById('twenty-one'),
  handler: function(direction) {
    var newCords = {x:  -1, y: -3, z: 130};
    animate(newCords, 3000);
    update_labels([],["id18"])
    highlighted_labels = ["id18"];
    highlight_line("5", false);
    highlight("9", true);
  },
  offset: "130%"
});
var waypoint22 = new Waypoint({
  element: document.getElementById('twenty-two'),
  handler: function(direction) {
    update_labels(["id18","id18"],[]);
    highlighted_labels = [];
    var newCords = {x: -20, y: -0.001, z: 115};
    animate(newCords, 3000);
    highlight_line("5", true);
    highlight("9", false);
  },
  offset: "130%"
});
var waypoint23 = new Waypoint({
  element: document.getElementById('twenty-three'),
  handler: function(direction) {
    var newCords = {x: -30, y: -3, z: 90};
    animate(newCords, 3000);
    highlight_line("13", false);
    highlight_line("5", true);
  },
  offset: "130%"
});
var waypoint24 = new Waypoint({
  element: document.getElementById('twenty-four'),
  handler: function(direction) {
    var newCords = {x: -112, y: -68, z: 51};
    animate(newCords, 3000);
    update_labels(["id16"],[]);
    highlight("17", false);
    highlight_line("5", false);
    highlight_line("13", true);
  },
  offset: "130%"
});
var waypoint25 = new Waypoint({
  element: document.getElementById('twenty-five'),
  handler: function(direction) {
    var newCords = {x: -0.001, y: -0.001, z: 127};
    animate(newCords, 3000);
    update_labels(["id17"],["id16"]);
    highlighted_labels = ["id16"];
    highlight("17", true);
    highlight_line("13", false);
    highlight("14", false);
  },
  offset: "130%"
});
var waypoint26 = new Waypoint({
  element: document.getElementById('twenty-six'),
  handler: function(direction) {
    var newCords = {x: -0.1, y: -1, z: 100};
    animate(newCords, 3000);
    update_labels(["id16", "id13", "id14"],["id17"]);
    highlighted_labels = ["id17"];
    highlight("15", false);
    highlight("17", false);
    highlight("14", true);
  },
  offset: "130%"
});
var waypoint27 = new Waypoint({
  element: document.getElementById('twenty-seven'),
  handler: function(direction) {
    var newCords = { x:  70, y: -107, z: 59};
    update_labels(["id14","id17"],["id13"]);
    highlighted_labels = ["id13"];
    animate(newCords, 3000);
    highlight("14", false);
    highlight("15", true);
    highlight("18", false);
  },
  offset: "130%"
});
var waypoint29 = new Waypoint({
  element: document.getElementById('twenty-eight'),
  handler: function(direction) {
    update_labels(["id13","id14"],["id14"]);
    highlighted_labels = ["id14"];
    var newCords = {x: 62, y: -140, z: 59};
    // var newCords = {x: 27, y: -170, z: 45};
    animate(newCords, 3000);
    highlight("15", false);
    highlight("18", true);
  },
  offset: "130%"
});
var waypoint29 = new Waypoint({
  element: document.getElementById('twenty-nine'),
  handler: function(direction) {
    var newCords = {x: 62, y: -140, z: 59};
    // var newCords = {x: 27, y: -170, z: 45};
    update_labels([],["id14"]);
    highlighted_labels = ["id14"];
    animate(newCords, 3000);
    highlight("18", true);
  },
  offset: "130%"
});
var waypoint30 = new Waypoint({
  element: document.getElementById('thirty'),
  handler: function(direction) {
    update_labels(["id14","id14"],[]);
    highlighted_labels = [];
    var newCords = {x: 163, y: 113, z: 41};
    animate(newCords, 3000);
    highlight("18", false);
  },
  offset: "130%"
});
