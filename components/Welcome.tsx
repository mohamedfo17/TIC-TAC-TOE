type MissParams={
    number:string;
  }
  function Miss(props:MissParams){
    return <p>{props.number}</p>
  }
  function Welcome(props:MissParams){
    return<> <h1 style={{width:"20%"}}>{props.number}</h1>
    <Miss number="hello bro"/></>
  }
  export default Welcome;