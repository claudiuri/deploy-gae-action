const core = require('@actions/core');
const execSync = require('child_process').execSync;
const fs = require('fs');

async function run() {
  try {
    
    const serviceAccountFile = `/tmp/${(new Date()).getTime()}.json`; // Create temp json
    const projectName = core.getInput('project-id');
    const isDebug = core.getInput('debug');

    core.startGroup('Processing service account');
    console.log('Copy service account');
    fs.writeFileSync(serviceAccountFile, core.getInput('service-account'));

    console.log('Activate service account');
    execSync(`gcloud auth activate-service-account --key-file ${serviceAccountFile}`, { stdio: 'inherit' });
    core.endGroup();

    core.startGroup('Set Google Clound project');
    execSync(`gcloud config set project ${projectName}`, {stdio: 'inherit'});
    core.endGroup();

    if (isDebug) {

      core.startGroup('Project info');
      execSync(`gcloud info`, {stdio: 'inherit'});
      core.endGroup();
    } else {

      core.startGroup('Depoy project');
      execSync(`gcloud app deploy`, {stdio: 'inherit'});
      core.endGroup();
    }

    core.startGroup('Remove service account');
    fs.unlinkSync(serviceAccountFile);
    core.endGroup();
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();