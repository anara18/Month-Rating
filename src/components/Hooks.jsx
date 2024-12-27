
function Hooks(props) {
  const user ={
    id:2,
    userName:'Asan',
    userAge:21,
    image:"https://i.pinimg.com/474x/49/73/68/497368b9f58d039f4bbd74b0dd0b6279.jpg"
  }

    props.test(user);

  return (
    <div>Hooks</div>
  )
}

export default Hooks