import { useState, useEffect } from "react";
import loader from "../images/pre-loader.png";
import "../Styles/Preloader.css";

export default function Preloader({ onEnter, assetsArr = [] }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!assetsArr.length) {
      onEnter();
      return;
    }

    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      setProgress((loadedAssets / assetsArr.length) * 100);
    };

    const isImage = (src) =>
      typeof src === "string" &&
      (src.startsWith("data:image/") ||
        /\.(png|jpe?g|gif|svg|webp|avif)$/i.test(src));

    const isFont = (src) =>
      typeof src === "string" &&
      /\.(woff2?|ttf|otf|eot)$/i.test(src);

    const preloadAsset = (src) =>
      new Promise((resolve) => {
        if (isImage(src)) {
          const img = new Image();

          img.onload = () => {
            updateProgress();
            resolve();
          };

          img.onerror = () => {
            console.warn("Failed to preload image:", src);
            updateProgress();
            resolve();
          };

          img.src = src;
        } else if (isFont(src)) {
          const fontName = src.split("/").pop().split(".")[0];

          const font = new FontFace(fontName, `url(${src})`);

          font
            .load()
            .then((loadedFace) => {
              document.fonts.add(loadedFace);
              updateProgress();
              resolve();
            })
            .catch(() => {
              console.warn("Failed to preload font:", src);
              updateProgress();
              resolve();
            });
        } else {
          updateProgress();
          resolve();
        }
      });

    Promise.all(assetsArr.map(preloadAsset)).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onEnter();
        });
      });
    });
  }, [assetsArr, onEnter]);

  return (
    <div className="preloader">
      <div className="loadingContainer">
        <img src={loader} alt="Loading..." className="loader" />
        <div className="percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}