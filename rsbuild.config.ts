import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { configFederation } from './config/config-plugin-module-federation';

export default defineConfig({
  source: {
    entry: {
      index: {
        import: './src/app/index.tsx',
      },
    },
  },
  plugins: [pluginReact(), pluginModuleFederation(configFederation)],
  output: {
    distPath: {
      root: 'build/mf',
    },
    assetPrefix: './',
    target: 'web',
  },
  server: {
    port: 3000,
  },
});
