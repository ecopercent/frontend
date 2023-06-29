export default function isiPhoneOriPad() {
  const { userAgent } = navigator;
  if (userAgent.match("iPhone") || userAgent.match("iPad")) return true;
  return false;
}
