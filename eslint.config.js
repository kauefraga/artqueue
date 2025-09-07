import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Cria configuração do eslint
export default defineConfig(
  tseslint.configs.strictTypeChecked, // estende as configurações estritas com checagem de tipos do typescript-eslint
  stylistic.configs.recommended, // estende as configurações recomendadas do stylistic
  stylistic.configs.customize({ semi: true }), // customiza a configuração `semi` (ponto e vírgula)
  {
    // configuração que vem do create-vite
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        projectService: true, // https://typescript-eslint.io/getting-started/typed-linting
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@stylistic': stylistic, // adiciona o plugin stylistic
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
