import { useState } from "react";
import "./App.css";
import axios from "axios";
import { saveAs } from "file-saver";

// component
const App = () => {
  // state
  const [state, setState] = useState({
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
  });

  // on change event handler
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  // pdf download
  const downloadPdf = () => {
    axios.post("/create-pdf", state);
  };

  return (
    <div className="App">
      <input type="text" name="name" placeholder="Name" onChange={onChange} />
      <input
        type="number"
        name="receiptId"
        placeholder="Receipt ID"
        onChange={onChange}
      />
      <input
        type="number"
        name="price1"
        placeholder="Price 1"
        onChange={onChange}
      />
      <input
        type="number"
        name="price2"
        placeholder="Price 2"
        onChange={onChange}
      />

      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

export default App;
