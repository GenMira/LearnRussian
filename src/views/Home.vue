<template>
  <div class="introduction">
    <p>
      初学者向けのロシア語学習サイトです
      ロシア語はただでさえ学習資料が少ないので、これがあなたのロシア語学習の手助けになりますように
    </p>
  </div>
  <div class="buttons">
    <div class="button-grid">
      <router-link to="/letter"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">Letter</span>
      </router-link>

      <router-link to="/grammar" class="category-button">
        <!-- <img src="/src/assets/grammar.jpg" alt="Grammar" class="button-image" /> -->
        <span class="button-text">Grammar</span>
      </router-link>

      <router-link to="/declension" class="category-button">
        <!-- <img src="/src/assets/vocabulary.jpg" alt="Vocabulary" class="button-image" /> -->
        <span class="button-text">Declension</span>
      </router-link>
    </div>
    <div class="button-grid">
      <router-link to="/vocabulary"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">Vocabulary</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

.introduction{
  margin-top: 10vh;

}

.buttons{
  /* height: 100vh;             画面全体の高さに中央配置 */
  margin-top: 20vh;
}

.button-grid {
  display: flex;
  gap: 2rem;                 /* ボタン間の間隔 */
  justify-content: center;   /* 中央寄せ */
  align-items: center;
  margin-bottom: 5vh;

}

.category-button {
  width: 200px;              /* 正方形の大きさ */
  height: 200px;
  display: flex;
  flex-direction: column;    /* 画像と文字を縦並び */
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* 背景色 */
  border-radius: 12px;       /* 角丸 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* ホバー時のエフェクト */
.category-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

.button-image {
  width: 80%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.button-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

a {
  text-decoration: none;
}
</style>