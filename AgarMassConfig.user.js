// ==UserScript==
// @name         AgarMassConfig
// @namespace    AgarMassCinfig
// @version      1
// @grant       none
// @description  AgarMass Cheat Config
// @author       http://www.twitch.tv/lefela44
// @include      http://agar.io/*
// ==/UserScript==

<!DOCTYPE html>
<html>
<body>

Name: <input type="text" id="myText" value="100">

<p>Click the button to change the value of the text field.</p>

<button onclick="myFunction()">Mass</button>

<script>
function myFunction() {
    document.getElementById("myText").value = "100";
}
</script>

</body>
</html>

