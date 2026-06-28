import { useState, useEffect } from "react";
import loader from "../images/pre-loader.png";
import "../Styles/Preloader.css";

export default function Preloader({ onEnter, assetsArr }) {
  const [progress, setProgress] = useState(0);
  const assetsToPreload = assetsArr.length > 0 ? assetsArr : [];

  useEffect(() => {
    let loadedAssets = 0;

    const isImage = (src) => /\.(png|jpe?g|gif|svg|webp)$/i.test(src);
    const isFont = (src) => /\.(woff2?|ttf|otf|eot)$/i.test(src); 

    const preloadAsset = (src) => {
      return new Promise((resolve, reject) => {
        if (isImage(src)) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedAssets++;
            setProgress((loadedAssets / assetsToPreload.length) * 100);
            resolve(img);
          };
          img.onerror = reject;
        } 
        else if (isFont(src)) {
          const fontName = src.split("/").pop().split(".")[0];

          const font = new FontFace(fontName, `url(${src})`, { display: 'swap' });
          
          font.load()
            .then((loadedFace) => {
              document.fonts.add(loadedFace);
              loadedAssets++;
              setProgress((loadedAssets / assetsToPreload.length) * 100);
              resolve(loadedFace);
            })
            .catch(reject);
        } 
        else {
          reject(new Error("Unsupported asset type: " + src));
        }
      });
    };

    Promise.all(assetsToPreload.map(preloadAsset))
      .then(() => {
        onEnter();
      })
      .catch((err) => {
        console.error("Error preloading assets:", err);
        onEnter();
      });
  }, []);

  return (
    <div className="preloader">
      <div className="loadingContainer">
        <img src={loader} alt="Loading..." className="loader" />
        <div className="percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}