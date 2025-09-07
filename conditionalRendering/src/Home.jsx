function Profile() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f9f9ff, #e0e7ff)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
    },
    card: {
      width: "400px",
      padding: "30px",
      borderRadius: "16px",
      backgroundColor: "#fff",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    avatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "20px",
      border: "3px solid #4f46e5",
    },
    name: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: "8px",
    },
    email: {
      fontSize: "16px",
      color: "#4a5568",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#4f46e5",
      color: "#fff",
      cursor: "pointer",
      margin: "5px",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg"
          alt="Profile Avatar"
          style={styles.avatar}
        />
        <h2 style={styles.name}>John Doe</h2>
        <p style={styles.email}>johndoe@example.com</p>

        <div>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4f46e5")}
          >
            Edit Profile
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4f46e5")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
