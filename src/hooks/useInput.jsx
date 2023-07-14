import { useCallback, useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    if (e.target.value[0] && e.target.value[0] === " ")
      e.target.value = e.target.value.slice(1, e.target.value.lengght);
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
