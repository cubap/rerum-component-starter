/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface RerumComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLRerumComponentElement extends StencilComponents.RerumComponent, HTMLStencilElement {}

  var HTMLRerumComponentElement: {
    prototype: HTMLRerumComponentElement;
    new (): HTMLRerumComponentElement;
  };
  interface HTMLElementTagNameMap {
    'rerum-component': HTMLRerumComponentElement;
  }
  interface ElementTagNameMap {
    'rerum-component': HTMLRerumComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'rerum-component': JSXElements.RerumComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface RerumComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;