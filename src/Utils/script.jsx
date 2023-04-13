export function isScriptLoaded(src) {
  const scriptList = document.getElementsByTagName("script");

  for (let i = 0; i < scriptList.length; i += 1) {
    if (scriptList[i].src.includes(src)) return true;
  }
  return false;
}

export function scriptLoad({ name, src, crossOrigin }) {
  return new Promise((resolve, reject) => {
    if (isScriptLoaded(src)) {
      resolve();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      if (process.env[`REACT_APP_${name}_INTEGRITY_VALUE`])
        script.integrity = process.env[`REACT_APP_${name}_INTEGRITY_VALUE`];
      if (crossOrigin) script.crossOrigin = crossOrigin;

      document.head.appendChild(script);

      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
    }
  });
}
