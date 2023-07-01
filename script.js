$(document).ready(function () {
  $("#leadForm").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var password = $("#password").val();
    var email = $("#email").val();

    var requestData = {
      name: name,
      email: email,
    };

    console.log(requestData);

    $.ajax({
      url: "https://migration.pabau.me", // Replace with the appropriate URL
      type: "POST",
      headers: {
        Authorization: "Bearer MTIzMDka02efd5b36cb3a55fccc71d09e036a31", // Replace with your actual API key
      },
      data: requestData,
      success: function (response) {
        console.log("Lead created successfully!");
        console.log(response); // Log the response data to the console
        // Perform any additional actions or display success message
      },
      error: function (xhr, status, error) {
        console.log("Error creating lead. Please try again.");
        console.log(error); // Log the error data to the console
        // Handle the error or display error message
      },
    });
  });
});
