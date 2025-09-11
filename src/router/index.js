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
  { path: '/', component: Home },
  { path: '/letter', component: LetterPage },
  { path: '/grammar', component: GrammarPage },
  { path: '/declension', component: Declension},
  { path: '/vocabulary', component: vocabulary},
  { path: '/vocabulary/noun', component: Vocab_noun },
  { path: '/vocabulary/verb', component: Vocab_verb },
  { path: '/vocabulary/adjective', component: Vocab_adjective },
  { path: '/vocabulary/preposition', component: Vocab_preposition },
  { path: '/vocabulary/pronoun', component: Vocab_pronoun }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router