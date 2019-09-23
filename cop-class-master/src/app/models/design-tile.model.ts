import {DesignToolVersionModel} from './design-tool-version.model';

export class DesignTileModel {
  constructor(
    public name: string,
    public  tools: DesignToolVersionModel[] = []
  ) {}
}
