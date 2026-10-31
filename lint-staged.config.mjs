const q = (files) => files.map((f) => `"${f}"`).join(' ');

export default {
  'frontend/**/*.{ts,tsx,js,jsx,mjs}': (files) => [
    `prettier --write ${q(files)}`,
    `bun run --cwd frontend lint:files ${q(files)}`,
  ],
  '*.{json,md,yml,yaml,css}': (files) => `prettier --write ${q(files)}`,
  'backend/**/*.java': () => 'bun scripts/mvn.mjs spotless:apply',
};