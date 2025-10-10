import React, { useEffect } from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Open Clerk modal on Home page
      openSignIn({
        afterSignInUrl: "/", // redirect to Home after sign-in
        redirectUrl: "/", // fallback
      });
      navigate("/"); // ensure user stays on Home while popup opens
    }
  }, [user, openSignIn, navigate]);

  if (!user) return null; // Hide protected content until logged in

  return <>{children}</>;
};

export default ProtectedRoute;
