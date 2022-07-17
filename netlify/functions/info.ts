import { Handler } from "@netlify/functions";
import * as numerators from "../../data/records/numerators";
import * as denominators from "../../data/records/denominators";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      queryStringParameters: event.queryStringParameters,
      numerators: Object.keys(numerators),
      denominators: Object.keys(denominators),
    }),
  };
};

export { handler };
