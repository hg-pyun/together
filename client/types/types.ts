export interface Record {
  date: Date;
  value: number;
  type: RecordType;
  text: string;
}

export enum RecordType {
  Medicine = 'medicine',
  Food = 'Food',
  Walk = 'Walk',
}

export interface SequenceChartData {
  x: Date;
  y: number;
}

export enum ColorType {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Warning = 'warning',
}