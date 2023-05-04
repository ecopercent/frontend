import imageCompression from "browser-image-compression";

export function base64ToDataUrl(base64String) {
  return `data:image/jpeg;base64,${base64String}`;
}

export async function imgCompress(img) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1200,
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
