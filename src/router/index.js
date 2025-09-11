import { createRouter, createWebHistory } from 'vue-router'

import LetterPage from '../views/LetterPage.vue'
import GrammarPage from '../views/GrammarPage.vue'
import Home from '../views/Home.vue'
import Declension from '../views/Declension.vue' 
import vocabulary from '../views/Vocabulary.vue'
import Vocab_noun from '../views/Vocabulary_noun.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/letter', component: LetterPage },
  { path: '/grammar', component: GrammarPage },
  { path: '/declension', component: Declension},
  { path: '/vocabulary', component: vocabulary},
  { path: '/vocabulary/noun', component: Vocab_noun } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router