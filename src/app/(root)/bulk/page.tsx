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
        //   console.log(worksheet);
          
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

             // Process the data to replace blank valu

          setProducts(jsonData);
        };
        reader.readAsArrayBuffer(file);
      }
    };
  


    const [data, setData] = useState<Matrix<CellBase<any>>>([
        [
            {
                value: "Marks",
                readOnly: true,
                className: "text-danger"
              },
          {
            value: "Question",
            readOnly: true,
            className: "text-danger"
          },
          {
            value: "Answer",
            readOnly: true,
            className: "text-danger"
          },
          { value: "option_1",readOnly: true, className: "text-danger" },
          { value: "option_2", readOnly: true },
          { value: "option_3", readOnly: true, className: "header-row" },
          { value: "option_4", readOnly: true },
          { value: "option_5", readOnly: true, className: "header-row" },
          { value: "option_6", readOnly: true, className: "header-row" },
         
        ]
      ]);

      // Remove duplicates based on 'Name'
      const uniqueData = products.filter((value, index, self) => 
        index === self.findIndex((t) => t.Name === value.Name)
      );
      const dataPost = uniqueData
      
      const arrayOfArrays = [
        // Add the header (keys) as the first row
       
        
        // Add the data rows
        ...uniqueData.map(item => (Object.entries(item).map(([key,val])=>({'value':item[key]}))))
      ];

      
      

    const onSubmit =async()=>{
        console.log(fileName);
        

       
        //   console.log(uniqueData);

       
        
        setData([...data,...arrayOfArrays])
        dataPost.map(el=>((el.Chemistry == 'NA'&& delete el.Chemistry)|| (el.Physics == 'NA'&& delete el.Physics)))
        console.log(products);
        console.log(dataPost);
        
        console.log(uniqueData);
        
        console.log(dataPost);
        
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
