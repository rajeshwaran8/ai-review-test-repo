export class CalculatorService {
 
  public calculate(a:any,b:any,operation:any){
    switch(operation){
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: throw new Error('Unsupported operation');
    }
  }
}

