import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Table from "../../companent/tables";
const ProdTable = ({ products }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [copyArr, setCopyArr] = useState([]);

  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios(`${BASE_URL}/products`);
      setData(response.data);
      setCopyArr(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="prodtable">
      <div className="container">
        <div className="prodtable">
          <h1>table</h1>
          <input
            type="search"
            required
            placeholder="Search"
            className="search"
            onChange={(e) => {
              let filtered = copyArr.filter((item) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              );
              setData(filtered) 
            }}
          />
          {loading ? <h1>Loading...</h1> : <Table products={data} />}
        </div>
      </div>
    </div>
  );
};

export default ProdTable;
