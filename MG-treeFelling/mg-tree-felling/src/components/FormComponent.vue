<script>
import QuoteService from "../services/QuoteService";

export default {
  data() {
    return {
      address: {
        value: "",
        errorMessage: "",
      },
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
        "Tree Removal",
        "Stump Grinding",
        "Brush Clearing",
        "Emergency Services",
        "Tree Prunning/Trimming",
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
      this.address.value = "";
      this.address.errorMessage = "";
      this.phone.value = "";
      this.phone.errorMessage = "";
      this.email.value = "";
      this.email.errorMessage = "";
      this.select.value = "";
      this.select.errorMessage = "";
      this.checkbox.value = false;
      this.checkbox.errorMessage = "";
    },
    requestQuote() {
      let quoteRequest = {
        address: this.address.value,
        service: this.select.value,
        contactDetails: this.phone.value,
        names: this.name.value,
      };
      console.log("Address:" + this.address.value);
      QuoteService.sendRequest(quoteRequest).then(function (response) {
        console.log("API call made!" + response);
      });
    },
  },
};
</script>

<template>
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
        label="Select Service"
      ></v-select>
      <v-row>
        <v-textarea
          v-model="address.value"
          color="deep-purple"
          label="Address"
          rows="1"
          variant="filled"
          auto-grow
        ></v-textarea>
      </v-row>
      <v-btn class="me-4" type="submit" @click="requestQuote"> submit </v-btn>

      <v-btn v-on:click="handleReset"> clear </v-btn>
    </form>
  </div>
</template>

<style>
#form-component {
  margin: auto;
}
</style>
