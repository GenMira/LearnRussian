<template>
  <div class="textCenterizer">
    <h1>Letter Page</h1>
    <p>ここには文字に関する内容についてまとめます。</p>
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
      <p>ほとんどの文字で大文字と小文字同じですし</p>
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
      <h3>○硬母音</h3>
      <br>
      <table class="center-table">
        <tbody>
          <tr><td>А а</td><td>[a]</td><td>はっきりと発音した「ア」</td></tr>
          <tr><td>О о</td><td>[o]</td><td>唇を丸めて「オ」</td></tr>
          <tr><td>У у</td><td>[u]</td><td>唇を丸めて前に突き出し「ウ」</td></tr>
          <tr><td>Э э</td><td>[e]</td><td>はっきりと発音した「エ」</td></tr>
          <tr><td>Ы ы</td><td>[ɨ]</td><td>「ウ」の口を構えで「イ」と発音する<br>舌を後ろに引くと発音しやすい<br>胸に響かせるイメージで発音する</td></tr>
        </tbody>
      </table>
      <br>
      <h3>○軟母音</h3>
      <br>
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
      <br>
      <p>軟母音は基本的に硬母音にй(短い「イ」)をつけて発音するイメージです</p>
      <p>(発音記号の[j]はヤの発音です)</p>
      <p>ただしи、ыは特殊なので注意</p>
      <br>
      <p>またёには必ずアクセントがあります</p>
      <a href="#accent">アクセントについてはこちら</a>

    </div>
    <div class="text-box">
      <h2>子音</h2>
      <h3>○ローマ字にもある文字</h3>
      <br>
      <table class="center-table">
        <tbody>
          <tr><td>Т т</td><td>[t]</td></tr>
          <tr><td>К к</td><td>[k]</td></tr>
          <tr><td>М м</td><td>[m]</td></tr>
          <tr><td>С с</td><td>[s]</td></tr>
          <tr><td>В в</td><td>[v]</td></tr>
          <tr><td>Н н</td><td>[n]</td></tr>
          <tr><td>Р р</td><td>[r] (巻き舌)</td></tr>
          <tr><td>Х х</td><td>[x] </td></tr>
        </tbody>
      </table>
      <br>
      <p>т,к,мについてはローマ字と同じように発音</p>
      <p>ただし読みは違うのに注意！(例：т→ティーではなくテーと読む。発音は両方[t])</p>
      <p>с,в,нについてはローマ字と発音が異なることに注意！</p>
      <p>хはバッハのハのイメージ(ドイツ語でいうところのBachのch) </p>
      <p>音はなく、喉の音から呼気だけ絞り出すイメージ</p>
      <p>рは巻き舌発音です。頑張って練習しましょう！</p>
      <br>
      <h3>○ロシア語だけの文字その１</h3>
      <br>
      <table class="center-table">
        <tbody>
          <tr><td>П п</td><td>[p]</td></tr>
          <tr><td>Б б</td><td>[b]</td></tr>
          <tr><td>Д д</td><td>[d]</td></tr>
          <tr><td>Г г</td><td>[ɡ]</td></tr>
          <tr><td>З з</td><td>[z]</td></tr>
          <tr><td>Ф ф</td><td>[f]</td></tr>
          <tr><td>Л л</td><td>[l]</td></tr>
        </tbody>
      </table>
      <br>
      <p>キリル文字にしかない文字を使った子音です</p>
      <p>とはいえ発音はローマ字のものとほぼ同じです</p>
      <p>つまり文字さえ覚えれば勝ち</p>
      <br>
      <p>дは日本でもよく使いますよね、顔文字として</p>
      <p> ∑(゜Д゜)とか</p>
      <br>
      <p>фは明らかにギリシャ文字のファイ由来ですね</p>
      <br>
      <p>私事ですが著者genMiraはベーбとギリシャ文字σの書き分けが苦手です</p>
      <br>
      <p>一方これは一般的な話ですが、пとлの書き分けが苦手な人が多いようです</p>
      <p>コツとしては、лは左から一筆書きして横棒を短くすることを意識すると書き分けやすいです</p>
      <br>
      <p>зはсと同じ口の構え</p>
      <p>いわゆる有声子音と無声子音</p>
      <a href="#voiced">詳しくはこちら</a>
      <br>
      <p>фとвは英語のfとvとは違って、下唇に前歯を軽く触れさせたまま音を出します</p>
      <p>fとvは一瞬触れさせて離しながら音を出すイメージ</p>
      <br>
      <h3>○ロシア語だけの子音その２</h3>
      <br>
      <table class="center-table">
        <tbody>
          <tr><td>Ж ж</td><td>[zh]（日本語の「ジュ」に近い）</td></tr>
          <tr><td>Ч ч</td><td>[ch]（日本語の「チ」に近い）</td></tr>
          <tr><td>Ш ш</td><td>[sh]（舌を反らせた「シ」）</td></tr>
          <tr><td>Щ щ</td><td>[shch]（長い柔らかい「シ」）</td></tr>
          <tr><td>Ц ц</td><td>[ts]（日本語の「ツ」に近い）</td></tr>
          <tr><td>Й й</td><td>[j]（英語の *yes* の y）</td></tr>
        </tbody>
      </table>
      <br>
      <p>жは舌先を持ち上げ、舌全体をスプーン状にして発音する摩擦音の「ジュ」</p>
      <br>
      <p>чは日本語の「チ」の子音と同じ音</p>
      <p>舌を上歯茎につけるイメージ</p>
      <br>
      <p>шはжと同じ口の構えで発音する摩擦音の「シュ」</p>
      <br>
      <p>щは舌先を伸ばし少し長めに発音する摩擦音の「シ」</p>
      <p>шは上顎と舌先の摩擦音、щは喉奥と下の付け根の摩擦音</p>
      <br>
      <p>цは日本語の「ツ」の子音と同じ音</p>
    </div>
    <div class="text-box" id="symbol">
      <h2>記号文字</h2>
      <br>
      <table class="center-table">
        <tbody>
          <tr><td>Ь ь</td><td>ミャーフキィ・ズナーク(мягкий знак)</td><td>軟音記号</td></tr>
          <tr><td>Ъ ъ</td><td>トヴョールドゥイ・ズナーク(твёрдый знак)</td><td>硬音記号、（分離記号）</td></tr>
        </tbody>
      </table>
      <br>
      <p>мягкийは柔らかい、твёрдыйは硬いという形容詞で、знакは記号という意味</p>
      <br>
      <h3>○硬子音と軟子音のざっくりとした理解</h3>
      <br>
      <p>例としてмを考えます</p>
      <br>
      <p>маという音は、мの「ム」とаの「ア」からできた「マ」の音です</p>
      <p>マ=ム+ア</p>
      <br>
      <p>ではмяという音は、мの「ム」とяの「ヤ」からできた音なのでしょうか？</p>
      <p>実際に口に出してみましょう</p>
      <p>「ム」 「ヤ」、「ム」「ヤ」、「ムヤ」......</p>
      <p>「マ」と比べて、「ムヤ」からはなかなか「ミャ」になりませんね</p>
      <p>ミャ≠ム＋ヤ</p>、
      <br>
      <p>これをロシア語では、яがмに働きかけて「ム」の音が「ミ」になったと考えます</p>
      <p>こうすればмяが「ミャ」となりそうですね</p>
      <p>ミャ=ミ＋ヤ</p>
      <br>
      <p>このようにデフォルトのмの「ム」の音を硬子音、軟母音によって「ミ」に変わった音を軟子音といいます</p>
      <p>そして軟子音であることを表記するための記号がミャーフキィ・ズナークьです</p>
      <p>мьは「ミ」という音を表します</p>
      <p>この音は「ミ」とは言ってもмиほどはっきりした音ではありません</p>
      <p>「ミャ」と言いたいけど母音が欠落した音、のイメージです</p>
      <p>あくまでмьは子音です</p>
      <br>
      <p>なおこの硬子音から軟子音に変わる変化を<span style="color: red">口蓋化</span>と言います</p>
      <br>
      <p>以上のことを踏まえると軟母音は口蓋化させるもの＋硬母音と考えることができそうですね</p>
      <p>つまりаとяは本質的には両方「ア」の音ということです</p>
      <p>мя≒мьа</p>
      <br>
      <h3>○硬音記号について</h3>
      <p>さて、トヴョールドゥイ・ズナークは硬音記号なんて名前がついていますが、軟子音を硬子音に変えるものではありません</p>
      <p>だってわざわざ軟子音に変えなければデフォルトが硬子音なんですもの</p>
      <p>トヴョールドゥイ・ズナークの主な使い方は分離記号としての使い方</p>
      <p>つまり子音と母音を分けて発音することの表記です</p>
      <br>
      <p>例</p>
      <p>пойдём - подъём</p>
      <p>パイヂェーム - パドヨーム</p>
      <br>
      <p>日本語のローマ字表記でも新一と書くときにShin'ichiと書くことがあります</p>
      <p>これは「シニチ」と読まれることを防ぐためです</p>
      <p>要するにこれです</p>
      <p>（なぜ上の例で「ポ」ではなく「パ」と発音しているかは次項アクセントを参照のこと）</p>
      <br>
      <div style="white-space: pre-line;">
        {{ isExpandedV ? fullTextV : shortTextV }}
        <span class="read-more" @click="toggleTextV">
          {{ isExpandedV ? '< 折りたたむ' : '>続きを読む' }}
        </span>
      </div>

    </div>
    <div class="text-box" id="accent">
      <h2>アクセント</h2>
      <p>アクセントのある音節の母音は<span style="color: blue">強く・長め</span>に発音し、アクセントのない母音は<span style="color: blue">弱く・短め</span>に発音する</p>
      <p>教科書や辞書等では2音節以上の語にはアクセント記号( &#769; )がついているので、単語を覚えるときはアクセントの位置も覚えましょう</p>
      <br>
      <p>例</p>
      <p>па&#769;па　パーパ</p>
      <p>ко&#769;мната　コームナタ</p>
      <br>
      <h3>○母音の弱化</h3>
      <p>1.アクセントのない音節では、母音のоとаの区別がなくなり、どちらも弱い[a]の音になる</p>
      <br>
      <p>окно&#769;　アクノー</p>
      <br>
      <p>2.アクセントのない音節では、母音のеとяはどちらも弱く、曖昧に「イ」と発音する</p>
      <p>(厳密には位置によって微妙に発音が変わる。特に語末ではほぼ変化なし)</p>
      <br>
      <p>река&#769;　リカー</p>
      <p>язы&#769;к　イズィーク</p>


    </div>
    <div class="text-box" id="voiced">
      <h2>有声子音と無声子音</h2>
      <p>ロシア語の子音は 有声子音（声帯振動あり）と 無声子音（声帯振動なし）に分類できます</p>
      <br>
      <table class="center-table">
        <thead>
          <tr>
            <th>無声子音</th>
            <th>有声子音</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>п [p]</td><td>б [b]</td></tr>
          <tr><td>ф [f]</td><td>в [v]</td></tr>
          <tr><td>т [t]</td><td>д [d]</td></tr>
          <tr><td>к [k]</td><td>г [ɡ]</td></tr>
          <tr><td>с [s]</td><td>з [z]</td></tr>
          <tr><td>ш [zh]</td><td>ж [zh]</td></tr>
          <tr><td>ч [ch]</td><td>-</td></tr>
          <tr><td>ц [ts]</td><td>—</td></tr>
          <tr><td>х [x]</td><td>—</td></tr>
          <tr><td>щ [shch]</td><td>—</td></tr>
          <tr><td>-</td><td>м</td></tr>
          <tr><td>-</td><td>н</td></tr>
          <tr><td>-</td><td>л</td></tr>
          <tr><td>-</td><td>р</td></tr>
          <tr><td>-</td><td>й</td></tr>
        </tbody>
      </table>
      <br>
      <h3>○子音の無声化</h3>
      <p>有声子音字が対応する無声子音字として発音される</p>
      <p>б → п, в → ф, г → к, д → т, ж → ш, з → с</p>
      <br>
      <p>1.有声子音字が単語の末尾にあるとき</p>
      <p>хлеб : フリェープ 最後のбをпと発音</p>
      <p>любо&#769;вь : リュボーフィ   ьは無視して考える</p>
      <br>
      <p>2.有声子音字が無声子音字の直前にあるとき</p>
      <p>во&#769;дка : ヴォットカ   無声子音кの前のдをтと発音する</p>
      <br>
      <h3>○子音の有声化</h3>
      <p>無声子音のいくつかが対応する有声子音字として発音される</p>
      <p>к → г, т → д, с → з</p>
      <br>
      <p>футбо&#769;л : フドボール   有声子音бの前のтをдと発音する</p>
      <p>про&#769;сьба : プローズバ   ьは無視して考える</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: `tips:キリル文字の成立経緯\n9世紀にギリシャ人宣教師キュリロスとメトディオスの兄弟が、文字を持たないスラヴ人へギリシャ正教を布教するために、ギリシア文字をもとにしてスラヴ語を表す文字を考案し、これが後のキリル文字となりました。なおロシア語ではキュリロスは聖人キリル(Святой Кирилл)と呼ばれています。`,
      shortText: `tips:キリル文字の成立経緯...`,
      isExpanded: false,
      isExpandedV: false,
      shortTextV: `tips:昔の硬音記号の使い方...`,
      fullTextV: `tips:昔の硬音記号の使い方\n\n元々母音がつかずに終わった最後の子音は硬音であることを明記するために硬音記号を書いていました。
      \n例\nзнакъ\n\nしかしこれではめんどくさいということで、どうせデフォルトで硬子音ならわざわざъを表記しなくても良いだろう、という取り決めがなされました
      これが1917年のことです
      \nзнакъ → знак
      \n......ちなみに10月革命と同じ年ですが、革命とは全く関係ありません`
    }
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded; // true/false を切り替える
    },
    toggleTextV(){
      this.isExpandedV = !this.isExpandedV; 
    }
  }
}
</script>

<style scoped>

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



a {
  text-decoration: none;
}
</style>