import imageCompression from "browser-image-compression";

export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      // const split = reader.result.split(",");
      // const mimeType = split[0].split(";")[0];
      // const base64String = split[1];
      // resolve({ mime: mimeType, base64: base64String });
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      return reject(error);
    };
  });
}

export function base64ToBlob(base64String, type) {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i += 1) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type });
}

export async function imgCompress(img) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 500,
    useWebWorker: true,
  };

  try {
    const compressdImg = await imageCompression(img, options);
    return compressdImg;
  } catch (error) {
    // TODO: 이미지 압축 실패 시 핸들링
    console.log("이미지 압축 실패", error);
    return img;
  }
}
