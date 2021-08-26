import "../css/Certificate.css";

function Certificate(props) {
  console.log(props.image);
  return (
    <div className="certificate">
      <img src={props.image} alt={""} />
    </div>
  );
}
export default Certificate;
