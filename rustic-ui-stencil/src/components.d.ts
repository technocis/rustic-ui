/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CisButton {
        "color": string;
        "size": string;
        "text": string;
    }
}
declare global {
    interface HTMLCisButtonElement extends Components.CisButton, HTMLStencilElement {
    }
    var HTMLCisButtonElement: {
        prototype: HTMLCisButtonElement;
        new (): HTMLCisButtonElement;
    };
    interface HTMLElementTagNameMap {
        "cis-button": HTMLCisButtonElement;
    }
}
declare namespace LocalJSX {
    interface CisButton {
        "color"?: string;
        "size"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "cis-button": CisButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cis-button": LocalJSX.CisButton & JSXBase.HTMLAttributes<HTMLCisButtonElement>;
        }
    }
}
