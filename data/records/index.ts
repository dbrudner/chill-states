import * as denominators from "./denominators";
import * as numerators from "./numerators";
import * as meta from "./meta";
import { sortBy } from "lodash";

const createRankMap = (record: Record<string, number>) => {
  let ranks = {};
  sortBy(
    Object.entries(record).map((r) => {
      const [state, value] = r;
      return { state, value };
    }),
    "value"
  )
    .reverse()
    .forEach((e, i) => (ranks[e.state] = i));
  return ranks;
};

const toBeSorted = {
  ...denominators,
  ...numerators,
};

let sortedRecords = {};
for (const r of Object.keys(toBeSorted)) {
  sortedRecords[r] = createRankMap(toBeSorted[r]);
}

export { denominators, numerators, meta, sortedRecords };
