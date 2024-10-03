import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Enter description and value!");
        return;
      } else if (amount < 1) {
        alert("The value must be positive!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };
  
    return (
      <>
        <C.Container>
          <C.InputContent>
            <C.Label>Description</C.Label>
            <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
          </C.InputContent>
          <C.InputContent>
            <C.Label>Value</C.Label>
            <C.Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </C.InputContent>
          <C.RadioGroup>
            <C.Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <C.Label htmlFor="rIncome">Input</C.Label>
            <C.Input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <C.Label htmlFor="rExpenses">Output</C.Label>
          </C.RadioGroup>
          <C.Button onClick={handleSave}>Add</C.Button>
        </C.Container>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
      </>
    );
  };
  
export default Form;