import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../domain/iproduct';
@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  //exp lamdba:
 /* const double = function()x {return 2 * x};
  const double_lambda = x => {const y = 3; return 2*x};*/

  transform(value: IProduct[], filerBy: string): IProduct[] {
    filerBy = filerBy ? filerBy.toLocaleLowerCase() : null;
    return filerBy ? value.filter((prod:IProduct) => prod.productName.toLowerCase().indexOf(filerBy) !== -1) : value;
  }

}
