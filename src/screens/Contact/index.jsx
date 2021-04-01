import { useState, useEffect, useLayoutEffect } from "react";
import "./contact.scss";
import ClickButton from "./ClickButton/clickButton.component";
import FilterForm from "./FilterBox/FilterBox";
const Contact = () => {
  const [passengerList, setPassengerList] = useState({});
  const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });
  const [filter, setFilter] = useState("");
  useLayoutEffect(() => {
    const fetchList = async () => {
      //title_like
      const passList = await fetch(
        `http://js-post-api.herokuapp.com/api/posts?_limit=${pagination.pageSize}&_page=${pagination.page}&title_like=${filter}`
      );
      const listResult = await passList.json();
      setPassengerList(listResult);
    };
    fetchList();
  }, [pagination, filter]);
  const handlePagination = ({ page, pageSize }) => {
    setPagination({ page, pageSize });
  };
  const handleFilterSubmit = ({ filter }) => {
    setFilter(filter);
  };
  return (
    <div className="contact-us">
      <div>Contact</div>
      <ul>
        {passengerList.data
          ? passengerList.data.map((x) => <li>{x.title}</li>)
          : null}
      </ul>
      <ClickButton pagination={pagination} handleClick={handlePagination}>
        {" "}
      </ClickButton>
      <FilterForm onSubmit={handleFilterSubmit}></FilterForm>
    </div>
  );
};
export default Contact;
