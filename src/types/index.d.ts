export {};

interface IData {
	poolsByState: Record<string, number>;
	geoJson: any;
}

declare global {
	interface Window {
		__DATA__: IData;
	}
}
