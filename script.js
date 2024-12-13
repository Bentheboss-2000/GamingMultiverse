let x = 0;

function addSmashfighters() {
  if (x == 0) {
    document.getElementById("player1").src = "images/Sephiroth2.png";
    document.getElementById("player2").src = "images/Sonic3.png";
    document.getElementById("player3").src = "images/Bowser.png";
    document.getElementById("player4").src = "images/ArmMin.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box bg-settings sonic center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings sephiroth center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings bowser center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings minmin center-content");
    x = x + 1;
  } else if (x == 1) {
    StopSounds();
    document.getElementById("lifelight").play();
    x = x + 1;
  }
  else {
     document.getElementById("player1").src = "images/Sephiroth2.png";
    document.getElementById("player2").src = "images/Sonic3.png";
    document.getElementById("player3").src = "images/Bowser.png";
    document.getElementById("player4").src = "images/ArmMin.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box bg-settings sonic center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings sephiroth center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings bowser center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings minmin center-content");
}
}

function Brawlers() {
  if (x == 0) {
    document.getElementById("player1").src = "images/edgar.png";
    document.getElementById("player2").src = "images/Buzz.png";
    document.getElementById("player3").src = "images/Kenji.png";
    document.getElementById("player4").src = "images/TheBrock.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box bg-settings buzz center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings edgar center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings kenji center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings brock center-content");
    x = x + 1;
  } else if (x == 1) {
    StopSounds();
    document.getElementById("jesus").play();
    x = x + 1;
  }
  else {
     document.getElementById("player1").src = "images/edgar.png";
    document.getElementById("player2").src = "images/Buzz.png";
    document.getElementById("player3").src = "images/Kenji.png";
    document.getElementById("player4").src = "images/TheBrock.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box bg-settings buzz center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings edgar center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings kenji center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings brock center-content");
  }
}
function Gacha() {
  if (x == 0) {
    document.getElementById("player1").src = "images/BurningSpice.png";
    document.getElementById("player2").src = "images/DarkCacao.png";
    document.getElementById("player3").src = "images/MysticFlour.png";
    document.getElementById("player4").src = "images/GoldenCheese.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box box bg-settings cacao center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings burningspice center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings mysticflour center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings goldencheese center-content");
    x = x + 1;
  } else if (x == 1) {
    StopSounds();
    document.getElementById("promise").play();
    x = x + 1;
  }
  else {
     document.getElementById("player1").src = "images/BurningSpice.png";
    document.getElementById("player2").src = "images/DarkCacao.png";
    document.getElementById("player3").src = "images/MysticFlour.png";
    document.getElementById("player4").src = "images/GoldenCheese.png";
    document.getElementById("player1").setAttribute("class", "clickable2");
    document.getElementById("player2").setAttribute("class", "clickable2");
    document.getElementById("player3").setAttribute("class", "clickable2");
    document.getElementById("player4").setAttribute("class", "clickable2");
    document
      .getElementById("two")
      .setAttribute("class", "box box bg-settings cacao center-content");
    document
      .getElementById("one")
      .setAttribute("class", "box bg-settings burningspice center-content");
    document
      .getElementById("three")
      .setAttribute("class", "box bg-settings mysticflour center-content");
    document
      .getElementById("four")
      .setAttribute("class", "box bg-settings goldencheese center-content");
  }
}

function playGreen() {
  StopSounds();
  if (document.getElementById("player3").src.match("images/Bowser.png")) {
    document.getElementById("peaches").play();
  } else if (
    document.getElementById("player3").src.match("images/MysticFlour.png")
  ) {
    document.getElementById("mystic").play();
  } else if (document.getElementById("player3").src.match("images/Kenji.png")) {
    document.getElementById("wisdom").play();
  }
}

function playRed() {
  StopSounds();
  if (document.getElementById("player1").src.match("images/Sephiroth2.png")) {
    document.getElementById("MyMain").play();
  } else if (
    document.getElementById("player1").src.match("images/BurningSpice.png")
  ) {
    document.getElementById("Spice").play();
  } else if (document.getElementById("player1").src.match("images/edgar.png")) {
    document.getElementById("edgar").play();
  }
}

function playBlue() {
  StopSounds();
  if (document.getElementById("player2").src.match("images/Sonic3.png")) {
    document.getElementById("SEGA").play();
  } else if (
    document.getElementById("player2").src.match("images/DarkCacao.png")
  ) {
    document.getElementById("Cacao").play();
  } else if (document.getElementById("player2").src.match("images/Buzz.png")) {
    document.getElementById("Kaiju").play();
  }
}

function playYellow() {
  StopSounds();
  if (document.getElementById("player4").src.match("images/ArmMin.png")) {
    document.getElementById("ARM").play();
  } else if (
    document.getElementById("player4").src.match("images/GoldenCheese.png")
  ) {
    document.getElementById("Cheese").play();
  } else if (
    document.getElementById("player4").src.match("images/TheBrock.png")
  ) {
    document.getElementById("dang").play();
  }
}

function StopSounds() {
  document.getElementById("ARM").pause();
  document.getElementById("Cheese").pause();
  document.getElementById("dang").pause();
  document.getElementById("Kaiju").pause();
  document.getElementById("Cacao").pause();
  document.getElementById("SEGA").pause();
  document.getElementById("edgar").pause();
  document.getElementById("Spice").pause();
  document.getElementById("MyMain").pause();
  document.getElementById("wisdom").pause();
  document.getElementById("mystic").pause();
  document.getElementById("peaches").pause();
  document.getElementById("lifelight").pause();
  document.getElementById("jesus").pause();
  document.getElementById("promise").pause();
}


