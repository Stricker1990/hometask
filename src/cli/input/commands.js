import { program } from "commander";

import { convertBranchDataToOutputInfo } from "../output/convertation-helpers.js";
import { printString } from "../output/index.js";
import { getBranches } from "../../services/microsoft-app-center.service.js";
import * as logger from '../../services/logger.service.js';

export function setup(){
    program.command('branches')
        .description('Receive list of branches for the app and build them')
        .argument('<string>', 'The name of the owner')
        .argument('<string>', 'The name of the application')
        .option('-t, --token <string>', 'App API Token (Optional. By default used env variable)')
        .action(branchesCommand);
    program.parse();
}

const branchesCommand = (userName, appName, options) => {
    getBranches(userName, appName, options.token)
        .then(value => {
            for(let branchData of value.data){
                printString(convertBranchDataToOutputInfo(branchData, userName, appName));
            }
        })
        .catch(err => logger.error(err));
}