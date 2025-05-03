import React, { useRef, useEffect, useState } from "react";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  function sendFile() {
    const imageFile = {
      image: photo,
    };
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageFile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };
    startCamera();
  }, []);

  const takeSnapshot = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to base64 image
    const imageData = await canvas.toDataURL("image/png");
    console.log("Image Data:", imageData);
    setPhoto(imageData);
    // Stop all video tracks
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  };

  return (
    <div style={{ padding: "16px" }}>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "500px" }} />
      <br />
      <button
        onClick={takeSnapshot}
        style={{
          marginTop: "8px",
          padding: "8px 16px",
          backgroundColor: "#3B82F6",
          color: "white",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Take Snapshot
      </button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {photo && (
        <div style={{ marginTop: "16px" }}>
          <h3>Snapshot:</h3>
          <img
            src={photo}
            alt="Snapshot"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
      )}
      <button
        onClick={sendFile}
        style={{
          marginTop: "8px",
          padding: "8px 16px",
          backgroundColor: "#3B82F6",
          color: "white",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Send File
      </button>
    </div>
  );
};

export default CameraCapture;
