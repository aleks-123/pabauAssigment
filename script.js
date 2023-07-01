$(document).ready(function () {
  $("#leadForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    var form = $(this);
    var formData = form.serialize();

    // Make AJAX request
    $.ajax({
      url: "https://migration.pabau.me",
      type: "GET",
      data: formData,
      headers: {
        "API-Key": "MTIzMDka02efd5b36cb3a55fccc71d09e036a31",
      },
      success: function (response) {
        console.log("Lead created successfully!", response);

        // Import the response into your webpage
        $("#responseContainer").html(response);

        // Reset the form
        form[0].reset();
      },
      error: function (xhr, status, error) {
        console.error("Error creating lead. Please try again.", error);
      },
    });
  });

  // Automatically submit the form on page load
  // $("#leadForm").trigger("submit");
});
