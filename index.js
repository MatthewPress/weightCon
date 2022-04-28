// Establishing "prompt-sync" which allows user input
const promptsync = require('prompt-sync')();

/**
// Greeting
// Promptsync stores the users input into the variable "name"
var name = promptsync("What is your name?")
// Variable "name" now outputs the users input when "name" is called in "greeting"
var greeting = ("Hello" + " " + name + "!")
console.log(greeting)
*/

// Asking what weight the user has that they want to convert
var weightPrompt = promptsync("What weight do you have to convert?(lbs, kg, stone)")

/** Loop: A prompt will be returned if weight does not equal "lbs" "kg" and
"stone". This prompt is stored in weightPrompt so that is remains in the loop
and user inputs effect the loop */
while (weightPrompt != "lbs" && weightPrompt != "kg" && weightPrompt != "stone") {
  var weightPrompt = promptsync("Please enter 'lbs' 'kgs' or 'stone'")
}

// User has lbs
// Variable weightPrompt can be changed, but does not need to be changed yet
if (weightPrompt == "lbs") {
  var weightPrompt = promptsync("What weight would you like to convert to? (kg / stone)")

  while (weightPrompt != "kg" && weightPrompt != "stone"){
    var weightPrompt = promptsync("Please enter 'kg' or 'stone'")
  }

  if (weightPrompt == "kg"){
    var weightValue = promptsync("What weight in lbs would you like to convert to kg?")
    var lbs = parseInt(weightValue)
    var kg = lbs / 2.205
    console.log(kg)
  }

  else if (weightPrompt == "stone"){
    var weightValue = promptsync("What weight in lbs would you like to convert to stone?")
    var lbs = parseInt(weightValue)
    var stone = lbs / 14
    console.log(stone)
  }

  else {
    console.log("Please enter 'kg' or 'stone'")
  }
}

// User has kg
// Variable weightPrompt can be changed, but does not need to be changed yet
else if (weightPrompt == "kg") {
  var weightPrompt = promptsync("What weight would you like to convert to? (lbs / stone)")

  while (weightPrompt != "lbs" && weightPrompt != "stone"){
    var weightPrompt = promptsync("Please enter 'lbs' or 'stone'")
  }

  if (weightPrompt == "lbs"){
    var weightValue = promptsync("What weight in kg would you like to convert to lbs?")
    var kg = parseInt(weightValue)
    var lbs = kg / 2.205
    console.log(lbs)
  }

  else if (weightPrompt == "stone"){
    var weightValue = promptsync("What weight in kg would you like to convert to stone?")
    var kg = parseInt(weightValue)
    var stone = kg / 14
    console.log(stone)
  }

  else {
    console.log("Please enter 'lbs' or 'stone'")
  }
}

// User has stone
// Variable weightPrompt can be changed, but does not need to be changed yet
else if (weightPrompt == "stone") {
  var weightPrompt = promptsync("What weight would you like to convert to? (lbs / kg)")

  while (weightPrompt != "lbs" && weightPrompt != "kg"){
    var weightPrompt = promptsync("Please enter 'lbs' or 'kg'")
  }

  if (weightPrompt == "lbs"){
    var weightValue = promptsync("What weight in stone would you like to convert to lbs?")
    var stone = parseInt(weightValue)
    var lbs = stone / 2.205
    console.log(lbs)
  }

  else if (weightPrompt == "kg"){
    var weightValue = promptsync("What weight in stone would you like to convert to kg?")
    var stone = parseInt(weightValue)
    var kg = stone / 14
    console.log(kg)
  }

  else {
    console.log("Please enter 'lbs' or 'kg'")
  }
}

else {
  console.log("Please enter 'lbs' 'kg' or 'stone'")
}
