// Import stylesheets

import Vue from 'vue';
import { BButton } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

import './style.css';

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
  <b-button class="btn-primary">Primary</b-button>
  <b-button class="btn-success">Success</b-button>
  <b-button class="btn-danger">Danger</b-button>
  <b-button class="btn-warning">Warning</b-button>
  <b-button class="btn-info">Info</b-button>
  <b-button class="btn-dark">Dark</b-button>
  <b-button class="btn-secondary">Secondary</b-button>
  <b-button class="btn-light">Light</b-button>
  <b-button class="btn-white">White</b-button>
</div>
<h5 style="margin:10px;">Disabled</h5>
<div style="margin:10px;">
  <b-button  class="btn-primary disabled">Primary</b-button>
  <b-button class="btn-success disabled">Success</b-button>
  <b-button class="btn-danger disabled">Danger</b-button>
  <b-button class="btn-warning disabled">Warning</b-button>
  <b-button class="btn-info disabled">Info</b-button>
  <b-button class="btn-dark disabled">Dark</b-button>
  <b-button class="btn-secondary disabled">Secondary</b-button>
  <b-button class="btn-light disabled">Light</b-button>
  <b-button class="btn-white disabled">White</b-button>
</div>
<h5 style="margin:10px;">Outline Buttons</h5>
<div style="margin:10px;">
  <b-button  class="btn-outline-primary">Primary</b-button>
  <b-button class="btn-outline-success">Success</b-button>
  <b-button class="btn-outline-danger">Danger</b-button>
  <b-button class="btn-outline-warning">Warning</b-button>
  <b-button class="btn-outline-info">Info</b-button>
  <b-button class="btn-outline-dark">Dark</b-button>
  <b-button class="btn-outline-secondary">Secondary</b-button>
  <b-button class="btn-outline-light">Light</b-button>
  <b-button class="btn-outline-white">White</b-button>
</div>
<h5 style="margin:10px;">Outline Disabled Buttons</h5>
<div style="margin:10px;">
  <b-button  class="btn-outline-primary disabled">Primary</b-button>
  <b-button class="btn-outline-success disabled">Success</b-button>
  <b-button class="btn-outline-danger disabled">Danger</b-button>
  <b-button class="btn-outline-warning disabled">Warning</b-button>
  <b-button class="btn-outline-info disabled">Info</b-button>
  <b-button class="btn-outline-dark disabled">Dark</b-button>
  <b-button class="btn-outline-secondary disabled">Secondary</b-button>
  <b-button class="btn-outline-light disabled">Light</b-button>
  <b-button class="btn-outline-white disabled">White</b-button>
</div>

</div>`
});