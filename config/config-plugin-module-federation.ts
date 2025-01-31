import type { ModuleFederationOptions } from '@module-federation/rsbuild-plugin';

export const configFederation: ModuleFederationOptions = {
  name: 'workpass_mf_orchestrator',
  filename: 'mf-orchestrator.js',
  remotes: {
    workpass_mf_client:
      'workpass_mf_client@http://localhost:2000/mf-manifest.json',
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
    tailwindcss: {
      singleton: true,
      eager: true,
    },
  },
};
