import type { ModuleFederationOptions } from '@module-federation/rsbuild-plugin';

export const configFederation: ModuleFederationOptions = {
  name: 'name_mf',
  filename: 'mf-orchestrator.js',
  remotes: {
    name_mf:
      'name_mf@http://localhost:2000/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
    },
  },
};
