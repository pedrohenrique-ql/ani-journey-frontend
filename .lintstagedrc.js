module.exports = {
  '*': ['pnpm style:format'],
  ['*.{ts,tsx}']: ['pnpm lint --max-warnings 0'],
};
