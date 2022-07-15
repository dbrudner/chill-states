function mapDataToPerCapita(
  dataPerState: Record<string, number>,
  populationByState: Record<string, number>
) {
  const dataEntries = Object.entries(dataPerState);
  const popEntries = Object.entries(populationByState);
  let perCapitaData = {};
}
