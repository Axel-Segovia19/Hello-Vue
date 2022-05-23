const TextInput = { // a very simple component make sure to first define them
  props: {
      name: String, 
      type: String,
      label: String,
      placeholder: String,
      required: String,
      min: String,
      max: String,
      value: String,
  },
  // this is a component we can use and resuse when adding form data wihtout having to enter fields and make code dry
  template: `
    <div class="mb-3">
        <label :for="name" class="form-label">{{label}}</label>
        <input 
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :required="required"
          :min="min"
          :max="max"
          :value="value"
          :autocomplete="name + '-new'" 
          class="form-control">
    </div>
  `
}

// this component is to allow select options to be addded onto your form 
const SelectInput = {
  // items = options name will fill in the ID and name attributes same as required and label
  props: ["items", "name", "required", "label"],
  template: `
  <div class="mb-3">
  <label :for="name" class="form-label">{{label}}</label>
  <select :id="name" class="form-select" :name="name" :required="required">
    <option v-for="option in items" :value:="option.value">
        {{option.text}}
    </option>
  </select>
  </div>
  `
  // v-for="" is basically calling a for loop on the items being given as options {{option.text}} is to display them onto the screen
}

// adding a check box component
const CheckInput = {
  props: ["label", "required", "name", "value", "checked"], // added checked for conditional rendinging example 
  template: `
  <div class="form-check">
    <input class="form-check-input" :checked="checked" :required="required" type="checkbox" :value="value" :name="name" :id="name">
    <label class="form-check-label" :for="name">
        {{label}} 
    </label>
  </div>
  `
}