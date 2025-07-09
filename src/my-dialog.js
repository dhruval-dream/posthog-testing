import { LitElement, css, html } from "lit";
import "@dreamworld/dw-input";
import "@dreamworld/dw-button";
import { DwCompositeDialog } from "@dreamworld/dw-dialog/dw-composite-dialog.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyDialog extends DwCompositeDialog {
  static get styles() {
    return [
      super.styles,
      css`
        dw-input {
          margin-bottom: 16px;
        }

        #dialog-content {
          padding: 16px;
        }

        #dialog-footer {
          justify-content: flex-end;
        }
      `,
    ];
  }

  get _headerTemplate() {
    return html`<h2>Fill the Form</h2>`;
  }

  get _contentTemplate() {
    return html`
      <dw-input label="First Name"></dw-input>
      <dw-input label="Last Name"></dw-input>

      <dw-input label="Profession"></dw-input>
    `;
  }

  get _footerTemplate() {
    return html`<dw-button outlined @click=${this._close}>Create</dw-button>`;
  }

  _close() {
    this.close();
  }
}

window.customElements.define("my-dialog", MyDialog);
