<template>
  <div class="textCenterizer">
    <h1>Список Предлогов</h1>
    <p>ここには前置詞をまとめます</p>
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
          <th>前置詞</th>
          <th>格</th>
          <th>意味</th>
          <th>例文</th>
          <th>訳</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">в</td>
          <td>対格</td>
          <td>〜へ（方向）</td>
          <td>
            Я иду́ в шко́лу.
          </td>
          <td>
            私は学校へ行きます。
          </td>
        </tr>
        <tr>
          <td>前置格</td>
          <td>〜の中で（場所）</td>
          <td>
            Я учу́сь в шко́ле.
          </td>
          <td>
            私は学校で勉強しています。
          </td>
        </tr>
        <tr>
          <td rowspan="2">на</td>
          <td>対格</td>
          <td>〜へ（方向）</td>
          <td>
            Мы идём на рабо́ту.
          </td>
          <td>
            私たちは仕事へ行きます。
          </td>
        </tr>
        <tr>
          <td>前置格</td>
          <td>〜の上で・〜で（場所）</td>
          <td>
            Он рабо́тает на фа́брике.
          </td>
          <td>
            彼は工場で働いています。
          </td>
        </tr>
        <tr>
          <td rowspan="2">с</td>
          <td>生格</td>
          <td>〜から</td>
          <td>
            Я пришёл с рабо́ты.
          </td>
          <td>
            私は仕事から帰りました。
          </td>
        </tr>
        <tr>
          <td>造格</td>
          <td>〜と一緒に</td>
          <td>
            Я гуля́ю с дру́гом.
          </td>
          <td>
            私は友達と散歩しています。
          </td>
        </tr>
        <tr>
          <td rowspan="2">у</td>
          <td rowspan="2">生格</td>
          <td>〜のところに</td>
          <td>
            Мы бы́ли у ба́бушки.
          </td>
          <td>
            私たちはおばあさんの家にいました。
          </td>
        </tr>
        <tr>
          <td>〜を所有している</td>
          <td>
            У меня́ есть кни́га.
          </td>
          <td>
            私は本を持っています。
          </td>
        </tr>
        <tr>
          <td rowspan="2">к</td>
          <td rowspan="2">与格</td>
          <td rowspan="2">〜のもとへ、〜の方へ</td>
          <td>
            Я иду́ к врачу́.
          </td>
          <td>
            私は医者のところへ行きます。
          </td>
        </tr>
        <tr>
          <td>
            Мы пошли́ к дру́гу.
          </td>
          <td>
            私たちは友人のもとへ行きました。
          </td>
        </tr>
        <tr>
          <td rowspan="2">о <br>(об,<br>обо)</td>
          <td rowspan="2">前置格</td>
          <td rowspan="2">〜について</td>
          <td>
            Мы говори́м о рабо́те.
          </td>
          <td>
            私たちは仕事について話しています。
          </td>
        </tr>
        <tr>
          <td>
            Я ду́маю об отце́.
          </td>
          <td>
            私は父について考えています。
          </td>
        </tr>
        <tr>
          <td rowspan="2">под</td>
          <td>対格</td>
          <td>〜の下へ（方向）</td>
          <td>
            Кошка легла́ под стол.
          </td>
          <td>
            猫が机の下に横たわりました。
          </td>
        </tr>
        <tr>
          <td>造格</td>
          <td>〜の下で（場所）</td>
          <td>
            Мяч лежи́т под столо́м.
          </td>
          <td>
            ボールは机の下にあります。
          </td>
        </tr>
        <tr>
          <td>над</td>
          <td>造格</td>
          <td>〜の上に</td>
          <td>
            Самолёт лети́т <b>над го́родом</b>.
          </td>
          <td>
            飛行機が町の上を飛んでいます。
          </td>
        </tr>
        <tr>
          <td>по&#769;сле</td>
          <td>生格</td>
          <td>〜の後で</td>
          <td>
            По&#769;сле рабо́ты я иду́ домо&#769;й.
          </td>
          <td>
            仕事の後で家に帰ります。
          </td>
        </tr>
        <tr>
          <td>пе&#769;ред</td>
          <td>造格</td>
          <td>〜の前で</td>
          <td>
            Маши́на стои́т пе&#769;ред до́мом.
          </td>
          <td>
            車は家の前に停まっています。
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>