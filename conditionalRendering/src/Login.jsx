import { useState } from "react";
import CustomHook from "./CustomHook";

function Login() {
  let { color, Handler } = CustomHook();
  const [error, setError] = useState("Wrong");
  function submitLogin(e) {
    e.preventDefault();
    // password
    // if wrong {
    // setError("wrong credential")
    // } else {
    // }
    setError("Right");
    Handler();
  }
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f0f4ff, #e0e7ff)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      width: "350px",
      padding: "40px",
      borderRadius: "16px",
      backgroundColor: "#fff",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #cbd5e0",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#4f46e5",
      color: "#fff",
      cursor: "pointer",
      marginTop: "10px",
      transition: "background 0.3s ease",
    },
    link: {
      marginTop: "15px",
      display: "block",
      fontSize: "14px",
      color: "#4f46e5",
      textDecoration: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={submitLogin} style={styles.card}>
        {error && <h3 style={{ color: color }}>{error}</h3>}
        <h2 style={styles.heading}>Login</h2>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4f46e5")}
        >
          Sign In
        </button>
        <a href="/signup" style={styles.link}>
          Don’t have an account? Sign up
        </a>
      </form>
    </div>
  );
}

export default Login;
