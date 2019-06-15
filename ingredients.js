const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (var w = 0; w < ingredients.length; w++) {
  console.log(ingredients[w]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var d = ingredients.length; d >= 0; d--) {
  console.log(ingredients[d]);
}
