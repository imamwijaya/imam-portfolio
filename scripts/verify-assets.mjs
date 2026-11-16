/** No-dependency integrity check: npm run qa:assets */
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(root, 'qa/original-asset-hashes.json'), 'utf8'));
for (const [relative, hash] of Object.entries(manifest)) {
  const file = join(root, relative);
  assert.ok(existsSync(file), `Original asset missing: ${relative}`);
  assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'), hash, `Original asset changed: ${relative}`);
}
const text = readFileSync(join(root, 'src/data/projects.ts'), 'utf8');
const assignment = text.indexOf('= [');
const start = assignment < 0 ? -1 : assignment + 2;
const end = text.lastIndexOf(']');
assert.ok(start > -1 && end > start, 'Cannot read project list');
const projects = JSON.parse(text.slice(start, end + 1));
assert.equal(projects.length, 13, 'Expected 13 projects');
assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length, 'Duplicate project slugs');
for (const p of projects) {
  assert.ok(existsSync(join(root, 'public', p.artwork.src.slice(1))), `Missing artwork: ${p.slug}`);
  for (const d of p.decorations) {
    assert.ok(existsSync(join(root, 'public', d.src.slice(1))), `Missing decoration: ${d.src}`);
  }
  for (const link of p.links) assert.ok(/^https:\/\//.test(link.href), `Non-HTTPS project link: ${p.slug}`);
}
const portrait = join(root, 'public/about/imam-portrait.webp');
assert.ok(existsSync(portrait), 'Missing About Me portrait');
assert.equal(readFileSync(portrait).toString('ascii', 0, 4), 'RIFF', 'Invalid WebP file header');
const socialIcon = join(root, 'public/favicon.svg');
assert.ok(existsSync(socialIcon), 'Missing site icon');
const countAssets = (dir, extension) => readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? countAssets(join(dir, e.name), extension) : Number(e.name.endsWith(extension))), 0);
console.log(`PASS: ${projects.length} projects, ${countAssets(join(root, 'public/projects'), '.webp')} original WebP artwork files, ${countAssets(join(root, 'public/projects'), '.svg')} original SVG decorations.`);
console.log(`PASS: ${Object.keys(manifest).length} SHA-256 asset integrity checks (including original portrait).`);
console.log(`PASS: ${projects.reduce((sum, p) => sum + p.links.length, 0)} external project links, portrait, and favicon present.`);
