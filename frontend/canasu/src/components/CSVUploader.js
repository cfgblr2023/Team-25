import React, { useState } from "react";
import "../styles/csv_uploader.css";

const CSVUploader = () => {
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const rows = contents.split("\n");

      // Parsing CSV data
      const data = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].split(",");
        data.push(row);
      }

      setCSVData(data);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <div className=" d-flex justify-content-center">
        {csvData.length > 0 && (
          // <table>
          //   <thead>
          //     <tr>
          //       {csvData[0].map((header, index) => (
          //         <th key={index}>{header}</th>
          //       ))}
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {csvData.slice(1).map((row, index) => (
          //       <tr key={index}>
          //         {row.map((cell, cellIndex) => (
          //           <td key={cellIndex}>{cell}</td>
          //         ))}
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
          <div className=" w-75 p-3">
            <table class="table table-striped table-sm border border-dark ">
              <thead>
                <tr>
                  {csvData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.slice(1).map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* <button type="file" accept=".csv" class="btn btn-primary" onClick={handleFileUpload}>Choose File</button> */}

      
    </div>
  );
};

export default CSVUploader;
