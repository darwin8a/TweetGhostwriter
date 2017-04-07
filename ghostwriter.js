function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Truthfully speaking, ", "Sometimes ","Listen, listen,  ", "Let me tell you something,"];
  var body = [" the bridges you burn ", " spending enough time in the dark ", " understanding yourself ", " chasing glory ", " trying to understand the past "];
  var end = ["will light your way.","can leave you stranded forever."];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence += body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence += end[randIndex];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}

var intro = ["What do you call ", "Is it just me or is","Listen, listen,  ", "Let me tell you somethin"];
var body = ["a sleeping nun", " a green frog ", " black toms ", "a bee", "the girl on the couch"];
var end = ["a roamin' catholic","sits on it's behind"];
