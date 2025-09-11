<script setup>
// import HelloWorld from './templates/HelloWorld.vue'
// import TheWelcome from './templates/TheWelcome.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <div>
    <header class="header">
      <div class="header-left">
        <h1 class="header-title">genMiraのロシア語ノート</h1>
      </div>
      <div class="header-right">
        <router-link to="/" class="home-link">
          <img src="/src/assets/new_asset/pics/home_icon.png" alt="Home" class="home-icon" />
          <span class="home-text">HOME</span>
        </router-link>
      </div>
    </header>
    <main>
      <!-- ページごとの内容がここに表示される -->
      <router-view />
    </main>
  </div>


</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

.header {
  position: fixed;       /* 画面の最上部に固定 */
  top: 0;                /* 上端に配置 */
  left: 0;               /* 左端に配置 */
  width: 100%;           /* 横幅いっぱいに広げる */
  z-index: 1000;         /* 他の要素より前面に表示 */
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 4rem;
  gap: 2rem;
  flex-wrap: wrap;               /* 狭い画面で折り返し */
  background-color: #FEE9C0;      /* 任意：背景色 */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* optional：少し影をつける */

}

.header-left {
  display: flex;
  justify-content: flex-start;    /* タイトルは左寄せ */
  flex: 1;                        /* 左側を広げて中央寄せっぽく */
}

.header-title {
  margin: 0;
  font-size: 2rem;
  margin-left: 1rem;
}

.header-right {
  display: flex;      /* ここが必須 */
  align-items: center;
  gap: 1rem;          /* 間隔を広げたい */
}

.home-link {
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  text-decoration: none;
  color: inherit;
  margin-right: 1rem;
}

.home-icon {
  width: 24px;
  height: 24px;
  display: inline-block;  /* ブロックではなくインラインに */
}

main {
  padding-top: 80px;  /* ヘッダーの高さ分余白を空ける */
}

/* レスポンシブ対応 */
@media (max-width: 600px) {
  .header {
    flex-direction: column;       /* 縦並びに変更 */
    padding: 1rem 2rem;           /* 左右余白少し減らす */
    align-items: center;
  }

  .header-left {
    justify-content: center;      /* タイトル中央 */
  }

  .header-right {
    margin-top: 0.5rem;           /* タイトルとの間隔 */
  }
}



</style>
