$(document).ready(function () {
  $(".hamburger").on("click", function () {
    console.log("clicked");
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
  });

  $(".nav-link").on("click", function () {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      document.querySelector(".hamburger").classList.remove("active");
      document.querySelector(".nav-menu").classList.remove("active");
    })
  );

  $("#leadForm").submit(function (event) {
    event.preventDefault();

    var form = $(this);
    var formData = form.serialize();

    $.ajax({
      url: "https://migration.pabau.me",
      type: "GET",
      data: formData,
      headers: {
        "API-Key": "MTIzMDka02efd5b36cb3a55fccc71d09e036a31",
      },
      success: function (response) {
        console.log("Lead created successfully!", response);

        $("#responseContainer").html(response);

        // Reset the form
        form[0].reset();
      },
      error: function (xhr, status, error) {
        console.error("Error creating lead. Please try again.", error);
      },
    });
  });
});
