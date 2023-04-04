import React, { useEffect, useState } from "react";

export default function SearchFun() {
  const [searchApiData, setSearchApiData] = useState([]);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == " ") {
      setData(searchApiData);
    } else {
      const Filter = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(Filter);
    }
    setFilter(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={filter}
            placeholder="Search contacts here"
            onInput={(e) => handleFilter(e)}
          />
        </div>
        <table>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
