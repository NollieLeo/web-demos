class MyButton extends HTMLElement {
  constructor() {
    super();
    this.typeStyle = {
      primary: ["#06c", "#0066ccb3"], //#0066ccb3
      warning: ["#f11818", "#f11818ba"],
      default: ["#f0f0f0", "#e0e0e0"],
    };

    this.attachShadow({
      mode: "open",
    });
  
    this._functype = "default";
    this._type = "default";
    this.init();
  }
  static get observedAttributes() {
    return ["functype", "type"];
  }
  get functype() {
    return this._functype;
  }
  set functype(value) {
    this.setAttribute("functype", value);
  }
  get type() {
    return this._type;
  }
  set type(value) {
    this.setAttribute("type", value);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "functype") {
      this._functype = newValue;
    }
    if (name === "type") {
      this._type = newValue;
    }
    this.updateRendering();
  }
  connectedCallback() {
    this.addStyle();
    this.updateRendering();
  }

  updateRendering() {
  }

  init() {
    let template = document.querySelector("#btn1");
    let templateContent = template.content;

    const btn = document.createElement("button");
    btn.appendChild(templateContent.cloneNode(true));
    btn.setAttribute("class", "w-button");

    this.shadowRoot.appendChild(btn);
  }

  addStyle() {
    const type = this.typeStyle;

    const btnType = this._type;

    // 文字颜色
    const btnTextColor = btnType === "default" ? "#888" : "#fff";
    // btn functype类型
    const functype = this._functype;

    const style = document.createElement("style");

    let styleContent = `
    .w-button {
      position:relative;
      margin-right:3px;
      display:inline-block;
      padding:7px 15px;
      border-radius:3px;
      background-color:${type[btnType][0]};
      color:${btnTextColor};
      outline:none;
      border:none;
      cursor:pointer;
      box-shadow: ${
        functype === "raised"
          ? "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)"
          : "none"
      };
      animation-duration:.2s
    }
    .w-button:active {
      background-color:${type[btnType][1]};
    }
  `;

    style.textContent = styleContent;

    this.shadowRoot.appendChild(style);
  }
}

customElements.define("w-button", MyButton);
