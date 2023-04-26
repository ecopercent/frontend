export default function signUpItemReducer(itemState, action) {
  switch (action.type) {
    case "ecobagSubmit":
      return {
        ...itemState,
        ecobag: action.input,
      };
    case "tumblerSubmit":
      return {
        ...itemState,
        tumbler: action.input,
      };
    case "ecobagDelete":
      return {
        ...itemState,
        ecobag: null,
      };
    case "tumblerDelete":
      return {
        ...itemState,
        tumbler: null,
      };
    default:
      throw Error("unexpected action type :", action.type);
  }
}