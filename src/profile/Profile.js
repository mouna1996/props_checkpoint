import Proptypes from 'prop-types'

const Profile = (props) => {
  const {
    fullName = "user name",
    profession = "profession of the user",
    handleName,
    children = "photo of the user",
  } = props;

  return (
    <div className="center" >
      <div className="avatar">
      {children}
      </div>
      <div className="contente" style={{padding:"20px"}}>
      <h1 style={{color:"wheat"}}>{fullName}</h1>
      <h2>{profession}</h2>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/mouna.hd.75/"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/mouna-hedhili-27a55a1b1/"><i className="fab fa-linkedin"></i></a>
      </div>
      <button onClick={handleName ? () => handleName(fullName):()=>alert("no function")}>Contact me</button>
    </div>
  );
};

Profile.propTypes={
  fullName:Proptypes.string.isRequired,
  profession:Proptypes.string.isRequired,
  handleName:Proptypes.func.isRequired,
  children:Proptypes.element.isRequired
}


export default Profile;