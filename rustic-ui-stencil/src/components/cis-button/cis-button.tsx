import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cis-button',
  styleUrl: 'cis-button.css',
  shadow: true,
})
export class CisButton {
  @Prop()
  text: string = 'Button';

  @Prop()
  color: string = 'primary';

  @Prop()
  size: string = 'medium';

  render() {
    return <button class={`button button--${this.color} button--${this.size}`}>{this.text}</button>;
  }
}
