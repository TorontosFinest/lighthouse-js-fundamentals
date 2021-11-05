const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let counter=0;
while(counter<ingredients.length){
    console.log(ingredients[counter])
    counter++;
}

for(let ingredient of ingredients){
    console.log(ingredient);
}

for(let x=ingredients.length-1;x>=0;x--){
    console.log(ingredients[x]);
}
