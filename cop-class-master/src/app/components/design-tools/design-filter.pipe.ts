import { Pipe, PipeTransform } from '@angular/core';
import {DesignToolVersionModel} from '../../models/design-tool-version.model';


@Pipe({
  name: 'designFilter'
})
export class DesignFilterPipe implements PipeTransform {
  transform(designTools: DesignToolVersionModel[], searchTerm: string): DesignToolVersionModel[] {
    if (!designTools || !searchTerm) {
      return designTools;
    }
    return designTools.filter(designTool => designTool.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
