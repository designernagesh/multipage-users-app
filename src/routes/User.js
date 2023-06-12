import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './User.css';

const User = () => {
    const params = useParams();
    const [user, setUser] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/users/${params.userId}`;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div>
                <div className='user-container'>
                    <div className='content'>
                        <h1>{user.name}'s Details</h1>
                        <p>Email: {user.email}</p>
                        <p>Website: {user.website}</p>
                    </div>
                    <div className='content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Username</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <span>Street:</span> {user?.address?.street}<br />
                                        <span>Suite:</span> {user?.address?.suite}<br />
                                        <span>City:</span> {user?.address?.city}<br />
                                        <span>Zipcode:</span> {user?.address?.zipcode}<br />
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>
                                        {user?.company?.name}<br />
                                        {user?.company?.catchPhrase}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;