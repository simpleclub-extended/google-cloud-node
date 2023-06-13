// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

function main() {
  // [START rapidmigrationassessment_quickstart]

  // Imports the Rapidmigrationassessment library
  const {RapidMigrationAssessmentClient} =
    require('@google-cloud/rapidmigrationassessment').v1;

  // Instantiates a client
  const rapidMigrationAssessmentClient = new RapidMigrationAssessmentClient();

  async function quickstart() {
    const project = await rapidMigrationAssessmentClient.getProjectId();

    // List supported locations
    const locationsIterable =
      await rapidMigrationAssessmentClient.listLocationsAsync({
        name: `projects/${project}`,
      });

    const locations = [];
    for await (const response of locationsIterable) {
      console.log(`Supported location: ${response.name}`);
      locations.push(response.name);
    }

    for (const location of locations) {
      // Construct request
      const request = {
        parent: location,
      };

      // Run request
      const iterable = await rapidMigrationAssessmentClient.listCollectorsAsync(
        request
      );
      console.log(`Listing collectors for location ${location}:`);
      let count = 0;
      for await (const response of iterable) {
        console.log(response);
        ++count;
      }
      console.log(`${count} collectors found.`);
    }
  }

  quickstart();
  // [END rapidmigrationassessment_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));