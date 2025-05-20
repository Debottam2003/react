import React, { useEffect } from "react";
import { useState } from "react";

function Profile() {
  const [previewurl, setPreviewUrl] = useState(null);
  const [filedata, setFileData] = useState(null);
  function handleProfilePicture(event) {
    let file = event.target.files[0];
    setFileData(file);
    if (file) {
      const objecturl = URL.createObjectURL(file);
      console.log("Profile picture URL:", objecturl);
      setPreviewUrl(objecturl);
    }
  }
  // useEffect() can return a function. This returned function is called the "cleanup" function.
  // React automatically calls this cleanup function:
  // before running the effect again (on dependency change),
  // and when the component unmounts.
  useEffect(() => {
    if (previewurl) {
      return () => URL.revokeObjectURL(previewurl);
    }
  }, [previewurl]);

  return (
    <form
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        background: "#fafafa",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <img
          src={previewurl || "https://via.placeholder.com/100"}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "12px",
            border: "2px solid #1976d2",
          }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="name"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="bio"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          Bio:
        </label>
        <textarea
          id="bio"
          name="bio"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minHeight: "60px",
          }}
        ></textarea>
      </div>
      <label
        htmlFor="profilepic"
        style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
      >
        ProfilePicture:
      </label>
      <input
        type="file"
        id="profilepic"
        accept="image/*"
        onChange={handleProfilePicture}
        style={{ marginBottom: "20px" }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Save Profile
      </button>
    </form>
  );
}

export default Profile;
