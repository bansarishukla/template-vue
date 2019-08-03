<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <div>
          <h2>Vue.js + Vuelidate - Form Validation</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                v-model="user.Name"
                id="Name"
                name="Name"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.user.Name.$error }"
              />
              <div
                v-if="submitted && $v.user.Name.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.Name.required">Name is required</span>
                <span v-if="!$v.user.Name.alpha">
                  Only characters are allowed
                </span>
                <span v-if="!$v.user.Name.minLength">
                  Name must be at least 3 characters
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                v-model="user.Email"
                id="Email"
                name="Email"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.user.Email.$error }"
              />
              <div
                v-if="submitted && $v.user.Email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.Email.required">Email is required</span>
                <span v-if="!$v.user.Email.email">Email is invalid</span>
              </div>
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                v-model="user.Password"
                id="Password"
                name="Password"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.user.Password.$error }"
              />
              <div
                v-if="submitted && $v.user.Password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.Password.required">
                  Password is required
                </span>
                <span v-if="!$v.user.Password.minLength">
                  Password must be at least 8 characters
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="confirmPassword">confirmPassword</label>
              <input
                type="password"
                v-model="user.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                :class="{
                  'is-invalid': submitted && $v.user.confirmPassword.$error
                }"
              />
              <div
                v-if="submitted && $v.user.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.confirmPassword.required">
                  Confirm Password is required
                </span>
                <span v-if="!$v.user.confirmPassword.confirmPassword">
                  Password and Confirm Password should be same
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="Phone">Phone</label>
              <input
                type="text"
                v-model="user.Phone"
                id="Phone"
                name="Phone"
                class="form-control"
                :class="{
                  'is-invalid': submitted && $v.user.Phone.$error
                }"
              />
              <div
                v-if="submitted && $v.user.Phone.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.Phone.required">
                  Phone is required
                </span>
                <span v-if="!$v.user.Phone.minLength">
                  Phone must be at least 10 digits
                </span>
                <span v-if="!$v.user.Phone.numeric">
                  Only ditits are allowed!
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="Phone">Address</label>
              <textarea
                rows="4"
                v-model="user.Address"
                id="Address"
                name="Address"
                class="form-control"
              >
              </textarea>
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  sameAs,
  alpha,
  numeric
} from "vuelidate/lib/validators";
export default {
  name: "app",
  data() {
    return {
      user: {
        Name: "",
        Email: "",
        Password: "",
        confirmPassword: "",
        Phone: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      Name: { required, alpha },
      Email: { required, email },
      Password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("Password") },
      Phone: { required, minLength: minLength(10), numeric }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }
};
</script>
