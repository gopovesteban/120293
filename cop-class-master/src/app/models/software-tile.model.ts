import { SoftwareToolVersionModel } from './software-tool-version.model';

export class SoftwareTileModel {
  constructor(
    public name: string,
    public iconPath: string,
    public compliancy: string,
    public currentVersion: string,
    public  versionsList: SoftwareToolVersionModel[] = []
  ) {}
}
