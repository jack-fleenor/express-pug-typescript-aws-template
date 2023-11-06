import fs from 'fs-extra';
import childProcess from 'child_process';

try {
  // Remove current build
  fs.removeSync('./build');
  fs.copySync('./src/views', './build/views');
  // Transpile the typescript files
  childProcess.exec('tsc --build tsconfig.json');
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
