import React, { useState } from "react";
import Papa from "papaparse";

const CsvFileAnother = () => {
  const [data, setData] = useState([]);
  const [columnArray, setColumnArray] = useState([]);
  const [values, setValues] = useState([]);

  const handleChange = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const columnArray = [];
        const valueArray = [];

        // console.log(result.data);
        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valueArray.push(Object.values(d));
        });

        // setData(result.data);
        setColumnArray(columnArray[0]);
        setValues(valueArray);
      },
    });
  };
  return (
    <div>
      <input type="file" name="file" accept=".csv" onChange={handleChange} />

      <br />

      <table className="table">
        <thead>
          <tr>
            {columnArray.map((ele, i) => (
              <th key={i}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((ele, i) => (
            <tr key={i}>
              {ele.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvFileAnother;
