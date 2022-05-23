const RegistrationForm = {
  // this is to set the checked box for same address to true by default if not true and clicked conditional rendering will happen see below 
  data () {
    return {
      addressSameChecked: true,
    }
  },
  props: ["items"], // adding the items in props to use the select component
  template: `
    <h3>Registration</h3>
    <hr>
    <form autocomplete="off" class="needs-validation" novalidate>
        <text-input label="First Name" name="first-name" required="true" type="text"></text-input>
        <text-input label="Last Name" name="last-name" required="true" type="text"></text-input>
        <text-input label="Email" name="email" required="true" type="email"></text-input>
        <text-input label="Password" name="password" required="true" type="password"></text-input>
        <select-input label="Favorite Color" name="color" :items="items"></select-input>

        <text-input label="Address" name="address" required="true" type="text"></text-input>
        <text-input label="City/Town" name="city" required="true" type="text"></text-input>
        <text-input label="State/Province" name="province" required="true" type="text"></text-input>
        <text-input label="Zip/Postal" name="zip" required="true" type="text"></text-input>   
        
        <check-input v-on:click="addressSame" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>


        <div v-if="addressSameChecked === false">
          <div class="mt-3">
            <text-input label="Mailing Address" name="address2" type="text"></text-input>
            <text-input label="Mailing City/Town" name="city2" type="text"></text-input>
            <text-input label="Mailing State/Province" name="province2" type="text"></text-input>
            <text-input label="Mailing Zip/Postal" name="zip2" type="text"></text-input>   
          </div>
        </div>

        <check-input label="I agree to terms and conditions" required="true"></check-input>
        <hr>
        <input class="btn btn-outline-primary" type="submit" value="Register">
    </form>
  `,
  // the above code allows us to show how it should be displayed in the form
  methods: {  // this is conditional rendering. if true other forms dont populate if false other forms do
    addressSame() {
      console.log("address same fired");
      if (this.addressSameChecked === true) {
        console.log("was checked on click");
        this.addressSameChecked = false;
      } else {
        console.log("was not check on click");
        this.addressSameChecked = true;
      }
    }
  },
  components: { // this is a nested component
    'text-input': TextInput, // calls text input from forms.js to allow you to enter text into RegistrationForm
    'select-input': SelectInput,  // calls SelectInput from form.js to allow you to choose between options given
    'check-input': CheckInput, // calls CheckInput from form.js to allow you to check a box 
  },
  // mounted is a life cycles hook 
  mounted() {
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation') // is looking for a form that is calling "needs-validation"

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })()
  }
}