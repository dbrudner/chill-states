import { Handler } from "@netlify/functions";
import * as records from "../../data/records/index";

function mapSourcesToData(sources: string[]) {
  let result = {};
  console.log({ sources });
  for (const source of sources) {
    // Need to be careful -- shouldn't be passing query params directl into bracket notation like this
    result[source] = records[source];
  }
  return result;
}

import { sortBy } from "lodash";

const handler: Handler = async (event) => {
  const sources =
    event.queryStringParameters?.sources?.split(",") || [];
  if (!sources) return { statusCode: 500 };

  // passing data straight through from query params here is a security risk --
  // I'm pretty sure this allows remote code execution on the server-side
  const response = {};
  for (const source of sources) {
    response[source] = records[source];
  }

  // sources: mapSourcesToData(sources),
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export { handler };
