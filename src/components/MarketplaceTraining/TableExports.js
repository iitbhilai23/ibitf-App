import React from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../assets/logo/ibitf.png"; 
import styles from "./MarketplaceTraining.module.css"; 

const TableExports = ({ data, columns, labelMap, filename }) => {

  // Excel Export
  const downloadExcel = () => {
    const worksheetData = data.map((row) => {
      let filtered = {};
      columns.forEach((col) => {
        filtered[labelMap[col] || col] = row[col];
      });
      return filtered;
    });

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const img = new Image();
    img.src = logo;
    doc.addImage(img, "PNG", 10, 10, 35, 18);

    doc.setFontSize(16);
    doc.text(`${filename.toUpperCase()} REPORT`, 10, 40);

    const tableColumnHeaders = columns.map((col) => labelMap[col] || col);
    const tableRows = data.map((row) =>
      columns.map((col) => String(row[col]))
    );

    autoTable(doc, {
      startY: 50,   
      head: [tableColumnHeaders],
      body: tableRows,
    });

    doc.save(`${filename}.pdf`);
  };

  return (
    <div className={styles.exportButtons}>
      <button
        className={`${styles.btn} ${styles.excelBtn}`}
        onClick={downloadExcel}
      >
        Excel
      </button>

      <button
        className={`${styles.btn} ${styles.pdfBtn}`}
        onClick={downloadPDF}
      >
        PDF
      </button>
    </div>
  );
};

export default TableExports;
