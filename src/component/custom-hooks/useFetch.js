import { useEffect, useState } from "react";
//CustomHookFetch works with recept-app-backend localhost running

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* Anonym Function */
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
