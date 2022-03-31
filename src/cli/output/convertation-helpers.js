export function convertBranchDataToOutputInfo(branchData, userName, appName) {
    const { branch, lastBuild } = branchData;
    const seconds = ((new Date(lastBuild.finishTime) - new Date(lastBuild.startTime))/1000).toFixed(0);
    const link = getLogsLink(branchData,userName, appName);

    return `${branch.name} build ${lastBuild.result} in ${seconds} seconds. Link to build logs: ${link}`;
}

function getLogsLink(branchData, userName, appName) {
    const { branch, lastBuild } = branchData;
    const BASE_URL='https://appcenter.ms'; //TODO: move to env or constants

    return `${BASE_URL}/users/${userName}/apps/${appName}/build/branches/${branch.name}/builds/${lastBuild.id}`;
}