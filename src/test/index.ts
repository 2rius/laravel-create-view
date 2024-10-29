//
// PLEASE DO NOT MODIFY / DELETE UNLESS YOU KNOW WHAT YOU ARE DOING
//
// This file is providing the test runner to use when running extension tests.
// By default the test runner in use is Mocha based.
//
// You can provide your own test runner if you want to override it by exporting
// a function run(testsRoot: string, clb: (error: Error, failures?: number) => void): void
// that the extension host can call to run the tests. The test runner is expected to use console.log
// to report the results back to the caller. When the tests are finished, return
// a possible error to the callback or null if none.

import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
    try {
        // The path to the extension test runner file
        const testRunnerPath = path.resolve(__dirname, './suite/index');

        // Run the tests
        await runTests({
            extensionDevelopmentPath: path.resolve(__dirname, '../../'),
            extensionTestsPath: testRunnerPath
        });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();