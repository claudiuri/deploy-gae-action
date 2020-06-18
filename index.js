const core = require('@actions/core');
const execSync = require('child_process').execSync;
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  try {
    
    const serviceAccountFile = `/tmp/${(new Date()).getTime()}.json`;
    
    core.startGroup('Processing SERVICE_ACCOUNT');

    console.log('Copy SERVICE_ACCOUNT');

    fs.writeFileSync(serviceAccountFile, core.getInput('service-account'));

    console.log(core.getInput('service-account'))
    console.log(serviceAccountFile)
    console.log(serviceAccountParsed)

    const serviceAccountParsed = JSON.parse(serviceAccountFile);

    // console.log('Activate SERVICE_ACCOUNT');
    // execSync(`gcloud auth activate-service-account --key-file ${serviceAccountFile}`, {stdio: 'inherit'});
    // core.endGroup();

    // core.startGroup('Set GCP Project');
    // execSync(`gcloud config set project ${serviceAccountParsed.}`, {stdio: 'inherit'});
    // core.endGroup();

    // core.startGroup('Depoy GAE project');
    // execSync(`gcloud app deploy`, {stdio: 'inherit'});
    // core.endGroup();
    
    core.startGroup(' SERVICE_ACCOUNT');
    console.log('Remove SERVICE_ACCOUNT');
    fs.unlinkSync(serviceAccountFile);
    core.endGroup();
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();