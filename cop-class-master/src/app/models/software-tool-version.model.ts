export class SoftwareToolVersionModel {
  constructor(
    public name: string,
    public compliancy: string,
    public currentVersion: string,
    public qualifiedDate: string,
    public resultsLink: string
  ) {}
}
