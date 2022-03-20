import { newE2EPage } from '@stencil/core/testing';

describe('cis-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cis-button></cis-button>');

    const element = await page.find('cis-button');
    expect(element).toHaveClass('hydrated');
  });
});
