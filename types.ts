export interface SlideProps {
  isActive: boolean;
}

export interface ChartData {
  name: string;
  value: number;
  fullMark?: number;
}

export enum TrackType {
  MATH = 'Matemática',
  PORTUGUESE = 'Língua Portuguesa'
}
