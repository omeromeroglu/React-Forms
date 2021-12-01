import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid,setEnteredNameIsValid] =useState(false);
  const [enteredNameTouched,setenteredNameTouched]= useState(false);


  useEffect(() => {
    if(enteredNameIsValid) {

      console.log("Name Input is valid!");
    }

  },[enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
      
    }
  };


  const nameInputBlurHandler = (event) =>{
      setenteredNameTouched(true);

      if (enteredName.trim() === "") {
        setEnteredNameIsValid(false);
        
      }

  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setenteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    

    console.log(enteredName);
  

    setEnteredName("");
  };


  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid " : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur= {nameInputBlurHandler}
          value ={enteredName}
        />

        {nameInputIsInvalid &&<p className="error-text">Name must not be empy</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
