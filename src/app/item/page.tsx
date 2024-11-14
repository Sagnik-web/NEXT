import React from 'react'



// export async function getServerSideProps(context:any) {
//     // Access query parameters from the context
//     const { name } = context.query;
  
//     // You can perform any server-side logic here (e.g., fetching data)
//     // For example, you could fetch item data from a database based on the name
  
//     // If you don't have a 'name' query, you can set a default value or redirect
//     if (!name) {
//       return {
//         redirect: {
//           destination: '/error', // Redirect to an error page or another route
//           permanent: false,
//         },
//       };
//     }
  
//     // Return data as props to the page
//     return {
//       props: {
//         name, // Pass the query parameter as a prop
//       },
//     };
//   }


const page = ({name}:{name:String }) => {
  return (
    <div>
        ItemS
    </div>
  )
}

export default page