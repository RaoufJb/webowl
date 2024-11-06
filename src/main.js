import "./index.html";
import { Component, useState, mount, xml } from "@odoo/owl";

class Counter extends Component {
  static template = xml`
    <button t-on-click="() => state.value = state.value + props.increment">
      Click Me! [<t t-esc="state.value"/>]
    </button>`;

  state = useState({ value: 0 });
}

class Root extends Component {
  static template = xml`
    <span>Hello Owl</span><br/><br/>
    <Counter increment="2"/>`;

  static components = { Counter };
}

mount(Root, document.body);

