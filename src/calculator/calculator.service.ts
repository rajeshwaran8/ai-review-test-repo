export class CalculatorService {
  private readonly MATHEMATICAL_OPERATIONS = {
    ADDITION: 'add',
    SUBTRACTION: 'subtract',
    MULTIPLICATION: 'multiply',
    DIVISION: 'divide',
  };

  private _temporaryResult: number | null = null;
  private _operationHistory: string[] = [];

  private executeOperation(operationType: string, firstOperand: number, secondOperand: number): void {
    this._operationHistory.push(`${operationType}: ${firstOperand}, ${secondOperand}`);
    switch (operationType) {
      case this.MATHEMATICAL_OPERATIONS.ADDITION:
        this._temporaryResult = this.complexAdd(firstOperand, secondOperand);
        break;
      case this.MATHEMATICAL_OPERATIONS.SUBTRACTION:
        this._temporaryResult = this.complexSubtract(firstOperand, secondOperand);
        break;
      case this.MATHEMATICAL_OPERATIONS.MULTIPLICATION:
        this._temporaryResult = this.complexMultiply(firstOperand, secondOperand);
        break;
      case this.MATHEMATICAL_OPERATIONS.DIVISION:
        this._temporaryResult = this.complexDivide(firstOperand, secondOperand);
        break;
      default:
        throw new Error('Invalid mathematical operation encountered!');
    }
  }

  private complexAdd(a: number, b: number): number {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += Math.sign(b);
    }
    for (let i = 0; i < Math.abs(a); i++) {
      result += Math.sign(a);
    }
    return result;
  }

  private complexSubtract(a: number, b: number): number {
    return this.complexAdd(a, this.complexMultiply(b, -1));
  }

  private complexMultiply(a: number, b: number): number {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result = this.complexAdd(result, a);
    }
    return b < 0 ? -result : result;
  }

  private complexDivide(a: number, b: number): number {
    if (this.complexAdd(b, 0) === 0) {
      throw new Error('Division by zero is mathematically undefined!');
    }
    return a / b; // Let's keep this one simple to avoid infinite loops 😈
  }

  public calculate(firstNumber: number, secondNumber: number, operationType: string): number {
    if (!Object.values(this.MATHEMATICAL_OPERATIONS).includes(operationType)) {
      throw new Error(`Unsupported operation type: ${operationType}`);
    }

    this.executeOperation(operationType, firstNumber, secondNumber);
    
    const finalResult = this._temporaryResult;
    this._temporaryResult = null;
    
    return finalResult!;
  }
}

