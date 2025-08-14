import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Gallary.css";

// All unique Cloudinary image URLs (duplicates removed)
const photoList = [
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160859/IMG_20250617_122136_vybgov.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160852/IMG_20250113_121644_kiexpy.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160852/IMG_20250617_122900_qrgjwd.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160849/IMG_20250617_122902_ad1amt.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160849/IMG_2002_k31p91.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160846/IMG-20250113-WA0001_iwpzxy.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160845/IMG_20250617_122850_hjqmld.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160844/IMG_2017_nlnloy.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160844/IMG_2016_srsl7j.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160840/20250403_073710_dkma31.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160840/IMG_0187_pywgds.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160839/IMG_0175_gcoxpc.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160839/IMG_0179_xx5xmx.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160837/IMG_0123_jf1kfl.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160836/IMG_0174_ham6xl.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160836/IMG_0120_jbexh9.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160836/20250403_073703_frwtxc.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160836/IMG_0118_xlqk4e.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160835/IMG_0119_vzwhn1.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160834/IMG_0014_tmvapy.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160833/20250403_190055_tdlaj4.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160833/IMG_0013_ryk0je.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160832/IMG_0012_xhvi5c.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160830/20250403_190106_jit8il.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160830/IMG_0007_eu9y6p.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160829/IMG_0006_r2azae.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160828/IMG_0004_pgffwg.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160826/20250403_073222_qoypby.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160825/20250402_195051_sd4swh.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160821/20250402_195045_ndqkgp.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160824/SMR_0397_qmmgbn.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160824/20250403_073348_zle6ur.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160815/IMG-20250113-WA0018_mgrnam.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160814/IMG-20250113-WA0016_yw5a73.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160814/IMG-20250113-WA0015_slawcu.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160814/IMG-20250113-WA0013_ld356d.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160813/IMG-20250113-WA0012_dd4aoj.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160813/IMG-20250113-WA0010_xdcqnh.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160813/IMG-20250113-WA0011_e4meoz.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160813/IMG-20250113-WA0009_yrxoda.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160813/IMG-20250113-WA0007_tmz8zf.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160812/IMG-20250113-WA0005_w87xdi.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160812/IMG-20250113-WA0002_xupvgo.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160812/IMG-20250113-WA0006_qm12aw.jpg",
  "https://res.cloudinary.com/dncosrakg/image/upload/v1755160812/IMG-20250113-WA0008_qktul3.jpg"
];




// Cloudinary photos


export default function App() {
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  useEffect(() => {
    photoList.forEach((photo, index) => {
      setTimeout(() => {
        setVisiblePhotos((prev) => [...prev, photo]);
      }, index * 200); // Slight delay for chatbot effect
    });
  }, []);

  // Split into 2 columns
  const leftColumn = visiblePhotos.filter((_, index) => index % 2 === 0);
  const rightColumn = visiblePhotos.filter((_, index) => index % 2 !== 0);

  return (
    <div className="gallery-wrapper">
      {/* Left column */}
      <div className="gallery-column">
        {leftColumn.map((photo, i) => (
          <motion.div
            key={photo}
            className="photo-card"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.6)"
            }}
          >
            <img src={photo} alt={`Photo ${i + 1}`} />
          </motion.div>
        ))}
      </div>

      {/* Right column */}
      {/* <div className="gallery-column">
        {rightColumn.map((photo, i) => (
          <motion.div
            key={photo}
            className="photo-card"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.6)"
            }}
          >
            <img src={photo} alt={`Photo ${i + 1}`} />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}

