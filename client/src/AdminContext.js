import { useState, createContext, useEffect } from "react";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((admin) => setAdmin(admin));
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminProvider };
