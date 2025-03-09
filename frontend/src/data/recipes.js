// recipes.js
import sushiImage from './Tuna-Sushi-Rolls.jpg';
import blueberryImage from './blueberry.jpeg';
import margheritaImage from './Classic-Margherita-Pizza-with-Whole-Wheat-Pizza-Crust.jpg';
import salmonImage from './Grilled salomon.jpeg';
import lavaCakeImage from './Chocolate-Lava-Cake-Recipe.jpg';

export const recipes = [
  {
    id: 1,
    name: "Sushi Rolls",
    image: sushiImage,
    instructions: ["Rice", "Nori", "Salmon", "Avocado", "Soy Sauce"],
    ingredients: [
      "Rinse sushi rice and cook according to package instructions.",
      "Season the rice with rice vinegar, sugar, and salt. Let it cool.",
      "Place a nori sheet on a bamboo mat and spread rice evenly.",
      "Add sliced salmon and avocado.",
      "Use the mat to roll the sushi tightly.",
      "Slice into bite-sized pieces and serve with soy sauce and wasabi."
    ]
  },
  {
    id: 2,
    name: "Blueberry Pancakes",
    image: blueberryImage,
    instructions: ["Flour", "Milk", "Eggs", "Blueberries", "Maple Syrup"],
    ingredients: [
      "In a bowl, mix flour, milk, and eggs into a smooth batter.",
      "Let the batter rest for 10 minutes.",
      "Heat a pan over medium heat and add a little butter.",
      "Pour a ladle of batter into the pan.",
      "Sprinkle fresh blueberries on top before flipping.",
      "Cook until golden brown on both sides.",
      "Serve hot with maple syrup and extra blueberries."
    ]
  },
  {
    id: 3,
    name: "Margherita Pizza",
    image: margheritaImage,
    instructions: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
    ingredients: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough on a floured surface.",
      "Spread a thin layer of tomato sauce evenly.",
      "Tear fresh mozzarella and place it over the sauce.",
      "Add fresh basil leaves on top.",
      "Drizzle with olive oil and season with salt.",
      "Bake in the oven for 10-15 minutes until cheese is bubbly.",
      "Slice and serve immediately."
    ]
  },
  {
    id: 4,
    name: "Grilled Salmon with Vegetables",
    image: salmonImage,
    instructions: ["Salmon Fillet", "Olive Oil", "Lemon", "Garlic", "Mixed Vegetables"],
    ingredients: [
      "Pat salmon fillet dry and season with salt, pepper, and garlic.",
      "Drizzle olive oil and squeeze fresh lemon juice over it.",
      "Preheat grill to medium-high heat.",
      "Grill salmon skin-side down for 5-7 minutes.",
      "Flip and grill for another 5 minutes until cooked through.",
      "Meanwhile, sauté mixed vegetables in olive oil with garlic.",
      "Serve grilled salmon with vegetables on the side."
    ]
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    image: lavaCakeImage,
    instructions: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    ingredients: [
      "Preheat oven to 375°F (190°C) and grease ramekins.",
      "Melt dark chocolate and butter in a heatproof bowl.",
      "Whisk eggs and sugar until light and fluffy.",
      "Gently fold in melted chocolate mixture.",
      "Sift in flour and stir until just combined.",
      "Pour batter into ramekins and bake for 10-12 minutes.",
      "Let cool slightly before serving to allow the center to stay gooey.",
      "Dust with powdered sugar and serve with vanilla ice cream."
    ]
  }
];
