import React, { useState } from "react";
import Balance from "./Components/Balance.jsx";
import ExpenseSheet from "./Components/ExpenseSheet";
import NewTransaction from "./Components/NewTransaction";
import Transactions from "./Components/Transactions";
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#fff",
    padding: 10,
    boderRadius: 20,
    width: 500,
    "&> *": { 
      padding: 10,
    },
  },
});

function App() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Books", amount: -20 },
    { id: 2, text: "Flowers", amount: -10 },
    { id: 3, text: "Salary", amount: 300 },
    { id: 4, text: "Clothes", amount: -20 },
    { id: 5, text: "Grocries", amount: -20 },
  ]);

  const addTransactions = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  const deleteTransactions = (id) => {
    setTransactions(
      transactions.filter((transactions) => transactions.id !== id)
    );
  };

  return (
    <div className="App">
      <Typography stlyes={{ marginBottom: 20  , fontWeight : 1000 , }}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Balance transactions={transactions} />
        <ExpenseSheet transactions={transactions} />
        <Transactions
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <NewTransaction addTransactions={addTransactions} />
      </Box>
    </div>
  );
}

export default App;
