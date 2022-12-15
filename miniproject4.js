function Allscore(sumscore, element) {
  if (sumscore < 40) {
    element.value = "F";
  } else if (sumscore >= 40 && sumscore <= 45) {
    parseFloat((element.value = "E"));
  } else if (sumscore > 45 && sumscore <= 49) {
    parseFloat((element.value = "D"));
  } else if (sumscore >= 50 && sumscore <= 59) {
    parseFloat((element.value = "C"));
  } else if (sumscore >= 60 && sumscore <= 69) {
    parseFloat((element.value = "B"));
  } else if (sumscore > 69 && sumscore <= 100) {
    parseFloat((element.value = "A"));
  } else if (sumscore > 100 || sumscore == "" || isNaN(sumscore)) {
    parseFloat((element.value = "invalid input"));
  }
  return sumscore;
}

function totalScore() {
  var total = 0;

  math = parseFloat(document.getElementById("mathScore").value);
  if (math <= 100) {
    total = Number(math) + total1;
  } else {
    math = 0;
  }

  chem = parseFloat(document.getElementById("chemistryScore").value);
  if (chem <= 100) {
    total = Number(chem) + total1;
  } else {
    chem = 0;
  }
  bio = parseFloat(document.getElementById("biologyScore").value);
  if (bio <= 100) {
    total = Number(bio) + total1;
  } else {
    bio = 0;
  }
  frch = parseFloat(document.getElementById("frenchScore").value);

  if (frch <= 100) {
    total = Number(frch) + total1;
  } else {
    frch = 0;
  }

  eng = parseFloat(document.getElementById("englishScore").value);
  if (eng <= 100) {
    total1 = Number(eng) + total1;
  } else {
    eng = 0;
  }

  total1 =
    parseFloat(eng) +
    parseFloat(math) +
    parseFloat(chem) +
    parseFloat(bio) +
    parseFloat(frch);

    document.getElementById("total1").innerHTML = total1;

  var average = total1 / 5;
  document.getElementById("average1").innerHTML = average;

  if (average > 50) {
    document.getElementById("remarks").innerHTML =
      "<p class= alert-success style=font-size:20px> Welldone! <p>";
  } if (average <= 50) {
    document.getElementById("remarks").innerHTML =
      "<p class= alert-warning > You can do better!<p>";
  } if(average==''){
    document.getElementById("remarks").innerHTML =
    "<p class= alert-danger >invalid input<p>";
  }

  return average;
}
