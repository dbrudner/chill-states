import { Handler } from "@netlify/functions";
import * as meta from "../../data/meta";
import * as records from "../../data/records";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      meta,
      sources: Object.keys(records),
    }),
  };
};

export { handler };
