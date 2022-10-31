# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/199063503-4b6a470b-977f-4b44-a5a8-6a736a393bb9.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

Desktop-view:

![desktop-design](https://user-images.githubusercontent.com/94350356/199063582-fbf5d464-960c-4c1e-a078-ae4ad78a4075.jpg)

![active-states](https://user-images.githubusercontent.com/94350356/199063634-486ae169-fd67-4bbc-952e-50c9a2a1db07.jpg)

Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/199063687-5806125b-8be2-483a-b020-af6e2250a5d3.jpg)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-4dKc9NzBLL)
- Live Site URL: [Live Site](https://deepaktech40-signup-intropage.netlify.app/)

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
