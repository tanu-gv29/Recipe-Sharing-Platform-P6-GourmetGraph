import { useEffect, useState } from "react";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login"; // Redirect if no token
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/auth/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setMessage(data.message);
        } else {
          alert("Unauthorized access!");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{message}</p>
      <button onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
