$(function() {

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 430) {
        $("#stickyNav").addClass('sticky');
        // $('nav div').addClass('visible-title');
    }
    else {
        $("#stickyNav").removeClass('sticky');
        // $('nav div').removeClass('visible-title');
    }
  });

    $(".change-status").on("click", function(e) {
        var burgID = $(this).data("id");
        var devoured = {
            devoured: true
        }

        console.log(burgID, devoured.devoured);
        $.ajax("/api/burgers/" + burgID, {
            type: "PUT",
            data: devoured
        }).then(function() {
            console.log("Ate burger " + burgID);
            location.reload();
        });

    });


    $(".new-burger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger").val().trim(),
        };
    
        console.log(newBurger);
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
          console.log("Added new burger");
          location.reload();
        });
      });
    


});


