import { useState } from "react";

const CSVReader = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split("\n").map(row => row.split(","));
      setCsvData(rows);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table border="1">
        <thead>
          <tr>{csvData[0]?.map((header, index) => <th key={index}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {csvData.slice(1).map((row, index) => (
            <tr key={index}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVReader;
