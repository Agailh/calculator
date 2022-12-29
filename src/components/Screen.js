import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    (<Screen value={calc.num ? calc.num : calc.res} />),
    (
      <Textfit className="screen" mode="single" max={70}>
        {value}
      </Textfit>
    )
  );
};

export default Screen;
