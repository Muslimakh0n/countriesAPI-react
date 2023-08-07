import { useEffect, useState } from "react";
import API from "../../api/index";
import "./Countries.scss";
import Card from "../../components/Card/Card";
import loader from "../../assets/spinner.svg";
function Countries() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoading(true);
        function sortCategory() {
          result.data.forEach((el) => {
            if (!category.includes(el.region)) {
              category.push(el.region);
              setCategory(category);
            }
          });
        }
        sortCategory();
      }
    });
  }, []);
  const filterContury = (country) => {
    API.filterContury(country).then((result) => setData(result.data));
  };
  const searchCountry = (text) => {
    API.searchData(text).then((result) => setData(result.data));
  };
  if (!loading) {
    return (
      <img
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%)",
        }}
        src={loader}
        alt={name}
      />
    );
  }
  return (
    <div className="container">
      <div className="main">
        <div className="searchInput">
          <label htmlFor="search" className="search-icon">
            {" "}
            <i className="fas fa-search"></i>
          </label>
          <input
            id="search"
            className="form-control ps-5 py-2 shadow"
            placeholder="Search for a country…"
            type="text"
            onChange={(e) => {
              searchCountry(e.target.value);
            }}
          />
        </div>
        <select
          className="form-select py-2 select-region"
          onChange={(e) => filterContury(e.target.value)}
        >
          <option disabled value="Filter by Region">
            Filter by Region
          </option>
          {category.sort().map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="row d-flex justify-content-center justify-content-md-between">
        {data.map((e, index) => {
          return <Card key={index} {...e} />;
        })}
      </div>
    </div>
  );
}

export default Countries;
