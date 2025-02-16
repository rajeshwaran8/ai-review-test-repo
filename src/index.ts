import express, { Request, Response } from "express";
import { CalculatorService } from "./calculator/calculator.service";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const calculatorService = new CalculatorService();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/add", (req: Request, res: Response) => {
  const { a, b, operation } = req.query;
  const result = calculatorService.calculate(Number(a), Number(b), operation as string);
  res.json({ result });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
