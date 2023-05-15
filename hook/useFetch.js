import { useState, useEffect } from "react";
import axios from "axios";

const key = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "c680d2ddabmsh84d9167c6748786p1f401fjsn82c5cb17e43b",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (e) {
      console.log("catch", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then((r) => console.log("fetchD ->>", r));
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData().then((r) => console.log("REfecthD -->>", r));
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;
