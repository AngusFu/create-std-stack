import { createStandard } from 'create-standard'
export function createStandardWithSemanticRelease() {
  createStandard().then(() => {
    // TODO
    // 0. (optional) jest, rollup, ts...
    // 1. install semantic-release-cli:
    // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started
    // 2. set up semantic-release
    // 3. extend pkg.json ——
    // "publishConfig": {
    //   "registry": "https://registry.npmjs.org/",
    //     "access": "public"
    // }
    // 4. copy files: travis configuration, install.sh, release config, etc.
  })
}
