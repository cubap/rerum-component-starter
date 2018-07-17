import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'rerum-component',
  styleUrl: 'rerum-component.css',
  shadow: true
})
export class RerumComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
