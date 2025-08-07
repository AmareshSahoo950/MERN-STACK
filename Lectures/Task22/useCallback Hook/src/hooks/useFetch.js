
import { useCallback, useEffect, useState } from 'react'

function useFetch(url) {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error : ${response.status}`)
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message || 'Unknown Error');

    } finally {
      setLoading(false);
    }
  }, [url])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return { loading, data, error };
}

export default useFetch