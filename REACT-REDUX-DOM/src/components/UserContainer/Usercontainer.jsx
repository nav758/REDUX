import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchUsers } from "../../redux"
import { fetchUsers } from "../../redux/user/userAction.js";

function Usercontainer({ userData, fetchUsers }) {
  console.log("Data ==", userData);

  useEffect(() => {
    console.log();

    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // loading: state.users.loading,
    userData: state.user,
    // error: state.users.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercontainer); //Usercontainer
