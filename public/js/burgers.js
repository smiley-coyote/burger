
$(function() {
   $(".devour").on("click", function(event) {
     var id = $(this).data("id");
     var devoured = true
 
     var devouredState = {
       devoured: devoured
     };
 
     // Send the PUT request.
     $.ajax("/api/burgers/" + id, {
       type: "PUT",
       data: devouredState
     }).then(
       function() {
         console.log("changed devour to", devoured);
         // Reload the page to get the updated list
         location.reload();
       }
     );
   });
 
   $(".create-form").on("submit", function(event) {
     // Make sure to preventDefault on a submit event.
     event.preventDefault();
 
     var newBurger = {
       burger_name: $("#ca").val().trim(),
       devoured: false
     };
 console.log(newBurger);
     // Send the POST request.
     $.ajax("/api/burgers", {
       type: "POST",
       data: newBurger
     }).then(
       function() {
         console.log("created new burger");
         // Reload the page to get the updated list
         location.reload();
       }
     );
   });
 
 });
 