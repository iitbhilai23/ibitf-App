// Common/TableExports.js
import React from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const TableExports = ({ data = [], columns = [], labelMap = {}, filename = "export" }) => {
  const downloadExcel = () => {
    const wsData = [columns.map(c => labelMap[c] || c)];
    data.forEach(row => {
      wsData.push(columns.map(c => row[c] ?? ""));
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };

  const downloadCSV = () => {
    const csvRows = [];
    csvRows.push(columns.map(c => `"${(labelMap[c] || c).replace(/"/g,'""')}"`).join(","));
    data.forEach(row => {
      const rowStr = columns.map(c => {
        const val = row[c] ?? "";
        return `"${String(val).replace(/"/g,'""')}"`;
      }).join(",");
      csvRows.push(rowStr);
    });
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const head = [columns.map(c => labelMap[c] || c)];
    const body = data.map(row => columns.map(c => String(row[c] ?? "")));
    autoTable(doc, { head, body, startY: 10, styles: { fontSize: 8 } });
    doc.save(`${filename}.pdf`);
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={downloadExcel} style={btnStyle}>Excel</button>
      <button onClick={downloadCSV} style={btnStyle}>CSV</button>
      <button onClick={downloadPDF} style={btnStyle}>PDF</button>
    </div>
  );
};

const btnStyle = {
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid rgba(15,23,42,0.06)",
  background: "#fff",
  cursor: "pointer",
  fontWeight: 600
};

export default TableExports;
