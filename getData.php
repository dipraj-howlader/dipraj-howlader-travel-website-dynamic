<?php
// Your database connection code should be here
$conn = mysqli_connect("localhost", "root", "", "travel");

// Check the connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Query the database to select all columns from the 'info' table
$sql = "SELECT * FROM info";
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
  // Loop through the rows in the result set and create an array of data
  $data = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }

  // Convert the data to JSON format using json_encode()
  $json_data = json_encode($data);

  // Send the JSON data to JavaScript using an AJAX response
  header('Content-Type: application/json');
  echo $json_data;
} else {
  // Handle the error if the query was not successful
  echo "Error: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
