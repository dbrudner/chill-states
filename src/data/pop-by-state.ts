import population from "./population";
import stateNames from "./state-names";

let stateNameToAbbreviation = {};
const mapValuesToKeys = Object.entries(stateNames);
for (const e of mapValuesToKeys) {
  const [k, v] = e;
  stateNameToAbbreviation[k] = population[v];
}

export default stateNameToAbbreviation;
