<?php
include_once("php/header.php");

if (isset($_POST["pass"]) && $_POST["pass"] == 'cinema2020') {
    $_SESSION['admin']='cinema2020';
    echo"
        <p class = 'error'><br/>Correctement connecté</p>
    </body>
    <meta http-equiv=\"refresh\"  content=\"3;URL=index.php\">";
}
else {
    echo "
    <div class='pass'>
    <form action='Connexion.php' method='post'>
    <input type='password' name='pass' placeholder='Mot de Passe'>
    <input type='submit' value='Connection'>
    </form>
    </div>
    ";
    if (isset($_POST["pass"])) {
        echo "<br/><p class = 'error'>Mauvais Mot de passe</p>";
    }
}
?>

