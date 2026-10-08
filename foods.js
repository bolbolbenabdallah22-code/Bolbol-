// =====================================
// COACH BILEL - FOOD DATABASE
// Nutrition values per 100g
// =====================================

const foods = {

    // =========================
    // PROTEINS
    // =========================

    chickenBreast: {
        name: "Chicken Breast",
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 3.6
    },

    tuna: {
        name: "Tuna",
        calories: 116,
        protein: 26,
        carbs: 0,
        fats: 1
    },

    leanBeef: {
        name: "Lean Beef",
        calories: 170,
        protein: 26,
        carbs: 0,
        fats: 7
    },

    salmon: {
        name: "Salmon",
        calories: 208,
        protein: 20,
        carbs: 0,
        fats: 13
    },

    eggs: {
        name: "Eggs",
        calories: 143,
        protein: 12.6,
        carbs: 0.7,
        fats: 9.5
    },


    // =========================
    // CARBOHYDRATES
    // =========================

    riceRaw: {
        name: "Rice - Raw",
        calories: 360,
        protein: 7,
        carbs: 78,
        fats: 0.7
    },

    oats: {
        name: "Oats",
        calories: 389,
        protein: 16.9,
        carbs: 66.3,
        fats: 6.9
    },

    potato: {
        name: "Potato",
        calories: 77,
        protein: 2,
        carbs: 17,
        fats: 0.1
    },

    sweetPotato: {
        name: "Sweet Potato",
        calories: 86,
        protein: 1.6,
        carbs: 20,
        fats: 0.1
    },

    wholeWheatBread: {
        name: "Whole Wheat Bread",
        calories: 247,
        protein: 13,
        carbs: 41,
        fats: 4.2
    },


    // =========================
    // FRUITS
    // =========================

    banana: {
        name: "Banana",
        calories: 89,
        protein: 1.1,
        carbs: 23,
        fats: 0.3
    },

    apple: {
        name: "Apple",
        calories: 52,
        protein: 0.3,
        carbs: 14,
        fats: 0.2
    },

    orange: {
        name: "Orange",
        calories: 47,
        protein: 0.9,
        carbs: 12,
        fats: 0.1
    },


    // =========================
    // DAIRY
    // =========================

    greekYogurt: {
        name: "Greek Yogurt",
        calories: 73,
        protein: 10,
        carbs: 3.9,
        fats: 2
    },

    milk: {
        name: "Milk",
        calories: 61,
        protein: 3.2,
        carbs: 4.8,
        fats: 3.3
    },


    // =========================
    // HEALTHY FATS
    // =========================

    almonds: {
        name: "Almonds",
        calories: 579,
        protein: 21.2,
        carbs: 21.6,
        fats: 49.9
    },

    avocado: {
        name: "Avocado",
        calories: 160,
        protein: 2,
        carbs: 8.5,
        fats: 14.7
    },

    oliveOil: {
        name: "Olive Oil",
        calories: 884,
        protein: 0,
        carbs: 0,
        fats: 100
    },


    // =========================
    // VEGETABLES
    // =========================

    vegetables: {
        name: "Mixed Vegetables",
        calories: 35,
        protein: 2,
        carbs: 7,
        fats: 0.3
    },

    broccoli: {
        name: "Broccoli",
        calories: 34,
        protein: 2.8,
        carbs: 6.6,
        fats: 0.4
    },

    tomato: {
        name: "Tomato",
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fats: 0.2
    },

    cucumber: {
        name: "Cucumber",
        calories: 15,
        protein: 0.7,
        carbs: 3.6,
        fats: 0.1
    }

};


// =====================================
// CALCULATE FOOD NUTRITION
// =====================================

function calculateFood(food, grams) {

    return {

        calories:
            food.calories *
            grams /
            100,

        protein:
            food.protein *
            grams /
            100,

        carbs:
            food.carbs *
            grams /
            100,

        fats:
            food.fats *
            grams /
            100

    };

}


// =====================================
// ROUND NUMBER
// =====================================

function roundNutrition(value) {

    return Math.round(
        value * 10
    ) / 10;

      }
