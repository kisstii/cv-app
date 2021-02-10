import { Children } from "react";

function CopyBoard(props) {
  return <textarea disabled className="copyBoard" value={props.value}></textarea>;
}

export default CopyBoard;
