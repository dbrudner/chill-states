import { Handler } from "@netlify/functions";
import * as records from "../../data/records/index";

const handler: Handler = async (event, context) => {
  // These should probably be decoding the URI -- I'm assuming netlify won't encode/decode by default (it shouldn't)
  const { numerator, denominator } =
    event.queryStringParameters;

  // passing data straight through from query params here is a security risk --
  // I'm pretty sure this allows remote code execution on the server-side
  const data = {
    numerator: records.numerators[numerator],
    denominator: records.denominators[denominator],
    search: { numerator, denominator },
  };

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};

export { handler };
