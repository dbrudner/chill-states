import { Handler } from "@netlify/functions";
import * as records from "../../data/records/index";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      url: event.queryStringParameters,
      event,
      context,
    }),
  };
};

export { handler };
