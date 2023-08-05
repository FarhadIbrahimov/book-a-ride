import React from "react";
import { useNavigate } from "react-router-dom";
function Home({ data }) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div>
      Home {data.firstName}
      <button onClick={() => navigate(`/book/${data.id}`)}>
        Book Your Ride Now
      </button>
    </div>
  );
}

export default Home;
