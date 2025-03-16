import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useUser } from "@clerk/clerk-react";
import {setUser,logout} from '../store/userSlice'
import { Button } from "./ui/button";

const Navbar = () => { 
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const dispatch=useDispatch();
  const {user,isLoaded}=useUser();
  const navigate=useNavigate();
  useEffect(() => {
    // Hide the header for sign-in and sign-up pages
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    if (user) {
        const primaryEmail = user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : "";
        dispatch(setUser({ id: user.id, emailAddresses: [primaryEmail] }));
      } else {
        dispatch(logout());
      }
    }, [location, user, dispatch]);

    if (!isLoaded) return null;

    const handleSignInClick:()=>any=()=>{
        navigate("/sign-in")
    }

  return (
    <div className="flex items-center justify-between py-4 px-2">
      <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Navbar
      </p>
       <nav className="text-zinc-400">
        <SignedOut>
           <Button onClick={handleSignInClick}>
                Sign In
            </Button> 
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
     
    
  );
}
export default Navbar;

