import axios from "axios";

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({ hell: "" });

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get("http://localhost:3000/hello");
        setData((prevData) => {
          return {
            ...prevData,
            hell: response.data?.hell,
          };
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, []);

  return <div>msg: {data.hell}</div>;
};

export default App;
