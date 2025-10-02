<template>
  <div class = "textCenterizer">
    <h1>Список Глаголов</h1>
    <p>ここには動詞をまとめます</p>
    <br>
    <router-link to="/LearnRussian/vocabulary">
      < 戻る
    </router-link>
    <br>
  </div>
  <div class="text-box">
    <h2>第1変化</h2>
    <br>
    <table class="center-table">
      <thead>
        <tr>
          <th>語句</th>
          <th>意味</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>чита&#769;ть</td>
          <td>読む</td>
          <td></td>
        </tr>
        <tr>
          <td>прочита&#769;ть</td>
          <td>読む</td>
          <td>完了体</td>
        </tr>
        <tr>
          <td>писа&#769;ть</td>
          <td>書く</td>
          <td></td>
        </tr>
        <tr>
          <td>написа&#769;ть</td>
          <td>書く</td>
          <td>完了体</td>
        </tr>
        <tr>
          <td>слу&#769;шать</td>
          <td>聞く</td>
          <td></td>
        </tr>
        <tr>
          <td>понима&#769;ть</td>
          <td>理解する</td>
          <td></td>
        </tr>
        <tr>
          <td>писа&#769;ть</td>
          <td>書く</td>
          <td></td>
        </tr>

      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>第2変化</h2>
    <br>
    <table class="center-table">
      <thead>
        <tr>
          <th>語句</th>
          <th>意味</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>говори&#769;ть</td>
          <td>話す</td>
          <td></td>
        </tr>
        <tr>
          <td>сказа&#769;ть</td>
          <td>言う</td>
          <td></td>
        </tr>
        <tr>
          <td>люби&#769;ть</td>
          <td>愛する</td>
          <td>лю́бишь以降アクセント移動</td>
        </tr>
        <tr>
          <td>смотре&#769;ть</td>
          <td>見る</td>
          <td>смо́тришь以降アクセント移動</td>
        </tr>
        <tr>
          <td>посмотре&#769;ть</td>
          <td>見る</td>
          <td>完了体<br>посмо́тришь以降アクセント移動</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-box">
    <h2>不規則</h2>
    <br>
    <table class="center-table">
      <caption>現在形</caption>
      <thead>
        <tr>
          <!-- я	ты	он / оно	она	мы	вы	они -->
          <th>語句</th>
          <th>意味</th>
          <th>я</th>
          <th>ты</th>
          <th>он<br>она<br>оно</th>
          <th>мы</th>
          <th>вы</th>
          <th>они</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>жить</td>
          <td>生きる</td>
          <td>жив<span style="color:red">у́</span></td>
          <td>жив<span style="color:red">ёшь</span></td>
          <td>жив<span style="color:red">ёт</span></td>
          <td>жив<span style="color:red">ём</span></td>
          <td>жив<span style="color:red">ёте</span></td>
          <td>жив<span style="color:red">у́т</span></td>
        </tr>
        <tr>
          <td>идти́</td>
          <td>行く</td>
          <td>ид<span style="color:red">у́</span></td>
          <td>ид<span style="color:red">ёшь</span></td>
          <td>ид<span style="color:red">ёт</span></td>
          <td>ид<span style="color:red">ём</span></td>
          <td>ид<span style="color:red">ёте</span></td>
          <td>ид<span style="color:red">у́т</span></td>
        </tr>
        <tr>
          <td>хоте́ть</td>
          <td>欲する</td>
          <td>хоч<span style="color:red">у́</span></td>
          <td>хо́ч<span style="color:red">ешь</span></td>
          <td>хо́ч<span style="color:red">ет</span></td>
          <td>хот<span style="color:red">и́м</span></td>
          <td>хот<span style="color:red">и́те</span></td>
          <td>хо́т<span style="color:red">ят</span></td>
        </tr>
        <tr>
          <td>есть</td>
          <td>食べる</td>
          <td>е<span style="color:red">м</span></td>
          <td>е<span style="color:red">шь</span></td>
          <td>е<span style="color:red">ст</span></td>
          <td>еди́<span style="color:red">м</span></td>
          <td>еди́<span style="color:red">те</span></td>
          <td>ед<span style="color:red">я́т</span></td>
        </tr>
        <tr>
          <td>дать</td>
          <td>与える</td>
          <td>да<span style="color:red">м</span></td>
          <td>да<span style="color:red">шь</span></td>
          <td>да<span style="color:red">ст</span></td>
          <td>да<span style="color:red">ди́м</span></td>
          <td>да<span style="color:red">ди́те</span></td>
          <td>да<span style="color:red">дут</span></td>
        </tr>
      </tbody>
    </table>
    <br>
    <table class="center-table">
      <caption>過去形・命令形</caption>
      <thead>
        <tr>
          <th>語句</th>
          <th>男過</th>
          <th>女過</th>
          <th>中過</th>
          <th>複過</th>
          <th>命令</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>жить</td>
          <td>жи<span style="color:red">л</span></td>
          <td>жи<span style="color:red">ла́</span></td>
          <td>жи́<span style="color:red">ло́</span></td>
          <td>жи&#769;<span style="color:red">ли</span></td>
          <td>жив<span style="color:red">и́</span>, жив<span style="color:red">и́те</span></td>
          <td></td>
        </tr>
        <tr>
          <td>идти́</td>
          <td>шёл</td>
          <td>шла</td>
          <td>шло</td>
          <td>шли</td>
          <td>ид<span style="color:red">и́</span>, ид<span style="color:red">и́те</span></td>
          <td>不規則</td>
        </tr>
        <tr>
          <td>хоте́ть</td>
          <td>хоте́<span style="color:red">л</span></td>
          <td>хоте&#769;<span style="color:red">ла</span></td>
          <td>хоте́<span style="color:red">ло</span></td>
          <td>хоте&#769;<span style="color:red">ли</span></td>
          <td>（通常なし）</td>
          <td></td>
        </tr>
        <tr>
          <td>есть</td>
          <td>е<span style="color:red">л</span></td>
          <td>е&#769;<span style="color:red">ла</span></td>
          <td>е&#769;<span style="color:red">ло</span></td>
          <td>е&#769;<span style="color:red">ли</span></td>
          <td>е<span style="color:red">шь</span>, е&#769;<span style="color:red">шьте</span></td>
          <td></td>
        </tr>
        <tr>
          <td>дать</td>
          <td>да<span style="color:red">л</span></td>
          <td>да<span style="color:red">ла́</span></td>
          <td>да&#769;<span style="color:red">ло&#769;</span></td>
          <td>да&#769;<span style="color:red">ли</span></td>
          <td>да<span style="color:red">й</span>, да<span style="color:red">йте</span></td>
          <td>命令形頻用</td>
        </tr>
      </tbody>
    </table>
    <p>--------------------------------------</p>

    <p>быть</p><p>である</p>
    <p>мочь</p><p>できる</p>
    <p>видеть</p><p>見る</p>
    <p>стоять</p><p>立つ</p>
    <p>сидеть</p><p>座る</p>
    <p>лежать</p><p>横たわる</p>
    <p>бежать</p><p>走る</p>
    <p>пить</p><p>飲む</p>
    <p>спать</p><p>眠る</p>
    <p>думать</p><p>考える</p>
    <p>работать</p><p>働く</p>
    <p>играть</p><p>遊ぶ</p>
    <p>помнить</p><p>覚えている</p>
    <p>покупать</p><p>買う</p>
    <p>готовить</p><p>準備する、料理する</p>
    <p>платить</p><p>支払う</p>
    <p>отвечать</p><p>答える</p>
    <p>начинать</p><p>始める</p>
    <p>заканчивать</p><p>終える</p>
    <p>помогать</p><p>助ける</p>
    <p>учить</p><p>学ぶ、教える</p>
    <p>учиться</p><p>学ぶ（自分で）</p>
    <p>знать</p><p>知っている</p>
    <p>ждать</p><p>待つ</p>
    <p>переезжать</p><p>引っ越す</p>
    <p>переехать</p><p>引っ越す（完了体）</p>
    <p>рассказывать</p><p>話す</p>
    <p>рассказать</p><p>話す（完了体）</p>
    <p>слушать</p><p>聞く</p>
    <p>послушать</p><p>聞く（完了体）</p>
    <p>делать</p><p>する、作る</p>
    <p>сделать</p><p>する、作る（完了体）</p>
    <p>покупать</p><p>買う</p>
    <p>купить</p><p>買う（完了体）</p>
    <p>готовить</p><p>準備する、料理する</p>
    <p>приготовить</p><p>準備する、料理   する（完了体）</p>
    <p>платить</p><p>支払う</p>
    <p>заплатить</p><p>支払う（完了体）</p>
    <p>отвечать</p><p>答える</p>
    <p>ответить</p><p>答える（完了体）</p>
    <p>начинать</p><p>始める</p>
    <p>начать</p><p>始める（完了体）</p>
    <p>заканчивать</p><p>終える</p>
    <p>закончить</p><p>終える（完了体）</p>
    <p>помогать</p><p>助ける</p>
    <p>помочь</p><p>助ける（完了体）</p>
    <p>учить</p><p>学ぶ、教える</p>
    <p>выучить</p><p>学ぶ、教える（完了体）</p>
    <p>учиться</p><p>学ぶ（自分で）</p>
    <p>научиться</p><p>学ぶ（自分で）（完了体）</p>
    <p>знать</p><p>知っている</p>
    <p>узнать</p><p>知る（完了体）</p>
    <p>ждать</p><p>待つ</p>
    <p>подождать</p><p>待つ（完了体）</p>
    <p>переезжать</p><p>引っ越す</p>
    <p>переехать</p><p>引っ越す（完了体）</p>
    <p>рассказывать</p><p>話す</p>
    <p>рассказать</p><p>話す（完了体）</p>
    <p>смотреть</p><p>見る</p>
    <p>посмотреть</p><p>見る（完了体）</p>
    <p>слушать</p><p>聞く</p>
    <p>послушать</p><p>聞く（完了体）</p>
    <p>читать</p><p>読む</p>
    <p>писать</p><p>書く</p>  </div>

</template>