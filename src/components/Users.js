import { Link } from "react-router-dom";
import SingleUser from "./SingleUser";
import './Users.css';
import User from '../routes/User';

const Users = ({usersList}) => {
    return (
      <>
        <div className="container">
          <div>
            <div className="heading">
              <p>#</p>
              <p className="name">Name</p>
              <p>Email</p>
              <p className="hide-mobile">Phone</p>
              <p className="hide-mobile">Website</p>
            </div>
          </div>

          {
            usersList.map(user => {
              return (
                  <Link to={`/user/${user.id}`} element={<User />} key={user.id}>
                    <SingleUser user={user} />
                  </Link>
              )
            })
          }
        </div>
      </>
    )
  }
  
  export default Users;
  