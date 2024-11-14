// app/element/[id]/page.tsx

'use client'; // Client-side component

import { useSearchParams, useParams } from 'next/navigation';

const ElementPage = () => {
  const searchParams = useSearchParams();
  
  // Access the query parameter 'name' from the URL
  const name = searchParams.get('name');


  const {id} = useParams()
  // You can get dynamic parameters from the URL like this:
//   const id = 'dynamic-id'; // You'll need to handle dynamic id differently in this case



  if (!name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Element ID: {id}</h1>
      <p>Item Name: {name}</p>
      
    </div>
  );
};

export default ElementPage;
