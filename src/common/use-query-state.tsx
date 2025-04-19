import { useCallback } from "react";
import { useSearchParams } from "react-router";

/**
 * It's like useState but syncs the state to a url query param.
 */
export function useQueryState(key: string) {
  const [params, setParams] = useSearchParams();
  const valueFromParams = params.get(key);

  const update = useCallback(
    (value: string) => {
      setParams({ [key]: value });
    },
    [key, setParams]
  );

  return [valueFromParams, update] as const;
}
