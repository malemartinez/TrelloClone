import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class DataSourceProduct extends DataSource<PeriodicElement>{

  data = new BehaviorSubject<PeriodicElement[]>([]);
  originalData: PeriodicElement[] = [];

  override connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  initElements(periodicElement: PeriodicElement[]){
    this.originalData = periodicElement;
    this.data.next(periodicElement)
  }

  getTotal(){
    const elements = this.data.getValue(); //Aqui nos trae todos los valores del array
    return elements
    .map(item => item.weight)
    .reduce((weight, total) => weight + total, 0)
  }

  update(position: PeriodicElement['position'], changes: Partial<PeriodicElement>){
    const elements = this.data.getValue();
    const elementIndex = elements.findIndex(item => item.position === position)
    if(elementIndex != -1){
      elements[elementIndex] = {
        ...elements[elementIndex],
        ...changes
      }
      this.data.next(elements)
    }
  }

  find(query:String){
   const elementFilter = this.originalData.filter(item => {
    const word = `${item.name}-${item.position}-${item.weight}`;
    return word.toLowerCase().includes(query.toLowerCase())
   } );
    this.data.next(elementFilter)
  }

  override disconnect(collectionViewer: CollectionViewer): void {}

}
