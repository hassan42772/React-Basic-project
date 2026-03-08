
const App = () => {

const Userdetails = () =>{
  alert("User Clicked!");
  console.log("clicked")
}
const Mouseover = () =>{
  alert("User Clicked!");
  console.log("clicked")
}

  return (
    <>
      <Userlogin onClick={Userdetails} onMouseOver={Mouseover} />
    </>
  )
}

const Userlogin = (props) => {
const {onClick , onMouseOver} = props
  return (
    <>
      <h2>User Login</h2>
      <button onClick={onClick}>Login</button>
      <button onMouseOver={onMouseOver}>over</button>
    </>
  );
};

export default App;