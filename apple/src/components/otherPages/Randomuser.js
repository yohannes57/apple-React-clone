import React, { useState, useEffect } from "react";

function Randomuser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        let user = data.results;
        setUsers(user);
      });
  }, []);
  return (
    <>
      <div className="allwrapper">
        <div className="container">
          <div className="row justify-content text-center ">
            <div className="col-12 ">
              <div className="title">
                <br />
                <br />
                <br />
                <br />
                <h3>Random Apple users</h3>
                <br />
                <br />
              </div>
            </div>
            {users.map((user, id) => {
              let picture = user.picture.midium;
              //   let thumbnail = user.results.picture;
              let userwrapper = (
                <div key={id} className="col-4">
                  <div className="c">
                    <img src={user.picture.large} alt="imag" />
                  </div>

                  <div className="co">
                    <p>{user.name.title}</p>
                    <p>
                      name: {user.name.first}
                      {user.name.last}
                    </p>
                    <p>gender:{user.gender}</p>
                    <p>address: {user.location.street.number}</p>
                    <p>
                      {user.location.street.name}
                      {user.location.city}
                    </p>
                    <p>{user.location.country}</p>
                  </div>

                  {/* <div className="col-12">
                    <img src={user.picture.thumbnail} alt="imag"></img>
                  </div> */}
                </div>
              );
              return userwrapper;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Randomuser;
//   let gender = user.gender;
//   let tittle = user.name.title;
//   let fname = user.results.name.first;
//   let lname = user.results.name.last;
//   let adrnumber = user.results.location.street.number;
//   let adrname = user.results.location.street.name;
//   let city = user.results.location.city;
//   let state = user.results.location.state;
//   let country = user.results.location.country;
