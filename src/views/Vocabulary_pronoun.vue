<template>
  <div class="textCenterizer">
    <h1>Список Местоимений</h1>
    <p>ここには代名詞をまとめます</p>
    <br>
    <router-link to="/LearnRussian/vocabulary">
      < 戻る
    </router-link>
    <br>
</div>
<div class="text-box">
  <table class="center-table">
    <thead>
      <tr>
        <th>種類</th>
        <th>語句</th>
        <th>日本語の意味</th>
        <th>備考</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="8">人称代名詞</td>
        <td>я</td>
        <td>私</td>
        <td rowspan="8">格変化あり</td>
      </tr>
      <tr>
        <td>ты</td>
        <td>君</td>
      </tr>
      <tr>
        <td>он</td>
        <td>彼</td>
      </tr>
      <tr>
        <td>она</td>
        <td>彼女</td>
      </tr>
      <tr>
        <td>оно</td>
        <td>それ</td>
      </tr>
      <tr>
        <td>мы</td>
        <td>私たち</td>
      </tr>
      <tr>
        <td>вы</td>
        <td>あなたたち／あなた（丁寧）</td>
      </tr>
      <tr>
        <td>они</td>
        <td>彼ら・彼女ら</td>
      </tr>
      <tr>
        <td rowspan="7">所有代名詞</td>
        <td>мой</td>
        <td>私の</td>
        <td rowspan="7">名詞の性・数・格に一致して変化</td>
      </tr>
      <tr>
        <td>твой</td>
        <td>君の</td>
      </tr>
      <tr>
        <td>наш</td>
        <td>私たちの</td>
      </tr>
      <tr>
        <td>ваш</td>
        <td>あなたの／あなたたちの</td>
      </tr>
      <tr>
        <td>его́</td>
        <td>彼の</td>
      </tr>
      <tr>
        <td>её</td>
        <td>彼女の</td>
      </tr>
      <tr>
        <td>их</td>
        <td>彼らの</td>
      </tr>
      <tr>
        <td>再帰代名詞</td>
        <td>себя́</td>
        <td>自分自身を</td>
        <td>主格なし<br>すべての人称に使える</td>
      </tr>
      <tr>
        <td rowspan="4">指示代名詞</td>
        <td>этот</td>
        <td>この</td>
        <td rowspan="4">性・数・格変化あり<br>этотは単独で主語になるときは<br>中性形это</td>
      </tr>
      <tr>
        <td>тот</td>
        <td>その</td>
      </tr>
      <tr>
        <td>такой</td>
        <td>このような</td>
      </tr>
      <tr>
        <td>весь</td>
        <td>すべての</td>
      </tr>
      <tr>
        <td rowspan="4">不定代名詞</td>
        <td>кто-то</td>
        <td>誰か</td>
        <td rowspan="4">接尾辞 -то, -нибудь で不定を表す</td>
      </tr>
      <tr>
        <td>что-то</td>
        <td>何か</td>
      </tr>
      <tr>
        <td>какой-то</td>
        <td>ある、何らかの、一種の</td>
      </tr>
      <tr>
        <td>где-то</td>
        <td>どこか</td>
      </tr>
      <tr>
        <td rowspan="4">否定代名詞</td>
        <td>никто́</td>
        <td>誰も〜ない</td>
        <td rowspan="4">否定文で動詞とともに使う<br>例:<br>Никто́ не пришёл.<br>誰も行かなかった</td>
      </tr>
      <tr>
        <td>ничего́</td>
        <td>何も〜ない</td>
      </tr>
      <tr>
        <td>никако́й</td>
        <td>どんな〜もない</td>
      </tr>
      <tr>
        <td>нигде́</td>
        <td>どこにも〜ない</td>
      </tr>
      <tr>
        <td rowspan="5">疑問代名詞</td>
        <td>кто</td>
        <td>誰</td>
        <td rowspan="5">格変化あり</td>
      </tr>
      <tr><td>что</td><td>何</td></tr>
      <tr><td>како́й</td><td>どんな（男性形）</td></tr>
      <tr><td>кака́я</td><td>どんな（女性形）</td></tr>
      <tr><td>како́е／каки́е</td><td>どんな（中性／複数）</td></tr>
    </tbody>
  </table>
  <br>
  <h3>○不定代名詞の-тоと-нибудьの違い</h3>
  <br>
  <p>-то:（具体的にはわからないけど）何か（確かに存在している）</p>
  <br>
  <p>例</p>
  <p>Кто́-то пришёл<br>誰かが来た</p>
  <p>что́-то слы́шал<br>何か聞いた気がする</p>
  <br>
  <p>-нибудь:（何でもいいから）〜何か</p>
  <br>
  <p>例</p>
  <p>Кто́-нибудь мо́жет отве́тить на э́тот вопро́с<br>誰かがこの質問に答えられるかもしれない</p>
  <p>Скажи́ что́-нибу́дь<br>何か言って。</p>
</div>
</template>