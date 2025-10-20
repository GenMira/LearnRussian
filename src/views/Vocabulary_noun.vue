<template>
  <div class="textCenterizer">
    <h1>Список Существительных</h1>
    <p>ここには名詞をまとめます</p>
    <br>
    <router-link to="/LearnRussian/vocabulary">
      < 戻る
    </router-link>
    <br>
  </div>
  <div class="text-box">
    <h2>よく使う</h2>
    <br>
    <table class="center-table">
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>и&#769;мя</td>
          <td>名前</td>
          <td>中</td>
          <td></td>
        </tr>
        <tr>
          <td>го&#769;род</td>
          <td>都市</td>
          <td>男</td>
          <td>複: города&#769;</td>
        </tr>
        <tr>
          <td>страна&#769;</td>
          <td>国</td>
          <td>女</td>
          <td>複: страны</td>
        </tr>
        <tr>
          <td>язы&#769;к</td>
          <td>言語</td>
          <td>男</td>
          <td>複: языки</td>
        </tr>
        <tr>
          <td>вре&#769;мя</td>
          <td>時間</td>
          <td>中</td>
          <td></td>
        </tr>
        <tr>
          <td>день</td>
          <td>日</td>
          <td>男</td>
          <td>複: дни</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>人を表す言葉</h2>
    <br>
    <table class="center-table">
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>челове&#769;к</td>
          <td>人</td>
          <td>男</td>
          <td>複: лю&#769;ди</td>
        </tr>
        <tr>
          <td>мужчи&#769;на</td>
          <td>男性</td>
          <td>男</td>
          <td></td>
        </tr>
        <tr>
          <td>же&#769;нщина</td>
          <td>女性</td>
          <td>女</td>
          <td></td>
        </tr>
        <tr>
          <td>ребёнок</td>
          <td>子供</td>
          <td>男</td>
          <td>複: де&#769;ти</td>
        </tr>
        <tr>
          <td>се&#769;мья</td>
          <td>家族</td>
          <td>女</td>
          <td></td>
        </tr>
        <tr><td>мать</td><td>母</td><td>ж</td><td></td></tr>
        <tr><td>отец&#769;</td><td>父</td><td>м</td><td>不規則変化<br>一単生отца́</td></tr>
        <tr><td>сын</td><td>息子</td><td>м</td><td></td></tr>
        <tr><td>дочь</td><td>娘</td><td>ж</td><td></td></tr>
        <tr><td>брат</td><td>兄／弟</td><td>м</td><td></td></tr>
        <tr><td>сестра&#769;</td><td>姉／妹</td><td>ж</td><td></td></tr>
        <tr><td>друг</td><td>友達</td><td>男</td><td>複: друзья&#769;</td></tr>
        <tr><td>подру&#769;га</td><td>女友達、彼女</td><td>ж</td><td></td></tr>
        <tr><td>студе&#769;нт</td><td>学生（男）</td><td>м</td><td></td></tr>
        <tr><td>студе&#769;нтка</td><td>学生（女）</td><td>ж</td><td></td></tr>
        <tr><td>учи&#769;тель</td><td>先生（男）</td><td>м</td><td></td></tr>
        <tr><td>учи&#769;тельница</td><td>先生（女）</td><td>ж</td><td></td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>数</h2>
    <br>
    <table class="center-table">
      <tr style="background-color:#f0f0f0;">
        <th>数詞（アクセント付き）</th>
        <th>意味（日本語）</th>
      </tr>

      <!-- 1〜10 -->
      <tr><td>оди́н</td><td>1</td></tr>
      <tr><td>два́</td><td>2</td></tr>
      <tr><td>три́</td><td>3</td></tr>
      <tr><td>четы́ре</td><td>4</td></tr>
      <tr><td>пять</td><td>5</td></tr>
      <tr><td>ше́сть</td><td>6</td></tr>
      <tr><td>се́мь</td><td>7</td></tr>
      <tr><td>во́семь</td><td>8</td></tr>
      <tr><td>де́вять</td><td>9</td></tr>
      <tr><td>де́сять</td><td>10</td></tr>

      <!-- 11〜20 -->
      <tr><td>оди́ннадцать</td><td>11</td></tr>
      <tr><td>двена́дцать</td><td>12</td></tr>
      <tr><td>трина́дцать</td><td>13</td></tr>
      <tr><td>четырна́дцать</td><td>14</td></tr>
      <tr><td>пятна́дцать</td><td>15</td></tr>
      <tr><td>шестна́дцать</td><td>16</td></tr>
      <tr><td>семна́дцать</td><td>17</td></tr>
      <tr><td>восемна́дцать</td><td>18</td></tr>
      <tr><td>девятна́дцать</td><td>19</td></tr>
      <tr><td>два́дцать</td><td>20</td></tr>

      <!-- 30〜1000 -->
      <tr><td>три́дцать</td><td>30</td></tr>
      <tr><td>со́рок</td><td>40</td></tr>
      <tr><td>пятьдеся́т</td><td>50</td></tr>
      <tr><td>ше́стьдесят</td><td>60</td></tr>
      <tr><td>се́мьдесят</td><td>70</td></tr>
      <tr><td>во́семьдесят</td><td>80</td></tr>
      <tr><td>девяно́сто</td><td>90</td></tr>
      <tr><td>сто</td><td>100</td></tr>
      <tr><td>ты́сяча</td><td>1000</td></tr>
    </table>
  </div>
  <div class="text-box">
    <h2>日付・時間</h2>
    <br>
    <table class="center-table">
      <caption>時間</caption>
      <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
      </tr>
      <tr><td>день</td><td>日・昼</td><td>м</td><td></td></tr>

      <tr><td>ночь</td><td>夜</td><td>ж</td><td></td></tr>
      <tr><td>у&#769;тро</td><td>朝</td><td>с</td><td></td></tr>
      <tr><td>ве&#769;чер</td><td>夕方、晩</td><td>м</td><td></td></tr>
      <tr><td>неде&#769;ля</td><td>週</td><td>ж</td><td></td></tr>
      <tr><td>ме&#769;сяц</td><td>月（期間）</td><td>м</td><td></td></tr>

      <tr><td>год</td><td>年</td><td>м</td><td></td></tr>
      <tr><td>вре&#769;мя</td><td>時間</td><td>с</td><td></td></tr>
    </table>
    <br>
    <table class="center-table">
      <caption>曜日</caption>
      <tr style="background-color:#f0f0f0;">
        <th>ロシア語（アクセント付き）</th>
        <th>略語</th>
        <th>日本語</th>
        <th>起源・意味</th>
      </tr>
      <tr>
        <td>понеде́льник</td>
        <td>пн</td>
        <td>月曜日</td>
        <td>「неде́ля（週）」の後 →「週の後の日」</td>
      </tr>
      <tr>
        <td>вто́рник</td>
        <td>вт</td>
        <td>火曜日</td>
        <td>「второ́й（二番目）」 →「2番目の日」</td>
      </tr>
      <tr>
        <td>сре́да</td>
        <td>ср</td>
        <td>水曜日</td>
        <td>「середа́（真ん中）」 →「週の中日」</td>
      </tr>
      <tr>
        <td>четве́рг</td>
        <td>чт</td>
        <td>木曜日</td>
        <td>「четы́ре（4）」 →「4番目の日」</td>
      </tr>
      <tr>
        <td>пя́тница</td>
        <td>пт</td>
        <td>金曜日</td>
        <td>「пять（5）」 →「5番目の日」</td>
      </tr>
      <tr>
        <td>суббо́та</td>
        <td>сб</td>
        <td>土曜日</td>
        <td>ヘブライ語「שַׁבָּת（シャバット）」→休息の日</td>
      </tr>
      <tr>
        <td>воскресе́нье</td>
        <td>вс</td>
        <td>日曜日</td>
        <td>「воскресе́ние（復活）」か→「キリストの復活の日」</td>
      </tr>
    </table>


  </div>
  <div class="text-box">
    <h2>食べ物</h2>
    <table class="center-table">
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>еда&#769;</td><td>食べ物、食事</td><td>ж</td><td>不可算</td></tr>
        <tr><td>хлеб</td><td>パン</td><td>м</td><td></td></tr>
        <tr><td>суп</td><td>スープ</td><td>м</td><td></td></tr>
        <tr><td>мя&#769;со</td><td>肉</td><td>с</td><td>不可算</td></tr>
        <tr><td>ры&#769;ба</td><td>魚</td><td>ж</td><td></td></tr>
        <tr><td>яйцо&#769;</td><td>卵</td><td>с</td><td></td></tr>
        <tr><td>молоко&#769;</td><td>牛乳</td><td>с</td><td></td></tr>
        <tr><td>вода&#769;</td><td>水、液体</td><td>ж</td><td>不可算</td></tr>
        <tr><td>чай</td><td>お茶</td><td>м</td><td></td></tr>
        <tr><td>ко&#769;фе</td><td>コーヒー</td><td>м</td><td>変化しない</td></tr>
        <tr><td>я&#769;блоко</td><td>りんご</td><td>с</td><td></td></tr>
        <tr><td>бана&#769;н</td><td>バナナ</td><td>м</td><td></td></tr>
        <tr><td>о&#769;вощ</td><td>野菜</td><td>м</td><td></td></tr>
        <tr><td>фру&#769;кт</td><td>果物</td><td>м</td><td></td></tr>
        <tr><td>са&#769;хар</td><td>砂糖</td><td>м</td><td>不可算</td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>建物に関わる言葉</h2>
    <table class="center-table">
      <caption>場所</caption>
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>ме&#769;сто</td><td>場所</td><td>с</td><td></td></tr>
        <tr><td>до&#769;м</td><td>家</td><td>м</td><td></td></tr>
        <tr><td>кварти&#769;ра</td><td>アパート</td><td>ж</td><td>ロシアでは一軒家よりもアパートの方が一般的</td></tr>
        <tr><td>библиоте&#769;ка</td><td>図書館</td><td>ж</td><td></td></tr>
        <tr><td>го&#769;род</td><td>町・都市</td><td>м</td><td>複数形города&#769;</td></tr>
        <tr><td>дере&#769;вня</td><td>村</td><td>ж</td><td></td></tr>
        <tr><td>у&#769;лица</td><td>通り</td><td>ж</td><td></td></tr>
        <tr><td>пло&#769;щадь</td><td>広場</td><td>ж</td><td>Красная площадь:赤の広場(世界遺産)</td></tr>
        <tr><td>магази&#769;н</td><td>店</td><td>м</td><td></td></tr>
        <tr><td>рестора&#769;н</td><td>レストラン</td><td>м</td><td></td></tr>
        <tr><td>кафе&#769;</td><td>カフェ</td><td>с</td><td>変化しない</td></tr>
        <tr><td>парк</td><td>公園</td><td>м</td><td></td></tr>
        <tr><td>теа&#769;тр</td><td>劇場</td><td>м</td><td></td></tr>
        <tr><td>музе&#769;й</td><td>博物館、美術館、記念館</td><td>м</td><td></td></tr>
        <tr><td>вокза&#769;л</td><td>駅</td><td>м</td><td></td></tr>
        <tr><td>апте&#769;ка</td><td>薬局</td><td>ж</td><td></td></tr>
        <tr><td>больни&#769;ца</td><td>病院</td><td>ж</td><td></td></tr>
        <tr><td>ры&#769;нок</td><td>市場</td><td>м</td><td></td></tr>
        <tr><td>шко&#769;ла</td><td>学校</td><td>ж</td><td></td></tr>
        <tr><td>универси&#769;тет</td><td>大学</td><td>м</td><td></td></tr>
        <tr><td>доро&#769;га</td><td>道・道路</td><td>ж</td><td></td></tr>
        <tr><td>о&#769;фис</td><td>オフィス</td><td>м</td><td></td></tr>
        <tr><td>компа́ния</td><td>会社</td><td>女</td><td></td></tr>
        <tr><td>страна́</td><td>国</td><td>女</td><td></td></tr>
      </tbody>
    </table>
    <br>
    <table class="center-table">
      <caption>家の中の言葉</caption>
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>ко&#769;мната</td><td>部屋</td><td>ж</td><td></td></tr>
        <tr><td>дверь</td><td>ドア</td><td>ж</td><td>不規則な硬音/軟音注意</td></tr>
        <tr><td>окно&#769;</td><td>窓</td><td>с</td><td></td></tr>
        <tr><td>стол</td><td>机</td><td>м</td><td></td></tr>
        <tr><td>стул</td><td>椅子</td><td>м</td><td></td></tr>
        <tr><td>крова&#769;ть</td><td>ベッド</td><td>ж</td><td></td></tr>
        <tr><td>дива&#769;н</td><td>ソファー</td><td>м</td><td></td></tr>
        <tr><td>ла&#769;мпа</td><td>ランプ</td><td>ж</td><td></td></tr>
        <tr><td>шкаф</td><td>戸棚・タンス</td><td>м</td><td></td></tr>
        <tr><td>пол</td><td>床</td><td>м</td><td></td></tr>
        <tr><td>потоло&#769;к</td><td>天井</td><td>м</td><td></td></tr>
        <tr><td>стена&#769;</td><td>壁</td><td>ж</td><td></td></tr>
        <tr><td>часы&#769;</td><td>時計</td><td>мн</td><td>複数形で使う（単複同形扱い）</td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>天気</h2>
    <table class="center-table">
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>со&#769;лнце</td><td>太陽</td><td>с</td><td>л発音しない</td></tr>
        <tr><td>не&#769;бо</td><td>空</td><td>с</td><td></td></tr>
        <tr><td>дождь</td><td>雨</td><td>м</td><td></td></tr>
        <tr><td>снег</td><td>雪</td><td>м</td><td></td></tr>
        <tr><td>воздух</td><td>空気</td><td>м</td><td></td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <table class="center-table">
      <caption>物・雑貨</caption>
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>кни&#769;га</td><td>本</td><td>ж</td><td></td></tr>
        <tr><td>тетра&#769;дь</td><td>ノート</td><td>ж</td><td></td></tr>
        <tr><td>ру&#769;чка</td><td>ペン</td><td>ж</td><td></td></tr>
        <tr><td>каранда&#769;ш</td><td>鉛筆</td><td>м</td><td>シャーペンは鉛筆とみなす</td></tr>
        <tr><td>бума&#769;га</td><td>紙</td><td>ж</td><td>不可算</td></tr>
        <tr><td>рабо&#769;та</td><td>仕事</td><td>ж</td><td></td></tr>
        <tr><td>компью&#769;тер</td><td>コンピュータ、パソコン</td><td>м</td><td></td></tr>
        <tr><td>телефо&#769;н</td><td>電話、電話機</td><td>м</td><td></td></tr>
        <tr><td>маши&#769;на</td><td>車</td><td>ж</td><td></td></tr>
        <tr><td>де&#769;ньги</td><td>お金</td><td>мн</td><td>複数形で使う</td></tr>
        <tr><td>па&#769;спорт</td><td>パスポート</td><td>м</td><td></td></tr>
        <tr><td>биле&#769;т</td><td>切符・券</td><td>м</td><td></td></tr>
        <tr><td>оде&#769;жда</td><td>服</td><td>ж</td><td>集合名詞</td></tr>
        <tr><td>о&#769;бувь</td><td>靴</td><td>ж</td><td></td></tr>
        <tr><td>письмо&#769;</td><td>手紙</td><td>с</td><td></td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <table class="center-table">
      <caption>その他</caption>
      <thead>
        <tr style="background-color:#f0f0f0;">
          <th>語句</th>
          <th>意味</th>
          <th>性</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>уро&#769;к</td><td>授業</td><td>м</td><td></td></tr>
        <tr><td>вопрос</td><td>質問・問題</td><td>м</td><td></td></tr>
        <tr><td>отве&#769;т</td><td>答え</td><td>м</td><td></td></tr>
        <tr><td>пра&#769;вда</td><td>真実</td><td>ж</td><td></td></tr>
        <tr><td>ло&#769;жь</td><td>嘘</td><td>ж</td><td></td></tr>
        <tr><td>си&#769;ла</td><td>力・勢力</td><td>ж</td><td></td></tr>
        <tr><td>мир</td><td>世界・平和</td><td>м</td><td></td></tr>
        <tr><td>язы&#769;к</td><td>言語・舌</td><td>м</td><td></td></tr>
        <tr><td>здоро&#769;вье</td><td>健康</td><td>с</td><td></td></tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <table class="center-table">
      <tr style="background-color:#f0f0f0;">
        <th>語句（アクセント付き）</th>
        <th>意味</th>
        <th>性</th>
        <th>備考</th>
      </tr>
      <tr><td>па́рень</td><td>若者・彼氏</td><td>男</td><td></td></tr>
      <tr><td>де́вушка</td><td>女の子・彼女</td><td>女</td><td></td></tr>
      <tr><td>мужчи́на</td><td>男性</td><td>男</td><td></td></tr>
      <tr><td>же́нщина</td><td>女性</td><td>女</td><td></td></tr>
      <tr><td>ребёнок</td><td>子供</td><td>男</td><td>複数：де́ти</td></tr>
      <tr><td>семья́</td><td>家族</td><td>女</td><td></td></tr>
      <tr><td>мать</td><td>母</td><td>女</td><td></td></tr>
      <tr><td>отец</td><td>父</td><td>男</td><td>複数：отцы́</td></tr>
      <tr><td>брат</td><td>兄弟</td><td>男</td><td></td></tr>
      <tr><td>сестра́</td><td>姉妹</td><td>女</td><td>複数：сёстры</td></tr>
      <tr><td>сын</td><td>息子</td><td>男</td><td></td></tr>
      <tr><td>дочь</td><td>娘</td><td>女</td><td>複数：до́чери</td></tr>
      <tr><td>ко́шка</td><td>猫（♀）</td><td>女</td><td></td></tr>
      <tr><td>кот</td><td>猫（♂）</td><td>男</td><td></td></tr>
      <tr><td>со́бака</td><td>犬</td><td>女</td><td></td></tr>
      <tr><td>пти́ца</td><td>鳥</td><td>女</td><td></td></tr>
      <tr><td>ры́ба</td><td>魚</td><td>女</td><td></td></tr>
      <tr><td>вода́</td><td>水</td><td>女</td><td></td></tr>
      <tr><td>еда́</td><td>食べ物</td><td>女</td><td></td></tr>
      <tr><td>хле́б</td><td>パン</td><td>男</td><td></td></tr>
      <tr><td>моло́ко</td><td>牛乳</td><td>中</td><td></td></tr>
      <tr><td>ко́фе</td><td>コーヒー</td><td>男（不変化）</td><td></td></tr>
      <tr><td>чай</td><td>紅茶</td><td>男</td><td></td></tr>
      <tr><td>сок</td><td>ジュース</td><td>男</td><td></td></tr>
      <tr><td>фру́кт</td><td>果物</td><td>男</td><td></td></tr>
      <tr><td>овощи</td><td>野菜</td><td>複数</td><td>単数なし</td></tr>
      <tr><td>ка́ша</td><td>おかゆ・粥</td><td>女</td><td></td></tr>
      <tr><td>мя́со</td><td>肉</td><td>中</td><td></td></tr>
      <tr><td>ры́нок</td><td>市場</td><td>男</td><td></td></tr>
      <tr><td>ули́ца</td><td>通り</td><td>女</td><td></td></tr>
      <tr><td>парк</td><td>公園</td><td>男</td><td></td></tr>
      <tr><td>река́</td><td>川</td><td>女</td><td></td></tr>
      <tr><td>мо́ре</td><td>海</td><td>中</td><td></td></tr>
      <tr><td>гора́</td><td>山</td><td>女</td><td></td></tr>
      <tr><td>ле́с</td><td>森</td><td>男</td><td></td></tr>
      <tr><td>по́ле</td><td>野原</td><td>中</td><td></td></tr>
      <tr><td>цвето́к</td><td>花</td><td>男</td><td>複数：цветы́</td></tr>
      <tr><td>дере́во</td><td>木</td><td>中</td><td>複数：дере́вья</td></tr>
      <tr><td>животно́е</td><td>動物</td><td>中</td><td></td></tr>
      <tr><td>маши́на</td><td>車</td><td>女</td><td></td></tr>
      <tr><td>автобу́с</td><td>バス</td><td>男</td><td></td></tr>
      <tr><td>по́езд</td><td>列車</td><td>男</td><td></td></tr>
      <tr><td>самолёт</td><td>飛行機</td><td>男</td><td></td></tr>
      <tr><td>стан́ция</td><td>駅</td><td>女</td><td></td></tr>
      <tr><td>биле́т</td><td>切符</td><td>男</td><td></td></tr>
      <tr><td>вокза́л</td><td>ターミナル駅</td><td>男</td><td></td></tr>
      <tr><td>аэропо́рт</td><td>空港</td><td>男</td><td></td></tr>
      <tr><td>дорога́</td><td>道</td><td>女</td><td></td></tr>
      <tr><td>книга</td><td>本</td><td>女</td><td></td></tr>
      <tr><td>газе́та</td><td>新聞</td><td>女</td><td></td></tr>
      <tr><td>журна́л</td><td>雑誌</td><td>男</td><td></td></tr>
      <tr><td>фото́графия</td><td>写真</td><td>女</td><td></td></tr>
      <tr><td>телефо́н</td><td>電話</td><td>男</td><td></td></tr>
      <tr><td>компью́тер</td><td>コンピュータ</td><td>男</td><td></td></tr>
      <tr><td>интерне́т</td><td>インターネット</td><td>男</td><td></td></tr>
      <tr><td>письмо́</td><td>手紙</td><td>中</td><td></td></tr>
      <tr><td>вопрос́</td><td>質問</td><td>男</td><td></td></tr>
      <tr><td>отве́т</td><td>答え</td><td>男</td><td></td></tr>
      <tr><td>сло́во</td><td>言葉</td><td>中</td><td></td></tr>
      <tr><td>язы́к</td><td>言語／舌</td><td>男</td><td></td></tr>
      <tr><td>музы́ка</td><td>音楽</td><td>女</td><td></td></tr>
      <tr><td>пе́сня</td><td>歌</td><td>女</td><td></td></tr>
      <tr><td>кино́</td><td>映画</td><td>中（不変化）</td><td></td></tr>
      <tr><td>фильм</td><td>映画（作品）</td><td>男</td><td></td></tr>
      <tr><td>спорт</td><td>スポーツ</td><td>男</td><td></td></tr>
      <tr><td>игра́</td><td>ゲーム・試合</td><td>女</td><td></td></tr>
      <tr><td>ме́сяц</td><td>月（暦）</td><td>男</td><td></td></tr>
      <tr><td>год</td><td>年</td><td>男</td><td>複数：годы́／ле́та</td></tr>
      <tr><td>неде́ля</td><td>週</td><td>女</td><td></td></tr>
      <tr><td>час</td><td>時間</td><td>男</td><td></td></tr>
      <tr><td>мину́та</td><td>分</td><td>女</td><td></td></tr>
      <tr><td>секунда</td><td>秒</td><td>女</td><td></td></tr>
      <tr><td>вещь</td><td>物</td><td>女</td><td></td></tr>
      <tr><td>де́ло</td><td>こと・用事</td><td>中</td><td></td></tr>
      <tr><td>вре́мя</td><td>時・時間</td><td>中</td><td>不規則変化</td></tr>
      <tr><td>жизнь</td><td>人生・生活</td><td>女</td><td></td></tr>
      <tr><td>лю́ди</td><td>人々</td><td>複数</td><td>単数：челове́к</td></tr>
      <tr><td>челове́к</td><td>人</td><td>男</td><td></td></tr>
    </table>
  </div>
</template>