// Import stylesheets

import Vue from 'vue';
import { BButton } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import SPAStyles from './bundle.js'
Vue.use(SPAStyles)
Vue.use(ModalPlugin)

//import './style.css';

Vue.component('b-button', BButton)

const vue = new Vue({
  el: '#app',
  data: {
    title: `Vue JS Template!
    sd`
  },
  template:`<div>
  <h5 style="margin:10px;">Default Buttons</h5>
  <div style="margin:10px;">  
  <button class="btn-primary">Primary</button>
  <button class="btn-success">Success</button>
  <button class="btn-danger">Danger</button>
  <button class="btn-warning">Warning</button>
  <button class="btn-info">Info</button>
  <button class="btn-dark">Dark</button>
  <button class="btn-secondary">Secondary</button>
  <button class="btn-light">Light</button>
  <button class="btn-white">White</button>
</div>
<h5 style="margin:10px;">Disabled</h5>
<div style="margin:10px;">
  <button  class="btn-primary disabled">Primary</button>
  <button class="btn-success disabled">Success</button>
  <button class="btn-danger disabled">Danger</button>
  <button class="btn-warning disabled">Warning</button>
  <button class="btn-info disabled">Info</button>
  <button class="btn-dark disabled">Dark</button>
  <button class="btn-secondary disabled">Secondary</button>
  <button class="btn-light disabled">Light</button>
  <button class="btn-white disabled">White</button>
</div>
<h5 style="margin:10px;">Outline Buttons</h5>
<div style="margin:10px;">
  <button  class="btn-outline-primary">Primary</button>
  <button class="btn-outline-success">Success</button>
  <button class="btn-outline-danger">Danger</button>
  <button class="btn-outline-warning">Warning</button>
  <button class="btn-outline-info">Info</button>
  <button class="btn-outline-dark">Dark</button>
  <button class="btn-outline-secondary">Secondary</button>
  <button class="btn-outline-light">Light</button>
  <button class="btn-outline-white">White</button>
  
</div>
<h5 style="margin:10px;">Outline Disabled Buttons</h5>
<div style="margin:10px;">
  <button  class="btn-outline-primary disabled">Primary</button>
  <b-button class="btn-outline-success disabled">Success</button>
  <b-button class="btn-outline-danger disabled">Danger</button>
  <button class="btn-outline-warning disabled">Warning</button>
  <button class="btn-outline-info disabled">Info</button>
  <button class="btn-outline-dark disabled">Dark</button>
  <button class="btn-outline-secondary disabled">Secondary</button>
  <button class="btn-outline-light disabled">Light</button>
  <button class="btn-outline-white disabled">White</button>
</div>

</div>`
});