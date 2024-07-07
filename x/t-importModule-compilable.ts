// `deno compile -A t-importModule-compilable.ts` => 't-importModule-compilable.exe'

import { dynamicImport as importModule } from 'https://cdn.jsdelivr.net/gh/ayoreis/import@7c0d89e/mod.ts';

console.log({ cwd: Deno.cwd(), meta: import.meta });

// const M = await importModule('https://deno.land/x/deno_dx@0.3.1/Taskfile.ts');
const M = await importModule(`file://${Deno.cwd()}/Taskfile.ts`);

console.log({ M });
// console.log({ first: await M.first() });
await M.first();
