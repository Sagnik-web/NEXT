'use client'
import React,{useState} from 'react'
import Spreadsheet, { CellBase, Matrix } from "react-spreadsheet";
import * as XLSX from 'xlsx';

function page() {

    const [products, setProducts] = useState<any[]>([]);
    const [fileName, setFileName] = useState<string>('');
  
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = new Uint8Array(event.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setProducts(jsonData);
        };
        reader.readAsArrayBuffer(file);
      }
    };
  


    const [data, setData] = useState<Matrix<CellBase<any>>>([
        [
          {
            value: "redOnly + text-color",
            readOnly: true,
            className: "text-danger"
          },
          { value: "text-color", className: "text-danger" },
          { value: "readOnly", readOnly: true },
          { value: "readOnly + css", readOnly: true, className: "header-row" },
          { value: "css", className: "header-row" },
          { value: "no options" }
        ],
        [
          { value: "Strawberry" },
          { value: "Cookies" },
          { value: "Vanilla" },
          { value: "Chocolate" },
          { value: "Citrus" },
          { value: "Green Apple" }
        ]
      ]);
    
      const arrayOfArrays = [
        // Add the header (keys) as the first row
       
        
        // Add the data rows
        ...products.map(item => (Object.values(item).map(el=>({'value':el}))))
      ];

    const onSubmit =()=>{
        console.log(fileName);
        
        console.log(products);
        console.log(arrayOfArrays);
        setData([...data,...arrayOfArrays])
    }



  return (
    <div>
      <input onChange={handleFileUpload}  accept=".xlsx, .xls" type="file"/>
      <button onClick={onSubmit}>Submit</button>

      <h2>Start editing to see some magic happen!</h2>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  )
}

export default page
