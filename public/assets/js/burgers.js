$(function() {
  $(".change-eaten").on("click", function(event) {
    let id = $(this).data("id");
    let newEaten = $(this).data("neweaten");
    let newEatenState = {
      devoured: newEaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
