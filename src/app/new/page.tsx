import { useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = ({ dataFromServer }:{ dataFromServer:any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Function to make the API call and redirect
  const handleRedirect = async () => {
    setIsLoading(true);

    // Example API call (you can replace this with any API you need)
    const response = await fetch('/api/my-endpoint');
    const result = await response.json();

    // If the API call is successful, redirect to another page
    if (result.success) {
      router.push('/destination');  // Redirect to the 'destination' page
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Data from Server: {JSON.stringify(dataFromServer)}</p>

      <button onClick={handleRedirect} disabled={isLoading}>
        {isLoading ? 'Redirecting...' : 'Go to Destination'}
      </button>
    </div>
  );
};



// Server-side rendering with getServerSideProps
export async function getServerSideProps(context:any) {
  // Make the API call on the server side
  const res = await fetch('https://api.example.com/data');  // Replace with your actual API
  const data = await res.json();

  // Return the fetched data as props to the component
  return {
    props: {
      dataFromServer: data,  // This will be passed to the component as props
    },
  };
}

export default HomePage;