/* eslint-disable no-use-before-define, import/imports-first, no-unused-vars */

// Helper script to invalidate cache in cloudFront.
// Store your cloudFront DISTRIBUTIONID in .env in root of the project.
dotenv.load({ silent: true });
import { exec } from 'child_process';
import dotenv from 'dotenv';
import colors from 'colors';

exec(`aws cloudfront create-invalidation --distribution-id ${process.env.DISTRIBUTIONID} --paths '/*'`, (err, result) => {
  if (err) {
    process.stdout.write('\n');
    process.stdout.write(`
      ❌ ${err}
    `.red);
    throw err;
  } else {
    process.stdout.write('\n');
    process.stdout.write(result.bold.green);
    process.stdout.write('\n✅  Your app has been successfully deployed.\n'.green.bold);
  }
});
