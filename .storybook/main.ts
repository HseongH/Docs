import { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

export default {
  stories: ['../src/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      esbuild: {
        target: 'ES2022',
      },
      define: {
        'process.env.CAPTCHA_SITE_KEY': `"${process.env.CAPTCHA_SITE_KEY}"`,
      },
    });
  },
} satisfies StorybookConfig;
