#!/usr/bin/env node
const { execSync } = require("child_process");
function staged() {
  const out = execSync("git diff --cached --name-only", {encoding:"utf8"}).trim();
  return out ? out.split(/\r?\n/) : [];
}
const forbidden = [/(^|\/)node_modules\//, /(^|\/)dist\//, /(^|\/)build\//];
const offenders = staged().filter(f => forbidden.some(rx => rx.test(f)));
if (offenders.length) {
  console.error("\n❌ Commit bloqueado: paths prohibidos detectados:");
  offenders.forEach(f => console.error("  - " + f));
  console.error("\n👉 Solución rápida:");
  console.error("   git rm -r --cached node_modules dist build\n");
  process.exit(1);
}
