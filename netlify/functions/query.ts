import { Handler } from "@netlify/functions";
import * as records from "../../data/records/index";

const handler: Handler = async (event, context) => {
  const { numerator, denominator } =
    event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify({
      numerator: records[numerator],
      denominator: records[denominator],
    }),
  };
};

export { handler };
