import { newSpecPage } from '@stencil/core/testing';
import { CisButton } from '../cis-button';

describe('cis-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CisButton],
      html: `<cis-button text="Test"></cis-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cis-button text="Test">
        <mock:shadow-root>
          <button class="button button--primary">Test</button>
        </mock:shadow-root>
      </cis-button>
    `);
  });
});
