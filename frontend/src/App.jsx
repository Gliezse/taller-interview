import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [submittedTransaction, setSubmittedTransaction] = useState(null);
  const [error, setError] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    if (!amount || !description) return;

    setError(null);

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, amount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSubmittedTransaction(data);
        setDescription("");
        setAmount("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="submitter">
      <h2>Transaction Submitter</h2>
      <form onSubmit={onFormSubmit}>
        <div className="field-container">
          <div className="field">
            <input
              type="text"
              placeholder="Description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="number"
              placeholder="Amount"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Submit Transaction
        </button>

        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {submittedTransaction && (
          <div className="submitted-transaction">
            <h3>Submitted Transaction:</h3>
            <p>
              Description:
              <br />
              {submittedTransaction.description}
            </p>
            <p>
              Amount:
              <br />$ {submittedTransaction.amount}
            </p>
          </div>
        )}
      </form>

      <button
        className="redirect-button"
        onClick={() => {
          window.location.href = "http://localhost:3000/transactions";
        }}
      >
        View submitted transactions
      </button>
    </div>
  );
}

export default App;
