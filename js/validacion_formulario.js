const d = document;

export default function formValidation() {
  const $form = d.getElementById("contact-form"),
    $inputs = d.querySelectorAll("#contact-form [required]");

  const fields = {
    name : false,
    number : false,
    email : false,
    comment : false
  };

  const listValidation = (e) => {
    let regexp = new RegExp(e.target.pattern || e.target.dataset.pattern) ;
    switch (e.target.name) {
      case "name":
        fieldValidation(regexp, e.target, e.target.name);
        break;
      case "number":
        fieldValidation(regexp, e.target, e.target.name);
        break;
      case "email":
        fieldValidation(regexp, e.target, e.target.name);
        break;
      case "comment":

        fieldValidation(regexp, e.target, e.target.name);
        break;
    }
  };

  const fieldValidation = (expression, input, field) => {
    if (expression.test(input.value)) {
        input.classList.add("check");
        input.classList.remove("error");
        document.querySelector(`#group-${field} .form-error`).classList.remove("form_error-visible");
        fields[field] = true;
    } else {
        input.classList.add("error");
        input.classList.remove("check");
        document.querySelector(`#group-${field} .form-error`).classList.add("form_error-visible");
        fields[field] = false;
    }
  };


  $inputs.forEach((input) => {
    let $span = d.createElement('span');
    $span.name = input.name;
    $span.textContent = input.title;
    $span.classList.add('form-error');
    input.insertAdjacentElement('afterend', $span);

    input.addEventListener("keyup", listValidation);
    input.addEventListener("blur", listValidation);
  });

  let fieldsValue = Object.values(fields)
  $form.addEventListener('submit', (e)=>{ 
    e.preventDefault()
      if(fields.name && fields.number && fields.email && fields.comment){
        e.preventDefault()

        const $loader = d.querySelector(".contact-form-load"),
        $response = d.querySelector(".contact-form-response")
        
        $loader.classList.remove('none')
        setTimeout(() => {
          $loader.classList.add('none')
          $response.classList.remove('none')
          setTimeout(()=> $response.classList.add('none'),3000)
        }, 3000);
      }else{
        console.log("Completa los campos correctamente")
        console.log(fields)
        e.preventDefault()
      }
  })
}
