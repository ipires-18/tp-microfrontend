module.exports = {
  '*.{js,jsx,ts,tsx}': filenames => [
    `yarn lint ${filenames.join(' ')}`,
    `yarn test:coverage ${filenames.join(' ')}`,
  ],
};
