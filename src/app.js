import { convertBranchDataToOutputInfo } from "./cli/output/convertation-helpers.js";
import { printString } from "./cli/output/index.js";
import { getBranches } from "./services/microsoft-app-center.service.js";
import * as logger from './services/logger.service.js';

export function run() {
    const userName = 'stricker-fer-yandex.ru';
    const appName = 'TestKotlin';
    getBranches(userName, appName)
        .then(value => {
            for(let branchData of value.data){
                printString(convertBranchDataToOutputInfo(branchData, userName, appName));
            }
        })
        .catch(err => logger.error(err));
}