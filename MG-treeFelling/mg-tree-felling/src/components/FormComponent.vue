<script>
export default {
  data() {
    return {
      name: {
        value: "",
        errorMessage: "",
      },
      phone: {
        value: "",
        errorMessage: "",
      },
      email: {
        value: "",
        errorMessage: "",
      },
      select: {
        value: "",
        errorMessage: "",
      },
      checkbox: {
        value: false,
        errorMessage: "",
      },
      items: [
        // Populate this array with your items for the v-select
      ],
    };
  },
  methods: {
    submit() {
      // Your form submission logic here
    },
    handleReset() {
      // Logic to reset the form
      this.name.value = "";
      this.name.errorMessage = "";
      this.phone.value = "";
      this.phone.errorMessage = "";
      this.email.value = "";
      this.email.errorMessage = "";
      this.select.value = "";
      this.select.errorMessage = "";
      this.checkbox.value = false;
      this.checkbox.errorMessage = "";
    },
  },
};
</script>

<template>
  <h1>Form Component Works</h1>
  <div class="form-component">
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value"
        :counter="10"
        :error-messages="name.errorMessage"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value"
        :counter="7"
        :error-messages="phone.errorMessage"
        label="Phone Number"
      ></v-text-field>

      <v-text-field
        v-model="email.value"
        :error-messages="email.errorMessage"
        label="E-mail"
      ></v-text-field>

      <v-select
        v-model="select.value"
        :items="items"
        :error-messages="select.errorMessage"
        label="Select"
      ></v-select>

      <v-checkbox
        v-model="checkbox.value"
        :error-messages="checkbox.errorMessage"
        value="1"
        label="Option"
        type="checkbox"
      ></v-checkbox>

      <v-btn class="me-4" type="submit"> submit </v-btn>

      <v-btn v-on:click="handleReset"> clear </v-btn>
    </form>
  </div>
</template>

<style>
#form-component {
  margin: auto;
}
</style>
