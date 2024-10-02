import type { Preview } from '@storybook/react';
import { TaskContextProvider } from '../src/Tasks/context/TaskContextProvider';

import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from '@storybook/addon-themes';
import '../src/index.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
