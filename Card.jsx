import ButtonA from "../Button/ButtonA";
function Card(props) {
  return (
    <>
       <div className="col-12 col-md-6 col-xl-3">
       <div className="card my-5" style={{width: "100%", height:"30000px",backgroundColor:"#0A1D3C", color:"#F4EFEE" , height:""}}>
          <img src={props.source} className="card-img-top" alt="Not Found" height="200px" />
          <div className="card-body text-center">
            <h5 className="card-title"><b>{props.name}</b></h5>
            <p className="card-text">
             {props.text}
            </p>
            <a href="#">
              <ButtonA title="Watch Now" bgcol="#783BFF" col="#FFA172" />
            </a>
          </div>
        </div>
       </div>
    </>
  );
}

export default Card;