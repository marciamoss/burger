$(function() {
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#bu").val().trim()
      };
      
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });

    $(".change-devour").on("click", function(event) {
      const id = $(this).data("id");
      const newDevour = $(this).data("newdevour");
  
      const newDevourState = {
        devoured: newDevour 
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(() => {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
  });