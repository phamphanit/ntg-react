import { useState, useEffect, useLayoutEffect } from "react";
import "./contact.scss";
import ClickButton from "./ClickButton/clickButton.component";
const Contact = () => {
  const [passengerList, setPassengerList] = useState({});
  const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });
  useLayoutEffect(() => {
    const fetchList = async () => {
      console.log(pagination);
      const passList = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${pagination.page}&size=${pagination.pageSize}`
      );
      const listResult = await passList.json();
      setPassengerList(listResult);
    };
    fetchList();
  }, [pagination]);
  const handlePagination = ({ page, pageSize }) => {
    console.log("pre page", pagination.page);
    console.log("new page", page);
    setPagination({ page, pageSize });
  };
  return (
    <div className="contact-us">
      <div>Contact</div>
      <ul>
        {passengerList.data
          ? passengerList.data.map((x) => <li>{x.name}</li>)
          : null}
      </ul>
      <ClickButton pagination={pagination} handleClick={handlePagination}>
        {" "}
      </ClickButton>
    </div>
  );
};
export default Contact;
