import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetchAxios = ({ BASE_URL }) => {
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setPost(res.data);
    });
  }, []);
  return [post];
};

export default UseFetchAxios;
