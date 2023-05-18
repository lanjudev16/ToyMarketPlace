import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ShopCatCardItem = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { picture, name, price, ratings,id } = item;
  const handleViewDetails = () => {
    if (user) {
      //    navigate('/login')
    } else {
      alert("Please login ");
      navigate("/login");
    }
  };
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl my-5">
      <figure>
        <img className="" src={picture} alt="picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex items-center justify-between">
          <h4>{ratings}</h4>
          <h4>{price}</h4>
        </div>
      </div>
      <Link to={`/toy/${id}`}>
        <button
          className="w-[90%] btn btn-danger mx-auto my-5"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ShopCatCardItem;
