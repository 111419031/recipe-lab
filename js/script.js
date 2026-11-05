
/* =========================================
   食譜所 RECIPE LAB
   STEP 03：網站互動功能
========================================= */


/* =========================================
   01. 全域資料
========================================= */

// 已選取的主要食材
const selectedIngredients = new Set();

// 不喜歡的食材
const avoidedIngredients = new Set();

// 目前所在的分類索引
let currentCategoryIndex = 0;

// 分類滑動鎖定，避免一次滾輪跳過多個分類
let isScrolling = false;
// 滑鼠靜止提示功能
const scrollHint = document.querySelector("#scroll-hint");

let hintTimer = null;

// 頁面元素
const homePage = document.querySelector("#page-home");
const selectPage = document.querySelector("#page-select");
const resultPage = document.querySelector("#page-result");

const categoryTrack = document.querySelector("#category-track");
const categoryPanels = document.querySelectorAll(".category-panel");

const basketArea = document.querySelector("#shopping-basket-area");
const basketItems = document.querySelector("#basket-items");

const startButton = document.querySelector("#start-btn");
const confirmButton = document.querySelector("#confirm-selection-btn");

const categoryProgressText = document.querySelector(
    "#category-progress-text"
);


/* =========================================
   02. 頁面切換功能
========================================= */

// 切換到指定頁面
function showPage(page) {

    homePage.classList.remove("active");
    selectPage.classList.remove("active");
    resultPage.classList.remove("active");

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 首頁 START 按鈕
startButton.addEventListener("click", () => {

    showPage(selectPage);
    // 進入食材選取頁後開始計算滑鼠靜止時間
    hideScrollHint();
    scheduleScrollHint();

    // 回到第一個食材分類
    currentCategoryIndex = 0;

    categoryTrack.scrollTo({
        left: 0,
        behavior: "smooth"
    });

    updateCategoryProgress();

});


// 食材選取頁 NEXT 按鈕
confirmButton.addEventListener("click", () => {

    // 至少需要選擇一種主要食材
    if (selectedIngredients.size === 0) {

        alert("請先選擇至少一種主要食材！");

        return;
    }

    // 取得不喜歡的食材
    updateAvoidedIngredients();

    // 切換到結果頁
    showPage(resultPage);

    // 通知食譜推薦程式開始工作
    if (typeof window.startRecipeRecommendation === "function") {

        window.startRecipeRecommendation(
            Array.from(selectedIngredients),
            Array.from(avoidedIngredients)
        );

    } else {

        console.warn(
            "尚未載入食譜推薦功能，請確認 STEP 04 的 recipes.js。"
        );

    }

});


/* =========================================
   03. 水平分類滑動
========================================= */

/* =========================================
   滑鼠靜止提示控制
========================================= */

// 隱藏提示文字
function hideScrollHint() {

    if (!scrollHint) return;

    scrollHint.classList.remove("show");

    clearTimeout(hintTimer);

}


// 滑鼠靜止一段時間後顯示提示
function scheduleScrollHint() {

    if (!scrollHint) return;

    clearTimeout(hintTimer);

    hintTimer = setTimeout(() => {

        // 只有在食材選取頁顯示
        if (selectPage.classList.contains("active")) {

            scrollHint.classList.add("show");

        }

    }, 1000);

}


// 滑鼠移動時隱藏提示，重新計算靜止時間
selectPage.addEventListener("mousemove", () => {

    hideScrollHint();

    scheduleScrollHint();

});


// 滑鼠離開食材選取頁時隱藏提示
selectPage.addEventListener("mouseleave", () => {

    hideScrollHint();

});


// 滑鼠點擊時也先隱藏提示
selectPage.addEventListener("mousedown", () => {

    hideScrollHint();

    scheduleScrollHint();

});


// 使用滑鼠滾輪控制分類向右或向左移動
categoryTrack.addEventListener("wheel", (event) => {

    // 防止頁面上下捲動
    event.preventDefault();

    // 滾動時隱藏操作提示
    hideScrollHint();

    // 滾動停止一段時間後重新顯示
    scheduleScrollHint();

    // 避免動畫尚未完成時再次觸發
    if (isScrolling) {
        return;
    }

    // 判斷滾輪方向
    const direction =
        event.deltaY > 0 || event.deltaX > 0 ? 1 : -1;

    // 計算下一個分類
    const nextIndex = Math.max(
        0,
        Math.min(
            categoryPanels.length - 1,
            currentCategoryIndex + direction
        )
    );

    // 沒有移動需求就結束
    if (nextIndex === currentCategoryIndex) {
        return;
    }

    currentCategoryIndex = nextIndex;

    // 開始滑動鎖定
    isScrolling = true;

    // 移動到指定分類
    categoryTrack.scrollTo({
        left: categoryPanels[currentCategoryIndex].offsetLeft,
        behavior: "smooth"
    });

    // 更新分類進度
    updateCategoryProgress();

    // 動畫結束後解除鎖定
    setTimeout(() => {
        isScrolling = false;
    }, 850);

}, { passive: false });


// 更新分類進度文字
function updateCategoryProgress() {

    const currentNumber = String(
        currentCategoryIndex + 1
    ).padStart(2, "0");

    const totalNumber = String(
        categoryPanels.length
    ).padStart(2, "0");

    categoryProgressText.textContent =
        `${currentNumber} / ${totalNumber}`;

}


// 支援觸控板或其他方式造成的水平捲動
categoryTrack.addEventListener("scroll", () => {

    if (isScrolling) {
        return;
    }

    const panelWidth = categoryTrack.clientWidth;

    if (panelWidth === 0) {
        return;
    }

    currentCategoryIndex = Math.round(
        categoryTrack.scrollLeft / panelWidth
    );

    currentCategoryIndex = Math.max(
        0,
        Math.min(categoryPanels.length - 1, currentCategoryIndex)
    );

    updateCategoryProgress();

});


/* =========================================
   04. 購物籃位置
========================================= */

// 購物籃隨分類移動產生視覺上的位移
function updateBasketPosition() {

    if (!basketArea) {
        return;
    }

    const movement = Math.min(
        categoryTrack.scrollLeft * 0.12,
        100
    );

    basketArea.style.transform =
        `translateX(${movement}px)`;

}


// 監聽分類滑動
categoryTrack.addEventListener(
    "scroll",
    updateBasketPosition
);


/* =========================================
   05. 食材選取功能
========================================= */

// 取得所有食材卡片
const ingredientCards = document.querySelectorAll(
    ".ingredient-card"
);


// 為每張食材卡片加入點擊事件
ingredientCards.forEach((card) => {

    card.addEventListener("click", () => {

        const ingredientName = card.dataset.ingredient;

        // 如果已經選取，就取消選取
        if (selectedIngredients.has(ingredientName)) {

            removeIngredient(ingredientName);

        } else {

            addIngredient(card, ingredientName);

        }

    });

});


// 選取食材
function addIngredient(card, ingredientName) {

    // 加入已選清單
    selectedIngredients.add(ingredientName);

    // 卡片增加選取樣式
    card.classList.add("selected");

    // 執行飛入購物籃動畫
    animateIngredientToBasket(card);

}


// 移除食材
function removeIngredient(ingredientName) {

    selectedIngredients.delete(ingredientName);

    // 找到原本的食材卡片
    const originalCard = document.querySelector(
        `.ingredient-card[data-ingredient="${ingredientName}"]`
    );

    if (originalCard) {

        originalCard.classList.remove("selected");

    }

    // 移除購物籃中的食材
    const basketItem = basketItems.querySelector(
        `[data-ingredient="${ingredientName}"]`
    );

    if (basketItem) {

        basketItem.remove();

    }

}


/* =========================================
   06. 食材飛入購物籃動畫
========================================= */

function animateIngredientToBasket(card) {

    const image = card.querySelector("img");

    if (!image) {
        return;
    }

    // 取得食材原本的位置
    const startPosition = image.getBoundingClientRect();

    // 取得購物籃的位置
    const basketPosition = basketArea.getBoundingClientRect();

    // 建立飛行用圖片
    const flyingImage = document.createElement("img");

    flyingImage.src = image.src;
    flyingImage.alt = image.alt;

    flyingImage.classList.add("flying-ingredient");

    // 設定起始位置
    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${startPosition.left}px`;
    flyingImage.style.top = `${startPosition.top}px`;
    flyingImage.style.width = `${startPosition.width}px`;
    flyingImage.style.height = `${startPosition.height}px`;

    flyingImage.style.zIndex = "9999";
    flyingImage.style.pointerEvents = "none";

    document.body.appendChild(flyingImage);

    // 強制瀏覽器讀取初始位置
    flyingImage.getBoundingClientRect();

    // 計算終點位置
    const endX =
        basketPosition.left + basketPosition.width / 2;

    const endY =
        basketPosition.top + basketPosition.height / 2;

    // 開始移動與縮小
    flyingImage.style.transition =
        "all 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)";

    flyingImage.style.left = `${endX}px`;
    flyingImage.style.top = `${endY}px`;
    flyingImage.style.width = "25px";
    flyingImage.style.height = "25px";
    flyingImage.style.opacity = "0.4";

    // 動畫結束後移除飛行圖片
    flyingImage.addEventListener("transitionend", () => {

        flyingImage.remove();

        // 將食材正式放入購物籃
        createBasketItem(image, card.dataset.ingredient);

    }, { once: true });

}


// 建立購物籃中的食材
function createBasketItem(originalImage, ingredientName) {

    const basketItem = document.createElement("button");

    basketItem.type = "button";

    basketItem.classList.add("basket-item");

    basketItem.dataset.ingredient = ingredientName;

    basketItem.setAttribute(
        "aria-label",
        `移除${ingredientName}`
    );

    // 建立食材圖片
    const image = document.createElement("img");

    image.src = originalImage.src;
    image.alt = ingredientName;

    basketItem.appendChild(image);

    // 點擊購物籃中的食材即可移除
    basketItem.addEventListener("click", () => {

        removeIngredient(ingredientName);

    });

    basketItems.appendChild(basketItem);

}


/* =========================================
   07. 不喜歡的食材設定
========================================= */

const avoidOptions = document.querySelectorAll(
    ".avoid-option"
);


// 更新不喜歡的食材清單
function updateAvoidedIngredients() {

    avoidedIngredients.clear();

    avoidOptions.forEach((option) => {

        if (option.checked) {

            avoidedIngredients.add(option.value);

        }

    });

}


/* =========================================
   08. 食譜回饋按鈕
========================================= */

const feedbackButtons = document.querySelectorAll(
    ".feedback-btn"
);


// 使用者選擇喜歡或不喜歡後，隱藏兩個按鈕
feedbackButtons.forEach((button) => {

    button.addEventListener("click", () => {

        feedbackButtons.forEach((otherButton) => {

            otherButton.hidden = true;

        });

    });

});


// 每次顯示新食譜時，重新顯示反饋按鈕
window.resetRecipeFeedback = function () {

    feedbackButtons.forEach((button) => {

        button.hidden = false;

        button.classList.remove("active");

    });

};

/* =========================================
   09. 結果頁 NEXT / RESTART 按鈕
========================================= */

const recipeNextButton = document.querySelector(
    "#recipe-next-btn"
);

const recipeRestartButton = document.querySelector(
    "#recipe-restart-btn"
);


// NEXT：只負責切換下一道食譜
recipeNextButton.addEventListener("click", () => {

    if (typeof window.showNextRecipe === "function") {

        window.showNextRecipe();

    }

});


// RESTART：直接返回首頁
recipeRestartButton.addEventListener("click", () => {

    resetWebsite();

});


// 回首頁並重置網站
function resetWebsite() {

    // 清空食材選取資料
    selectedIngredients.clear();

    avoidedIngredients.clear();

    // 清除食材卡片選取狀態
    ingredientCards.forEach((card) => {

        card.classList.remove("selected");

    });

    // 清空購物籃
    basketItems.innerHTML = "";

    // 清除不喜歡的食材選項
    avoidOptions.forEach((option) => {

        option.checked = false;

    });

    // 清除回饋按鈕狀態
    feedbackButtons.forEach((button) => {

        button.hidden = false;

        button.classList.remove("active");

    });

    // 重設分類位置
    currentCategoryIndex = 0;

    categoryTrack.scrollTo({
        left: 0,
        behavior: "auto"
    });

    updateCategoryProgress();

    updateBasketPosition();

    // 重設 NEXT 按鈕
    recipeNextButton.hidden = false;

    // RESTART 始終可以使用
    recipeRestartButton.hidden = false;

    // 重設按鈕文字
    recipeNextButton.textContent = "NEXT";

    // 回到首頁
    showPage(homePage);

}


// 初始化
updateCategoryProgress();

updateBasketPosition();