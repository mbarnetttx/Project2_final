<<<<<<< HEAD
=======
// Get references to page elements
>>>>>>> fa39b52ab671eb5604460b667002b0ff7a85d173
var $title = $("#title");
var $category = $("#category");
var $submitBtn = $("#submit");
var $list = $("#list");
var $link = $("#link");
<<<<<<< HEAD
=======
<<<<<<< HEAD

category = $("#category");

=======
var likes = 0;
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
>>>>>>> fa39b52ab671eb5604460b667002b0ff7a85d173

var API = {
  saveScience: function (science) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/" + category,
      data: JSON.stringify(science)
    });
  },
<<<<<<< HEAD
  getScience: function (category) {
=======
  getScience: function() {
>>>>>>> fa39b52ab671eb5604460b667002b0ff7a85d173
    return $.ajax({
      url: "api/" + category,
      type: "GET"
    }).then(function(data) {
      //console.log(data);
    });
<<<<<<< HEAD
  },
  updateLikes: function (id, likes) {
    return $.ajax({
      url: "api/update-likes/" + id + "/" + likes,
      type: "PUT"
    }).then(data => {
    location.reload();
  })
}
=======
<<<<<<< HEAD
  },
  // deleteScience: function(id) {
  //   return $.ajax({
  //     url: "api" + category + id,
  //     type: "DELETE"
  //   });
  // },
  // editLikes: function(id) {
  //   return $.ajax({
  //     url: "api/science/" + id,
  //     type: "DELETE"
  //   });
  // }
=======
  }
>>>>>>> 11baed67e41fbe6e3155af28c8dc19472d87022c
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshScience = function() {
  API.getScience().then(function(data) {
    var $science = data.map(function(science) {
      var $a = $("<a>")
        .text(science.text)
        .attr("href", "/" + category + "/" + science.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": science.id
        })
        .append($a);

      return $li;
    });

    $list.empty();
    $list.append($science);
  });
>>>>>>> fa39b52ab671eb5604460b667002b0ff7a85d173
};
let currentPage = location.pathname.split("/")[1];
console.log(currentPage);

var handleFormSubmit = function (event) {
  event.preventDefault();

  var science = {
    title: $title.val().trim(),
    category: $category.val().trim(),
    link: $link.val().trim(),
  };

  if (!(science.title && science.category)) {
    alert("You must enter a title and category!");
    return;
  }

  API.saveScience(science);

  $title.val("");
  $link.val("");

  location.reload();
};

$submitBtn.on("click", handleFormSubmit);

$(document).on("click", ".likes", function (event) {
  event.preventDefault();
  var likes = $(this).attr("data-likes");
  var id = $(this).attr("data-id");

  updatedLikes = parseInt(likes) + 1;

  API.updateLikes(id, updatedLikes);

});

