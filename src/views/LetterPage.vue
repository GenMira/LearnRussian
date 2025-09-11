<template>
  <div class="textCenterizer">
    <h1>Letter Page</h1>
    <p>ここには文字に関するコンテンツを表示します。</p>
  </div>
  <div>
    <div class="text-box">
      <h2>アルファベット</h2>
      <p>ロシア語の文字は<span color="red">キリル文字</span>と呼ばれています。</p>
      <div>tips</div>
      <!-- img -->
    </div>
    <div class="text-box">
      <h2>子音</h2>
    </div>
    <div class="text-box">
      <h2>母音</h2>
    </div>
    <div class="text-box">
      <h2>硬母音と軟母音</h2>
    </div>
    <div class="text-box">
      <h2>記号文字</h2>
    </div>
    <div class="text-box">
      <h2>アクセント</h2>
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