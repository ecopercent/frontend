import imageCompression from "browser-image-compression";

export function b64toBlob(b64Data, contentType) {
  const sliceSize = 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new File(byteArrays, "pot", { type: contentType });
}

export async function imgCompress(img) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1920,
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
