import React, { useState } from "react";
import Papa from "papaparse";

const CsvFileToTable = () => {
  const [data, setData] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <div className="csvFileOuter">
      <input type="file" accept=".csv" onChange={handleUpload} />

      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Series_reference</th>
              <th>Period</th>
              <th>Data_value</th>
              <th>Suppressed</th>
              <th>STATUS</th>
              <th>UNITS</th>
              <th>Magnitude</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i}>
                <td>{ele.Series_reference}</td>
                <td>{ele.Period}</td>
                <td>{ele.Data_value}</td>
                <td>{ele.Suppressed}</td>
                <td>{ele.STATUS}</td>
                <td>{ele.UNITS}</td>
                <td>{ele.Magnitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default CsvFileToTable;
