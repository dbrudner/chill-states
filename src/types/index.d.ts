export {};

interface IData {
	poolsByState: Record<string, number>;
}

declare global {
	interface Window {
		__DATA__: IData;
	}
}
