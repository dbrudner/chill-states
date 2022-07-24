import { sortBy } from "lodash";

/**
 *
 * @param record map of state string abbreviations to numbers
 * @returns key value pair record object, where keys are state string abbreviations,
 * and values are a descending rank starting at 0 for the record passed in
 */
export default function createRankRecord(
  record: Record<string, number>
): Record<string, number> {
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
}
