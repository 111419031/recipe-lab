
/* =========================================
   食譜所 RECIPE LAB
   STEP 04：食譜資料庫與推薦系統
========================================= */


/* =========================================
   01. 食譜資料庫
========================================= */

window.recipeDatabase = [

    {
        id: 1,
        name: "高麗菜豬肉炒飯",
        image: "img/recipes/1.jpg",
        description: "以白米搭配豬肉與清甜高麗菜，簡單炒出香氣十足的家常料理。",
        ingredients: ["白米", "豬肉", "高麗菜"],
        allIngredients: ["白米", "豬肉", "高麗菜", "雞蛋", "蒜", "醬油", "鹽", "胡椒"],
        steps: [
            "先將高麗菜洗淨切小片，豬肉切成適當大小。",
            "熱鍋後加入豬肉拌炒至熟。",
            "加入高麗菜與白米一起翻炒。",
            "加入醬油、鹽及胡椒調味，炒勻即可。",
        ]
    },

    {
        id: 2,
        name: "雞肉蔬菜炒麵",
        image: "img/recipes/2.jpg",
        description: "雞肉搭配多種蔬菜，讓簡單的炒麵也能有豐富口感。",
        ingredients: ["麵類", "雞肉", "高麗菜", "胡蘿蔔"],
        allIngredients: ["麵類", "雞肉", "高麗菜", "胡蘿蔔", "蒜", "醬油", "鹽"],
        steps: [
            "將麵條煮熟後瀝乾備用。",
            "雞肉切片，高麗菜洗淨切片。",
            "將雞肉放入鍋中炒熟，再加入蔬菜。",
            "放入麵條及調味料拌炒均勻即可。"
        ]
    },

    {
        id: 3,
        name: "番茄牛肉燴飯",
        image: "img/recipes/3.jpg",
        description: "牛肉與番茄燉煮出酸甜醬汁，搭配白飯十分適合。",
        ingredients: ["白米", "牛肉"],
        allIngredients: ["白米", "牛肉", "番茄", "洋蔥", "蒜", "鹽", "胡椒"],
        steps: [
            "牛肉切成適當大小，番茄及洋蔥切塊。",
            "將牛肉放入鍋中略炒。",
            "加入番茄及洋蔥，加水燉煮至牛肉軟嫩。",
            "調味後搭配白飯食用。"
        ]
    },

    {
        id: 4,
        name: "香煎雞腿排",
        image: "img/recipes/4.jpg",
        description: "外層煎至金黃、內部保持鮮嫩的簡單雞肉料理。",
        ingredients: ["雞肉"],
        allIngredients: ["雞肉", "蒜", "鹽", "黑胡椒", "食用油"],
        steps: [
            "雞肉擦乾水分。",
            "以鹽及黑胡椒調味。",
            "平底鍋加熱後放入雞肉。",
            "兩面煎熟並確認中心完全熟透即可。"
        ]
    },

    {
        id: 5,
        name: "鮭魚蔬菜炊飯",
        image: "img/recipes/5.jpg",
        description: "將魚肉與蔬菜搭配白米烹煮，呈現清爽的家常風味。",
        ingredients: ["白米", "魚肉", "胡蘿蔔"],
        allIngredients: ["白米", "魚肉", "胡蘿蔔", "香菇", "醬油", "鹽"],
        steps: [
            "白米洗淨，胡蘿蔔及香菇切小塊。",
            "魚肉處理乾淨並確認沒有魚刺。",
            "將白米、蔬菜及適量水放入電鍋。",
            "煮熟後放上魚肉蒸熟，再輕輕拌勻。"
        ]
    },

    {
        id: 6,
        name: "豆腐高麗菜湯",
        image: "img/recipes/6.jpg",
        description: "豆腐與高麗菜煮成清爽湯品，適合搭配日常餐點。",
        ingredients: ["豆腐", "高麗菜"],
        allIngredients: ["豆腐", "高麗菜", "鹽", "胡椒"],
        steps: [
            "高麗菜洗淨切片，豆腐切塊。",
            "鍋中加入適量清水煮滾。",
            "放入高麗菜煮至稍微軟化。",
            "加入豆腐及調味料，再煮數分鐘即可。"
        ]
    },

    {
        id: 7,
        name: "馬鈴薯泥雞肉沙拉",
        image: "img/recipes/7.jpg",
        description: "綿密馬鈴薯泥搭配雞肉，口感柔和且具有飽足感。",
        ingredients: ["馬鈴薯泥", "雞肉", "小黃瓜"],
        allIngredients: ["馬鈴薯泥", "雞肉", "小黃瓜", "雞蛋", "美乃滋", "鹽"],
        steps: [
            "將雞肉煮熟後撕成小塊。",
            "小黃瓜洗淨切丁。",
            "將馬鈴薯蒸熟後壓成泥。",
            "加入雞肉、小黃瓜及調味料拌勻。"
        ]
    },

    {
        id: 8,
        name: "青花菜牛肉炒麵",
        image: "img/recipes/8.jpg",
        description: "牛肉與青花菜搭配麵條，帶來豐富的口感。",
        ingredients: ["麵類", "牛肉", "青花菜"],
        allIngredients: ["麵類", "牛肉", "青花菜", "蒜", "醬油", "胡椒"],
        steps: [
            "麵條煮熟瀝乾，青花菜切成小朵。",
            "牛肉切片後放入鍋中炒熟。",
            "加入青花菜及少量水拌炒。",
            "加入麵條與調味料炒勻即可。"
        ]
    },

    {
        id: 9,
        name: "菠菜雞蛋炒飯",
        image: "img/recipes/9.jpg",
        description: "雞蛋與菠菜搭配白飯，快速完成簡單的一餐。",
        ingredients: ["白米", "雞蛋", "菠菜"],
        allIngredients: ["白米", "雞蛋", "菠菜", "鹽", "胡椒", "食用油"],
        steps: [
            "菠菜洗淨切段，雞蛋打散。",
            "熱鍋後倒入蛋液炒至半熟。",
            "加入白米及菠菜翻炒。",
            "以鹽和胡椒調味，炒熟即可。"
        ]
    },

    {
        id: 10,
        name: "白菜豆腐燉湯",
        image: "img/recipes/10.jpg",
        description: "白菜與豆腐一起燉煮，湯頭清甜且食材簡單。",
        ingredients: ["白菜", "豆腐"],
        allIngredients: ["白菜", "豆腐", "香菇", "鹽"],
        steps: [
            "白菜洗淨切段，豆腐切塊。",
            "鍋中加入清水及白菜。",
            "煮至白菜稍微軟化後加入豆腐。",
            "以鹽調味，再煮數分鐘即可。"
        ]
    },

    {
        id: 11,
        name: "豬肉小黃瓜炒飯",
        image: "img/recipes/11.jpg",
        description: "清脆小黃瓜搭配豬肉與白飯，呈現清爽的炒飯風味。",
        ingredients: ["白米", "豬肉", "小黃瓜"],
        allIngredients: ["白米", "豬肉", "小黃瓜", "雞蛋", "醬油", "鹽"],
        steps: [
            "豬肉切丁，小黃瓜切丁。",
            "熱鍋後將豬肉炒熟。",
            "加入白米及小黃瓜翻炒。",
            "加入調味料炒勻即可。"
        ]
    },

    {
        id: 12,
        name: "蒜香青花菜炒雞肉",
        image: "img/recipes/12.jpg",
        description: "雞肉搭配青花菜，以蒜香調味的家常料理。",
        ingredients: ["雞肉", "青花菜"],
        allIngredients: ["雞肉", "青花菜", "蒜", "鹽", "胡椒"],
        steps: [
            "雞肉切塊，青花菜切成小朵。",
            "將雞肉放入鍋中炒熟。",
            "加入蒜末及青花菜拌炒。",
            "加入少量水及調味料，煮至青花菜熟透。"
        ]
    },

    {
        id: 13,
        name: "魚肉菠菜湯麵",
        image: "img/recipes/13.jpg",
        description: "魚肉與菠菜加入麵湯中，適合喜歡清爽湯麵的人。",
        ingredients: ["麵類", "魚肉", "菠菜"],
        allIngredients: ["麵類", "魚肉", "菠菜", "薑", "鹽"],
        steps: [
            "麵條煮熟備用。",
            "魚肉確認沒有魚刺，菠菜洗淨。",
            "鍋中加入清水及薑片煮滾。",
            "放入魚肉與菠菜煮熟，再加入麵條。"
        ]
    },

    {
        id: 14,
        name: "牛肉馬鈴薯泥",
        image: "img/recipes/14.jpg",
        description: "以馬鈴薯泥搭配香煎牛肉，簡單又有飽足感。",
        ingredients: ["馬鈴薯泥", "牛肉"],
        allIngredients: ["馬鈴薯泥", "牛肉", "洋蔥", "鹽", "黑胡椒"],
        steps: [
            "牛肉切成適當大小。",
            "平底鍋加熱後將牛肉煎熟。",
            "馬鈴薯蒸熟後壓成泥。",
            "將牛肉與馬鈴薯泥一起盛盤。"
        ]
    },

    {
        id: 15,
        name: "豆腐蔬菜炒穀物",
        image: "img/recipes/15.jpg",
        description: "以穀物搭配豆腐與蔬菜，帶來不同於白飯的口感。",
        ingredients: ["穀物", "豆腐", "高麗菜"],
        allIngredients: ["穀物", "豆腐", "高麗菜", "胡蘿蔔", "醬油"],
        steps: [
            "穀物依包裝說明煮熟。",
            "豆腐切丁，高麗菜切片。",
            "將豆腐煎至表面微黃。",
            "加入蔬菜及穀物拌炒並調味。"
        ]
    },

    {
        id: 16,
        name: "雞肉白菜燴飯",
        image: "img/recipes/16.jpg",
        description: "雞肉與白菜燉煮成清甜醬汁，再搭配白飯。",
        ingredients: ["白米", "雞肉", "白菜"],
        allIngredients: ["白米", "雞肉", "白菜", "胡蘿蔔", "鹽", "胡椒"],
        steps: [
            "雞肉切塊，白菜洗淨切段。",
            "將雞肉炒至表面變色。",
            "加入白菜及胡蘿蔔，加水燉煮。",
            "食材熟透後搭配白飯食用。"
        ]
    },

    {
        id: 17,
        name: "豬肉菠菜麵",
        image: "img/recipes/17.jpg",
        description: "豬肉與菠菜搭配麵條，製作方便的家常麵食。",
        ingredients: ["麵類", "豬肉", "菠菜"],
        allIngredients: ["麵類", "豬肉", "菠菜", "蒜", "醬油", "鹽"],
        steps: [
            "麵條煮熟後瀝乾。",
            "豬肉切片，菠菜洗淨。",
            "將豬肉炒熟後加入菠菜。",
            "加入麵條與調味料拌炒即可。"
        ]
    },

    {
        id: 18,
        name: "青花菜豆腐穀物碗",
        image: "img/recipes/18.jpg",
        description: "穀物搭配豆腐與青花菜，簡單組合成一份餐碗。",
        ingredients: ["穀物", "豆腐", "青花菜"],
        allIngredients: ["穀物", "豆腐", "青花菜", "醬油", "鹽"],
        steps: [
            "穀物煮熟備用。",
            "青花菜切小朵並煮熟。",
            "豆腐切塊後煎至表面微黃。",
            "將全部食材放入碗中即可。"
        ]
    },

    {
        id: 19,
        name: "小黃瓜雞蛋麵",
        image: "img/recipes/19.jpg",
        description: "以雞蛋和小黃瓜搭配麵條，清爽簡單。",
        ingredients: ["麵類", "雞蛋", "小黃瓜"],
        allIngredients: ["麵類", "雞蛋", "小黃瓜", "醬油", "鹽"],
        steps: [
            "麵條煮熟後瀝乾。",
            "雞蛋煎熟，小黃瓜切絲。",
            "將麵條與雞蛋放入碗中。",
            "加入小黃瓜及調味料拌勻。"
        ]
    },

    {
        id: 20,
        name: "空心菜牛肉炒飯",
        image: "img/recipes/20.jpg",
        description: "牛肉搭配空心菜與白飯，簡單完成一份炒飯。",
        ingredients: ["白米", "牛肉", "空心菜"],
        allIngredients: ["白米", "牛肉", "空心菜", "蒜", "醬油", "鹽"],
        steps: [
            "空心菜洗淨切段，牛肉切片。",
            "先將牛肉炒熟。",
            "加入空心菜及白米翻炒。",
            "加入調味料拌勻即可。"
        ]
    },

    {
        id: 21,
        name: "雞肉高麗菜湯麵",
        image: "img/recipes/21.jpg",
        description: "雞肉與高麗菜加入麵湯，製作溫暖的家常湯麵。",
        ingredients: ["麵類", "雞肉", "高麗菜"],
        allIngredients: ["麵類", "雞肉", "高麗菜", "薑", "鹽"],
        steps: [
            "雞肉切塊，高麗菜洗淨切片。",
            "鍋中加入清水及雞肉煮熟。",
            "加入高麗菜煮至軟化。",
            "放入煮熟的麵條並調味。"
        ]
    },

    {
        id: 22,
        name: "魚肉青花菜餐碗",
        image: "img/recipes/22.jpg",
        description: "魚肉搭配青花菜與穀物，呈現簡單清爽的餐點。",
        ingredients: ["穀物", "魚肉", "青花菜"],
        allIngredients: ["穀物", "魚肉", "青花菜", "鹽", "黑胡椒"],
        steps: [
            "穀物依照包裝說明煮熟。",
            "青花菜切小朵並煮熟。",
            "魚肉煎熟並確認沒有魚刺。",
            "將所有食材放入碗中即可。"
        ]
    },

    {
        id: 23,
        name: "豬肉白菜燴麵",
        image: "img/recipes/23.jpg",
        description: "豬肉與白菜搭配麵條，簡單又有飽足感。",
        ingredients: ["麵類", "豬肉", "白菜"],
        allIngredients: ["麵類", "豬肉", "白菜", "香菇", "醬油", "鹽"],
        steps: [
            "麵條煮熟後瀝乾。",
            "豬肉切片，白菜洗淨切段。",
            "將豬肉炒熟後加入白菜。",
            "加入麵條及調味料拌炒即可。"
        ]
    },

    {
        id: 24,
        name: "馬鈴薯泥蔬菜餐碗",
        image: "img/recipes/24.jpg",
        description: "馬鈴薯泥搭配多種蔬菜，呈現簡單的蔬食餐點。",
        ingredients: ["馬鈴薯泥", "青花菜", "小黃瓜"],
        allIngredients: ["馬鈴薯泥", "青花菜", "小黃瓜", "雞蛋", "鹽"],
        steps: [
            "青花菜洗淨切小朵並煮熟。",
            "小黃瓜洗淨切片。",
            "馬鈴薯蒸熟後壓成泥。",
            "將所有食材盛入碗中即可。"
        ]
    }

];


/* =========================================
   02. 推薦系統
========================================= */

// 儲存目前符合條件的食譜
let recommendedRecipes = [];

// 目前瀏覽到第幾道食譜
let currentRecipeIndex = 0;


// 開始推薦食譜
window.startRecipeRecommendation = function (
    selectedList,
    avoidedList
) {

    const selected = [...selectedList];
    const avoided = [...avoidedList];

    currentRecipeIndex = 0;
    // 重新播放發票落下動畫
const receipt = document.querySelector(".receipt");

if (receipt) {

    receipt.classList.remove("receipt-enter");

    // 強制瀏覽器重新計算版面，讓動畫可以再次播放
    void receipt.offsetWidth;

    receipt.classList.add("receipt-enter");

}

    // 清除舊推薦
    recommendedRecipes = [];

    // 篩選掉含有不喜歡食材的料理
    const availableRecipes = window.recipeDatabase.filter(
        (recipe) => {

            const allIngredients = recipe.allIngredients || [];

            return !avoided.some((ingredient) =>
                allIngredients.includes(ingredient)
            );

        }
    );


    // 第一階段：找出完全符合的食譜
    const fullMatchRecipes = availableRecipes.filter(
        (recipe) => {

            return selected.every((ingredient) =>
                recipe.ingredients.includes(ingredient)
            );

        }
    );


    if (fullMatchRecipes.length > 0) {

        // 有完整符合的食譜時，只推薦完整符合的結果
        recommendedRecipes = fullMatchRecipes;

    } else {

        // 第二階段：找出部分符合的食譜
        const partialMatchRecipes = availableRecipes
            .map((recipe) => {

                const matchedIngredients = selected.filter(
                    (ingredient) =>
                        recipe.ingredients.includes(ingredient)
                );

                const missingIngredients = selected.filter(
                    (ingredient) =>
                        !recipe.ingredients.includes(ingredient)
                );

                return {
                    ...recipe,
                    matchedIngredients,
                    missingIngredients,
                    matchCount: matchedIngredients.length,
                    matchRate:
                        matchedIngredients.length / selected.length
                };

            })
            .filter((recipe) => recipe.matchCount > 0)
            .sort((a, b) => {

                // 優先顯示符合食材數量較多的料理
                return b.matchCount - a.matchCount;

            });

        recommendedRecipes = partialMatchRecipes;

    }

    // 最多只保留前三道推薦食譜
    recommendedRecipes = recommendedRecipes.slice(0, 3);

    // 顯示使用者選取的食材
    renderSelectedIngredients(selected);

    // 顯示第一道食譜
    if (recommendedRecipes.length > 0) {

        renderRecipe(0);

    } else {

        renderNoRecipe();

    }

};


/* =========================================
   03. 顯示已選食材
========================================= */

function renderSelectedIngredients(selected) {

    const container = document.querySelector(
        "#result-ingredients"
    );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    selected.forEach((ingredient) => {

        const item = document.createElement("li");

        item.textContent = ingredient;

        container.appendChild(item);

    });

}


/* =========================================
   04. 顯示食譜內容
========================================= */

function renderRecipe(index) {

    const recipe = recommendedRecipes[index];

    if (!recipe) {
        return;
    }

    currentRecipeIndex = index;
    // 每次顯示新食譜，都重新顯示反饋按鈕
if (typeof window.resetRecipeFeedback === "function") {

    window.resetRecipeFeedback();

}

    const recipeNumber = document.querySelector("#recipe-number");
    const recipeName = document.querySelector("#recipe-name");
    const recipeImage = document.querySelector("#recipe-image");
    const recipeDescription = document.querySelector("#recipe-description");

    const recipeIngredients = document.querySelector("#recipe-ingredients");
    const recipeSteps = document.querySelector("#recipe-steps-list");

    const matchInformation = document.querySelector("#match-information");

    // 食譜編號
    recipeNumber.textContent =
        `${index + 1} / ${recommendedRecipes.length}`;

    // 食譜名稱
    recipeName.textContent = recipe.name;

    // 食譜圖片
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;

    // 如果圖片不存在，使用預設圖片
    recipeImage.onerror = function () {

        this.onerror = null;
        this.src = "img/ui/recipe-placeholder.png";

    };

    // 食譜介紹
    recipeDescription.textContent = recipe.description;

    // 食譜食材
    recipeIngredients.innerHTML = "";

    recipe.allIngredients.forEach((ingredient) => {

        const item = document.createElement("li");

        item.textContent = ingredient;

        recipeIngredients.appendChild(item);

    });

    // 料理步驟
    recipeSteps.innerHTML = "";

    recipe.steps.forEach((step) => {

        const item = document.createElement("li");

        item.textContent = step;

        recipeSteps.appendChild(item);

    });


    // 完整符合或部分符合提示
    if (recipe.missingIngredients) {

        matchInformation.textContent =
            `部分符合：使用了 ${recipe.matchCount} / ${recipe.matchedIngredients.length + recipe.missingIngredients.length} 項已選食材。未使用的食材：${recipe.missingIngredients.join("、")}。`;

    } else {

        matchInformation.textContent =
            "完整符合！這道料理包含你選取的全部主要食材。";

    }


    // 更新 NEXT 按鈕
    const nextButton = document.querySelector(
        "#recipe-next-btn"
    );

    // 只有還有下一道食譜時才顯示 NEXT
    nextButton.textContent = "NEXT";

    nextButton.hidden =
      index >= recommendedRecipes.length - 1;

    // RESTART 按鈕保持顯示
    const restartButton = document.querySelector(
        "#recipe-restart-btn"
    );

restartButton.hidden = false;

}


/* =========================================
   05. 沒有符合的食譜
========================================= */

function renderNoRecipe() {

    document.querySelector("#recipe-number").textContent = "0 / 0";

    document.querySelector("#recipe-name").textContent =
        "目前找不到適合的食譜";

    document.querySelector("#recipe-image").src =
        "img/ui/recipe-placeholder.png";

    document.querySelector("#recipe-description").textContent =
        "目前沒有符合條件的料理，可能是選取的食材組合較少見，或排除條件過多。";

    document.querySelector("#recipe-ingredients").innerHTML = "";

    document.querySelector("#recipe-steps-list").innerHTML = "";

    document.querySelector("#match-information").textContent =
        "可以返回首頁重新選取食材。";

    const nextButton = document.querySelector(
     "#recipe-next-btn"
    );

    // 沒有食譜時，不顯示 NEXT
    nextButton.hidden = true;

    // RESTART 仍然可以返回首頁
    const restartButton = document.querySelector(
       "#recipe-restart-btn"
    );

    restartButton.hidden = false;

}


/* =========================================
   06. 下一道食譜
========================================= */

window.showNextRecipe = function () {

    const nextIndex = currentRecipeIndex + 1;

    // 還有下一道食譜
    if (nextIndex < recommendedRecipes.length) {

        renderRecipe(nextIndex);

        return true;

    }

    // 所有食譜都已瀏覽完畢
    return false;

};
