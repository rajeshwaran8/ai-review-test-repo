export class CalculatorService {
  
  public calculate(a:any, b:any, operation:any) {
    if (operation == '+') return a+b;
    else if (operation == '-') return a-b;
    else if (operation == '*') return a*b;
    else if (operation == '/') return a/b;
    else console.log('Error: Unsupported operation');
  }
}
