# Taller/Paypal interview code challenge

## Requirements to run
- Node

## Running the app
### Running the backend
- Run the following commands to get the back end up and running
  ```sh
  cd backend
  npm install
  node index.js
  ```

### Running the frontend
- Run the following commands to get the front end up and running in a dev environment
  ```sh
  cd frontend
  npm install
  npm start
  ```
- Navigate into http://localhost:3000

## Testing the app
With both BE and FE running, you can submit as many transactions as you want. Clicking on the `View submitted transactions` button will take you to http://localhost:3001/transactions, where your browser will display the resulting json from GETting that route. There you can check that all the transactions you submit are recorded.
