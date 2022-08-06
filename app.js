// Set initial count value
let count = 0;

// Get count value from the span
const value = document.querySelector("#value");

// Get all the action buttons
const btns = document.querySelectorAll(".btn");

// Loop through all the action buttons
btns.forEach(function(btn){
  // Get all the button specific classes on Click event
  btn.addEventListener("click",function(e){
    // Get the class name
    const styles = e.currentTarget.classList;

    // Set Increment, decrement, reset operation based on class name
    if(styles.contains("increase")){
      count++;
    }else if(styles.contains("decrease")){
      count--;
    }else{
      count = 0;
    }

    // Set different colors based on count value
    if(count > 0){
      value.style.color = "#1DE9B6";
    }

    if(count < 0){
      value.style.color = "#E57373";
    }

    if(count === 0){
      value.style.color = "#222";
    }

    // Retrieve the count value to the span element to display
    value.textContent = count;
  });
});