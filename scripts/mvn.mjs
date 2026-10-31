import { spawnSync } from 'node:child_process';

const mvnArgs = ['-q', '-f', 'backend/pom.xml', ...process.argv.slice(2)];

const result =
  process.platform === 'win32'
    ? spawnSync('cmd', ['/c', 'backend\\mvnw.cmd', ...mvnArgs], { stdio: 'inherit' })
    : spawnSync('sh', ['backend/mvnw', ...mvnArgs], { stdio: 'inherit' });

process.exit(result.status ?? 1);
