// function mapTooltipHtml(e) {
// 	const [state, amount] = e;
// }
import poolsByStateData from "../data/pools-by-state";
import popByState from "../data/pop-by-state";
import stateNames from "../data/state-names";
console.log({ poolsByStateData, popByState });
export function mapPoolbyStateToChartData(
  googleChartData: Record<string, number>
): [string, number, string][] {
  return Object.entries(googleChartData).map((e) => {
    const [state, amount] = e;
    const toolTipHtml = `<div>
    <ul><li>People: ${popByState[state] || ""}</li>
        <li>Pools: ${poolsByStateData[state] || ""}
    </ul>
    </div>`;
    return [state, amount, toolTipHtml];
  });
}

export function getRange(numbers: number[]): {
  minValue: number;
  maxValue: number;
} {
  return {
    minValue: numbers.reduce(
      (n, m) => Math.min(n, m),
      numbers[0]
    ),
    maxValue: numbers.reduce((n, m) => Math.max(n, m), 0),
  };
}
