const signupFormHandler = async (event) => {
  event.preventDefault();

  let firstName = document.querySelector("#first_name").value.trim();
  let lastName = document.querySelector("#last_name").value.trim();
  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value.trim();

  let newUser = {
    firstName,
    lastName,
    email,
    password,
  };

  userAction(JSON.stringify(newUser));
};

const userAction = async (newUser) => {
  const response = await fetch("/api/users/", {
    method: "POST",
    body: newUser, // string or object
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await response.json(); //extract JSON from the http response
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Please try signing up again");
  }
};

document
  .querySelector("#confirmSignup")
  .addEventListener("click", signupFormHandler);
