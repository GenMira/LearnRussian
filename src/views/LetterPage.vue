<template>
  <div class="textCenterizer">
    <h1>Letter Page</h1>
    <p>ここには文字に関するコンテンツを表示します。</p>
  </div>
  <div>
    <div class="text-box">
      <h2>キリル文字</h2>
      <p>ロシア語の文字は<span style="color: red">キリル文字</span>と呼ばれていて、全部で33文字(母音文字10、子音文字21、記号文字2)あります。
      </p>
      <br>
      <table class="center-table">
        <thead>
          <tr>
            <th>文字 (大文字 小文字)</th>
            <th>名称 </th>
            <th>音価 (発音の目安)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>А а</td><td>アー</td><td>a</td></tr>
          <tr><td>Б б</td><td>ベー</td><td>b</td></tr>
          <tr><td>В в</td><td>ヴェー</td><td>v</td></tr>
          <tr><td>Г г</td><td>ゲー</td><td>g</td></tr>
          <tr><td>Д д</td><td>デー</td><td>d</td></tr>
          <tr><td>Е е</td><td>イェー</td><td>ye / e</td></tr>
          <tr><td>Ё ё</td><td>ヨー</td><td>yo</td></tr>
          <tr><td>Ж ж</td><td>ジェー</td><td>zh (ʒ)</td></tr>
          <tr><td>З з</td><td>ゼー</td><td>z</td></tr>
          <tr><td>И и</td><td>イー</td><td>i</td></tr>
          <tr><td>Й й</td><td>イー・クラートカヤ(И краткое)</td><td>j</td></tr>
          <tr><td>К к</td><td>カー</td><td>k</td></tr>
          <tr><td>Л л</td><td>エル</td><td>l</td></tr>
          <tr><td>М м</td><td>エム</td><td>m</td></tr>
          <tr><td>Н н</td><td>エヌ</td><td>n</td></tr>
          <tr><td>О о</td><td>オー</td><td>o</td></tr>
          <tr><td>П п</td><td>ペー</td><td>p</td></tr>
          <tr><td>Р р</td><td>エル</td><td>r (巻き舌)</td></tr>
          <tr><td>С с</td><td>エス</td><td>s</td></tr>
          <tr><td>Т т</td><td>テー</td><td>t</td></tr>
          <tr><td>У у</td><td>ウー</td><td>u</td></tr>
          <tr><td>Ф ф</td><td>エフ</td><td>f</td></tr>
          <tr><td>Х х</td><td>ハー</td><td>kh / h</td></tr>
          <tr><td>Ц ц</td><td>ツェー</td><td>ts</td></tr>
          <tr><td>Ч ч</td><td>チェー</td><td>ch</td></tr>
          <tr><td>Ш ш</td><td>シャー</td><td>sh</td></tr>
          <tr><td>Щ щ</td><td>シシャー</td><td>shch / ɕː</td></tr>
          <tr><td>Ъ ъ</td><td>トビョールドゥイ・ズナーク(твёрдый знак)</td><td>-</td></tr>
          <tr><td>Ы ы</td><td>ゥイ</td><td>ɨ</td></tr>
          <tr><td>Ь ь</td><td>ミャーフキィ・ズナーク(мягкий знак)</td><td>-</td></tr>
          <tr><td>Э э</td><td>エー</td><td>e</td></tr>
          <tr><td>Ю ю</td><td>ユー</td><td>yu</td></tr>
          <tr><td>Я я</td><td>ヤー</td><td>ya</td></tr>
        </tbody>
      </table>
      <br>
      <p>33文字と聞くとめんくらいかもしれませんが、ローマ字のアルファベットと同じような文字も多いので案外覚えやすいです</p>
      <p>ただしローマ字と文字は同じでも発音は違うトラップがいくつかあるので注意！</p>
      <br>
      <div style="white-space: pre-line;">
        {{ isExpanded ? fullText : shortText }}
        <a v-if="isExpanded" href="https://www.y-history.net/appendix/wh0602-082.html" target="_blank" rel="noopener noreferrer">
          より詳しく知りたい方はこちら
        </a>
        <span class="read-more" @click="toggleText">
          {{ isExpanded ? '< 折りたたむ' : '>続きを読む' }}
        </span>
      </div>
      <br>

    </div>
    <div class="text-box">
      <h2>母音</h2>
      <p>まず目につくのは母音の多さです。「10って多くない？！」と思われることでしょう。
        <br>しかし安心してください、10と言っても実際は5×2（硬母音と軟母音の区別）であって、単純に言えば日本語と同じ5種類だけです。
      </p>
      <br>
      <h3>硬母音</h3>
      <table class="center-table">
        <tbody>
          <tr><td>А а</td><td>[a]</td><td>はっきりと発音した「ア」</td></tr>
          <tr><td>О о</td><td>[o]</td><td>唇を丸めて「オ」</td></tr>
          <tr><td>У у</td><td>[u]</td><td>唇を丸めて前に突き出し「ウ」</td></tr>
          <tr><td>Э э</td><td>[e]</td><td>はっきりと発音した「エ」</td></tr>
          <tr><td>Ы ы</td><td>[ɨ]</td><td>「ウ」の口を構えで「イ」と発音する<br>舌を後ろに引くと発音しやすい<br>胸に響かせるイメージで発音する</td></tr>
        </tbody>
      </table>
      <h3>軟母音</h3>
      <table class="center-table">
        <tbody>
          <tr><td>Я я</td><td>[ja] / [ʲa]</td><td>短い「イ」の後にаを添えて「ヤ」</td></tr>
          <tr><td>Ё ё</td><td>[jo] / [ʲo]</td><td>短い「イ」の後にоを添えて「ヨ」</td></tr>
          <tr><td>Ю ю</td><td>[ju] / [ʲu]</td><td>短い「イ」の後にуを添えて「ユ」</td></tr>
          <tr><td>Е е</td><td>[je] / [ʲe]</td><td>短い「イ」の後にэを添えて「ィエ」</td></tr>
          <tr><td>И и</td><td>[i]</td><td>はっきりと発音した「イ」</td></tr>
        </tbody>
      </table>
      <br>
      <p>硬音と軟音については<a href="#symbol">後述</a></p>
      <p>軟母音は基本的に硬母音にй(短い「イ」)をつけて発音するイメージです</p>
      <p>ただしи、ыは特殊なので注意</p>
      <p>またёには必ずアクセントがあります</p>
      <a href="#accent">アクセントについてはこちら</a>

    </div>
    <div class="text-box">
      <h2>子音</h2>
    </div>
    <div class="text-box" id="accent">
      <h2>アクセント</h2>
    </div>
    <div class="text-box" id="symbol">
      <h2>記号文字</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: `tips:キリル文字の成立経緯\n9世紀にギリシャ人宣教師キュリロスとメトディオスの兄弟が、文字を持たないスラヴ人へギリシャ正教を布教するために、ギリシア文字をもとにしてスラヴ語を表す文字を考案し、これが後のキリル文字となりました。なおロシア語ではキュリロスは聖人キリル(Святой Кирилл)と呼ばれています。`,
      shortText: `tips:キリル文字の成立経緯…`,
      isExpanded: false
    }
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded; // true/false を切り替える
    }
  }
}
</script>

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

.read-more {
  color: gray;
  cursor: pointer;
  margin-left: 0.5rem;
  font-weight: bold;
}
.read-more:hover {
  text-decoration: underline;
}
.article {
  width: 70%;
  margin: 2rem auto;
  line-height: 1.6;
  text-align: left;
}

.center-table {
  margin: 0 auto;       /* 左右中央寄せ */
  border-collapse: collapse; /* 枠線をまとめる */
  width: 70%;           /* 任意で表の横幅を指定 */
  text-align: center;   /* セル内の文字を中央揃え */
}

.center-table th,
.center-table td {
  border: 1px solid #ccc; /* 枠線 */
  padding: 0.5rem;
}

a {
  text-decoration: none;
}
</style>