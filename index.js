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
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-dark">Dark</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-light">Light</button>
  <button class="btn btn-white">White</button>
</div>
<h5 style="margin:10px;">Disabled</h5>
<div style="margin:10px;">
  <button  class="btn btn-primary disabled">Primary</button>
  <button class="btn btn-success disabled">Success</button>
  <button class="btn btn-danger disabled">Danger</button>
  <button class="btn btn-warning disabled">Warning</button>
  <button class="btn btn-info disabled">Info</button>
  <button class="btn btn-dark disabled">Dark</button>
  <button class="btn btn-secondary disabled">Secondary</button>
  <button class="btn btn-light disabled">Light</button>
  <button class="btn btn-white disabled">White</button>
</div>
<h5 style="margin:10px;">Outline Buttons</h5>
<div style="margin:10px;">
  <button  class="btn btn-outline-primary">Primary</button>
  <button class="btn btn-outline-success">Success</button>
  <button class="btn btn-outline-danger">Danger</button>
  <button class="btn btn-outline-warning">Warning</button>
  <button class="btn btn-outline-info">Info</button>
  <button class="btn btn-outline-dark">Dark</button>
  <button class="btn btn-outline-secondary">Secondary</button>
  <button class="btn btn-outline-light">Light</button>
  <button class="btn btn-outline-white">White</button>
  
</div>
<h5 style="margin:10px;">Outline Disabled Buttons</h5>
<div style="margin:10px;">
  <button  class="btn btn-outline-primary disabled">Primary</button>
  <button class="btn btn-outline-success disabled">Success</button>
  <button class="btn btn-outline-danger disabled">Danger</button>
  <button class="btn btn-outline-warning disabled">Warning</button>
  <button class="btn btn-outline-info disabled">Info</button>
  <button class="btn btn-outline-dark disabled">Dark</button>
  <button class="btn btn-outline-secondary disabled">Secondary</button>
  <button class="btn btn-outline-light disabled">Light</button>
  <button class="btn btn-outline-white disabled">White</button>
</div>

</div>`
});