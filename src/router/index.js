import { createRouter, createWebHistory } from 'vue-router'

import LetterPage from '../views/LetterPage.vue'
import GrammarPage from '../views/GrammarPage.vue'
import Home from '../views/Home.vue'
import Declension from '../views/Declension.vue' 
import vocabulary from '../views/Vocabulary.vue'
import Vocab_noun from '../views/Vocabulary_noun.vue'
import Vocab_verb from '../views/Vocabulary_verb.vue'
import Vocab_adjective from '../views/Vocabulary_adjective.vue'
import Vocab_preposition from '../views/Vocabulary_preposition.vue'
import Vocab_pronoun from '../views/Vocabulary_pronoun.vue'


const routes = [
  { path: '/LearnRussian/', component: Home },
  { path: '/LearnRussian/letter', component: LetterPage },
  { path: '/LearnRussian/grammar', component: GrammarPage },
  { path: '/LearnRussian/declension', component: Declension},
  { path: '/LearnRussian/vocabulary', component: vocabulary},
  { path: '/LearnRussian/vocabulary/noun', component: Vocab_noun },
  { path: '/LearnRussian/vocabulary/verb', component: Vocab_verb },
  { path: '/LearnRussian/vocabulary/adjective', component: Vocab_adjective },
  { path: '/LearnRussian/vocabulary/preposition', component: Vocab_preposition },
  { path: '/LearnRussian/vocabulary/pronoun', component: Vocab_pronoun }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router