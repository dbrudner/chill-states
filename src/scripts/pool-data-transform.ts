// function mapTooltipHtml(e) {
// 	const [state, amount] = e;
// }

export function mapPoolbyStateToChartData(
  googleChartData: Record<string, number>
): [string, number, string][] {
  return Object.entries(googleChartData).map((e) => {
    const [state, amount] = e;
    return [state, amount, [state, amount].join(": ")];
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
