<h1 align="center">
 Deploy app to Google App Engine :rocket:
</h1>

<p align="center">This action allowed you publish application to <a href="https://cloud.google.com/appengine/">Google App Engine</a></p>

## :ticket: Inputs

### `service-account`

**Required** The service account private key (JSON), you can know how to create one [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).


### `project-id`

**Required** The project-id in service account.

### `debug`

To test. Default `false`. PS: If true does not deploy

## :clipboard: Example usage

uses: claudiuri/deploy-gae-action@master
with:
  service-account:  ${{ secrets.SERVICE_ACCOUNT }}
  project-id: ${{ secrets.PROJECT_ID }}

## :memo: License

This project is under license from MIT. See the [LICENSE](/LICENSE) file for more details.