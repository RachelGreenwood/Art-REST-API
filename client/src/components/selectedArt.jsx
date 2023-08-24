const SelectedArt = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.artist}</p>
        <img style={{ width: "500px"}} src={props.picture} />
        <p>{props.date}</p>
        <p>{props.medium}</p>
        <p>{props.rec}</p>
      </div>
    );
  };
  
  export default SelectedArt;