import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  getPercentage(num1, num2)  {
    let percent;
    num2 === 0 ? percent = 0 : percent = Math.round((num1*100) / num2);
    return percent;
  }
}
