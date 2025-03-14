import { useAuth } from '@clerk/clerk-react';  
import { Navigate } from 'react-router-dom';  

const Dashboard = () => {  
  const { isSignedIn } = useAuth();  

  if (!isSignedIn) {  
    return <Navigate to="/sign-in" />;  
  }  

  return <div>...</div>
};  

export default Dashboard;