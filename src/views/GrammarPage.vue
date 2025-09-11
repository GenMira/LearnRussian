<template>
  <div class="textCenterizer">
    <h1>Grammar Page</h1>
    <p>ここには文法に関するコンテンツを表示します。</p>
  </div>
  <div>
    <div class="text-box">
      <h2>肯定文</h2>
    </div>
    <div class="text-box">
      <h2>疑問文</h2>
    </div>
    <div class="text-box">
      <h2>名詞の性と数</h2>
    </div>
    <div class="text-box">
      <h2>ざっくりと格変化</h2>
    </div>
    <div class="text-box">
      <h2>現在形</h2>
    </div>
    <div class="text-box">
      <h2>過去形</h2>
    </div>
    <div class="text-box">
      <h2>未来形</h2>
    </div>
    <div class="text-box">
      <h2>格変化</h2>
    </div>
  </div>
</template>

<style scoped>
.textCenterizer{
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 10vh;
}

.text-box {
  width: 65%;              /* 横幅を画面の70%に設定 */
  margin: 2rem auto;       /* 左右中央揃え、上下に余白 */
  padding: 1.5rem;         /* 内側の余白 */
  background-color: #f9f9f9; /* 背景色（任意） */
  border-radius: 10px;     /* 角を丸める */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 影をつける（任意） */
  text-align: left;        /* テキストは左揃え（変更可能） */
  line-height: 1.6;        /* 行間を広げて読みやすく */
}
</style>