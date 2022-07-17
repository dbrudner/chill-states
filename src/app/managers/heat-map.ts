class HeatMap {
  private google: any;

  constructor() {
    this.google = (window as any).google;

    this.google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: process.env.MAPS_KEY,
    });
  }
}
