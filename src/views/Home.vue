<template>
  <div class="introduction">
    <p>
      初学者向けのロシア語学習サイトです。
    </p>
    <p>
      ロシア語はただでさえ学習資料が少ないので、これがあなたのロシア語学習の手助けになりますように。
    </p>
  </div>
  <div class="buttons">
    <div class="button-grid">
      <router-link to="/LearnRussian/letter"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">Letter</span>
      </router-link>

      <router-link to="/LearnRussian/grammar" class="category-button">
        <!-- <img src="/src/assets/grammar.jpg" alt="Grammar" class="button-image" /> -->
        <span class="button-text">Grammar</span>
      </router-link>

      <router-link to="/LearnRussian/declension" class="category-button">
        <!-- <img src="/src/assets/vocabulary.jpg" alt="Vocabulary" class="button-image" /> -->
        <span class="button-text">Declension</span>
      </router-link>
    </div>
    <div class="button-grid">
      <router-link to="/LearnRussian/vocabulary"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">Vocabulary</span>
      </router-link>
    </div>
  </div>
</template>


<style scoped>

.introduction{
  margin-top: 10vh;
  text-align: center;

}
</style>