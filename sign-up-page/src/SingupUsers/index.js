import { useEffect, useState } from "react";
import "./style.css";

const SignUpUsers = () => {
  const [signUpInfo, setSignUpInfo] = useState([]);

  useEffect(() => {
    const storedSignUpValue = JSON.parse(localStorage.getItem("signupInfo"));
    if (storedSignUpValue) {
      setSignUpInfo(storedSignUpValue);
    }
    console.log({storedSignUpValue})
  }, []);

  return (
    <div className="table-container">
      <table className="signUPInfoTable">
        <thead>
          <tr>
            <th>Index</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>ConfirmPassword</th>
          </tr>
        </thead>
        {signUpInfo &&
          signUpInfo?.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.confirmPassword}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default SignUpUsers;
