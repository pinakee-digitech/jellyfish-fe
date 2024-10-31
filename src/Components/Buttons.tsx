import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonsProps {
    condition: any;
    buttonWidth:any;
    onClick:any;
    value:any;
  }

export default function Buttons({ condition,buttonWidth,onClick,value }: ButtonsProps) {
  return (
    <button style={condition ? {
        backgroundColor: "#80a7ff",
        width: buttonWidth,
        color: "white",
        transition: "ease-in-out",
        transitionDuration: "0.4s"
    } :
        {
            backgroundColor: "white",
            width: buttonWidth, 
            transition: "ease-in-out",
            transitionDuration: "0.4s"
        }}
        className="px-3 mx-1 py-1 border rounded-3" onClick={onClick}
    >{value}</button>
  )
}
