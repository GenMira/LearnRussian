<template>
  <div class="textCenterizer">
    <h1>Список Слов</h1>
    <p>ここにはよく使う語彙をまとめます</p>
  </div>
  <div class="buttons">
    <div class="button-grid">
      <router-link to="/LearnRussian/vocabulary/noun"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">名詞</span>
      </router-link>

      <router-link to="/LearnRussian/vocabulary/verb" class="category-button">
        <!-- <img src="/src/assets/grammar.jpg" alt="Grammar" class="button-image" /> -->
        <span class="button-text">動詞</span>
      </router-link>

      <router-link to="/LearnRussian/vocabulary/adjective" class="category-button">
        <!-- <img src="/src/assets/vocabulary.jpg" alt="Vocabulary" class="button-image" /> -->
        <span class="button-text">形容詞</span>
      </router-link>
    </div>
    <div class="button-grid">
      <router-link to="/LearnRussian/vocabulary/preposition"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">前置詞</span>
      </router-link>

      <router-link to="/LearnRussian/vocabulary/pronoun"class="category-button">
        <!-- <img src="/src/assets/letter.jpg" alt="Letter" class="button-image" /> -->
        <span class="button-text">代名詞、疑問詞</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>