# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

This was a great project. It helped me learn a lot of things especially form validations using JS.

```html
<form action="">
  <input
    type="text"
    class="inputField grp1"
    id="fName"
    placeholder="First Name"
  />

  <p class="grp1 error">
    First Name cannot be empty<span class="icon"
      ><img src="/assets/icon-error.svg" alt=""
    /></span>
  </p>

  <input
    type="text"
    class="grp2 inputField"
    id="lName"
    placeholder="Last Name"
  />
  <p class="grp2 error">
    Last Name cannot be empty<span class="icon"
      ><img src="/assets/icon-error.svg" alt=""
    /></span>
  </p>

  <input
    type="text"
    class="grp3 inputField"
    id="email"
    placeholder="Email Address"
  />
  <p class="grp3 error email">
    Looks like this is not an email<span class="icon"
      ><img src="/assets/icon-error.svg" alt=""
    /></span>
  </p>

  <input
    type="password"
    class="grp4 inputField"
    id="pass"
    placeholder="Password"
  />
  <p class="grp4 error">
    Password cannot be empty<span class="icon"
      ><img src="/assets/icon-error.svg" alt="" /></span
    >s
  </p>

  <input type="submit" value="CLAIM YOUR FREE TRIAL" id="submit" />

  <p>
    By clicking the button, you are agreeing to our
    <span>Terms and Services</span>
  </p>
</form>
```

```js
function validate(event) {
  let flag = false;

  for (let i = 1; i < 5; i++) {
    const inputField = document.querySelector(`.grp${i}.inputField`);
    const errorMsg = document.querySelector(`.grp${i}.error`);
    if (inputField.value === "") {
      inputField.style.outline = `1px solid red`;
      errorMsg.style.display = `inline`;
      flag = true;
    }
  }

  if (emailField.value.match(mailFormat)) {
    console.log("hiii");
  } else {
    emailError.style.display = `inline`;
    flag = true;
  }
  if (flag) {
    event.preventDefault();
  }
}
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
