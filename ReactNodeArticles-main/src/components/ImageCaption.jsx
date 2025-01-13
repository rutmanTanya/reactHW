import React from "react";

function ImageWithCaption({ src, caption }) {
    return (
        <div style={{ textAlign: "center" }}>
            {src ? (
                <img src={src} alt={caption} style={{ maxWidth: "100%" }} />
            ) : (
                <p>Image not available</p>
            )}
            <p>{caption}</p>
        </div>
    );
}

export default ImageWithCaption;
