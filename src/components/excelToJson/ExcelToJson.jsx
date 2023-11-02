import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import * as XLSX from "xlsx";

const ExcelToJson = () => {
  const [header, setHeader] = useState([]);
  const [col, setCol] = useState([]);
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    ExcelRenderer(file, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        setHeader(response.rows[0]);
        setCol(response.rows);
        setData(response.rows);
      }
    });
  };

  // const downloadFile = ({ data, fileName, fileType }) => {
  //   const blob = new Blob([data], { type: fileType });
  //   const a = document.createElement("a");
  //   a.download = fileName;
  //   a.href = window.URL.createObjectURL(blob);
  //   const clickEvt = new MouseEvent("click", {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true,
  //   });
  //   a.dispatchEvent(clickEvt);
  //   a.remove();
  // };

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
    XLSX.writeFile(workbook, "user.xlsx");
  };

  const downloadHandle = (e) => {
    e.preventDefault();
    downloadExcel(col);

    // const headerData = JSON.stringify(header);
    // const colData = JSON.stringify(col);

    // downloadFile({
    //   data: [...col].join("\n"),
    //   fileName: "user/.xls",
    //   fileType: "text/xls",
    // });
  };
  return (
    <div>
      <input type="file" name="file" id="file" onChange={handleChange} />
      <button className="btn btn-success" onClick={downloadHandle}>
        Download
      </button>

      <table className="table">
        <thead>
          <tr>
            {header.map((ele, i) => (
              <th key={i}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {col.slice(1).map((ele, i) => (
            <tr key={i}>
              {ele.map((data, j) => (
                <td key={j}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelToJson;
