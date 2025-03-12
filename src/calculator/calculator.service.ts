export class CalculatorService {
  
  public calculate(a, b, operation) {
    if (operation == '+') return a+b;
    else if (operation == '-') return a-b;
    else if (operation == '*') return a*b;
    else if (operation == '/') return a/b;
    else console.log('Error: Unsupported operation');
  }
}
