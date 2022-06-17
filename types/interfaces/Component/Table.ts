export interface TableColumn<T = any> {
  title: string;
  key: string;
  dataType?: "numbering";
  render?: (data: T, index: number) => void;
}

export interface TableProps {
  data: any[];
  columns: TableColumn[];
}
