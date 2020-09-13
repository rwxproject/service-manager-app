export interface Release {
  appVersion: string;
  chartName: string;
  chartVersion: string;
  description: string;
  name: string;
  namespace: string;
  revision: number;
  status: string;
  updated: Date;
}
