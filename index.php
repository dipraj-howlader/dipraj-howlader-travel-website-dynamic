 

<?php

$servername = "localhost"; //change this to your server name
$name = "root"; //change this to your MySQL username
$pass = ""; //change this to your MySQL password
$dbname = "travel"; //change this to your MySQL database name

// Create connection
$conn = mysqli_connect($servername, $name, $pass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
$sql = "SELECT * FROM travel.login ";
$result = $conn->query($sql);

// Convert the data to JSON format
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = (int)$_POST['phone'];
    $address = $_POST['address'];
    $country = $_POST['country'];
  
    echo "Name: $name\n";
    echo "Email: $email\n";
    echo "Phone Number: $phone\n";
    echo "Address: $address\n";
    echo "Country: $country\n";

 // Prepare and bind the SQL statement
 $stmt = $conn->prepare("INSERT INTO info (name, email, phone, address, country) VALUES (?, ?, ?, ?, ?)");
 $stmt->bind_param("ssiss", $name, $email, $phone, $address, $country);

 // Execute the SQL statement and check for errors
 if ($stmt->execute() === TRUE) {
   echo "New record created successfully";
 } else {
   echo "Error: " . $stmt->error;
 }


  }


$conn->close();

?>
