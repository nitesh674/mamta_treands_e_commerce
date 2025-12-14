import React, { useState, useEffect, useRef } from 'react';
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from 'react-router-dom';

export default function Loader({ children }) {
  const [loader, setLoader] = useState(true);
  const currentpath = useLocation().pathname;
  const loaderParentRef = useRef(null);

  useEffect(() => {
    setLoader(true);  

    const timer = setTimeout(() => {
      setLoader(false); // 2 sec baad OFF
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentpath]);  // jab route change ho, loader chalega

  return (
    <>
      {loader ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0
          }}
        >
          <InfinitySpin width="200" color="#DB7C7E" />
        </div>
      ) : (
        <div ref={loaderParentRef}>
          {children}
        </div>
      )}
    </>
  );
}
