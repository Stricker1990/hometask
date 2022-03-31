import { convertBranchDataToOutputInfo } from "./cli/output.js";
import { getBranches } from "./services/microsoft-app-center.service.js";

export function run() {
    console.log('Started!');
    const userName = 'stricker-fer-yandex.ru';
    const appName = 'TestKotlin';
    getBranches(userName, appName)
        .then(value => {
            for(let branchData of value.data){
                console.log(convertBranchDataToOutputInfo(branchData, userName, appName));
            }
        })
        .catch(err => console.error(err));
}