import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  
  let saveButton = props.saveButton;
  if (saveButton) {
    return <SaveButton onButtonChange={props.onButtonChange} />
  }
   return <ClickedButton/>;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 