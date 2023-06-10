const SingleUser = ({user}) => {
  return (
    <div className="user-row">
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p className="hide-mobile">{user.phone}</p>
      <p className="hide-mobile">{user.website}</p>
    </div>
  );
}

export default SingleUser;
