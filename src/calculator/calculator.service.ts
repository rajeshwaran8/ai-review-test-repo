export class CalculatorService {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }

  calculate(a: number, b: number, operation: string) {
    switch (operation) {
      case "add":
        return this.add(a, b);
      case "subtract":
        return this.subtract(a, b);
      case "multiply":
        return this.multiply(a, b);
      case "divide":
        return this.divide(a, b);
    }
  }
}

