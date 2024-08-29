import { useContext } from "react";
import { AuthContext } from "../utils/Auth";

// Custom hook to access the context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
  }