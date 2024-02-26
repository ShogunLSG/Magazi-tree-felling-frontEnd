<script setup>
import SlideShow from './SlideShow.vue';
// import FormComponent from './FormComponent.vue'

</script>

<template>
  <div class="Wrapper">
    <SlideShow />
    <div class="content">
      <h1>Welcome to Magazi tree felling</h1>
    
      <v-container>
        <v-row no-gutters>
          <v-col order="12">
            <v-sheet class="pa-2 ma-2">
              <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"/>
            </v-sheet>
          </v-col>
          <v-col order="1">
            <v-sheet class="pa-2 ma-2">
              <p>
                Magazi Tree Felling is a professional and reliable tree felling company that offers a range of services for residential and commercial properties.
                Whether you need tree removal, pruning, trimming, stump grinding, site clearing, or any other tree-related service, we have the skills, equipment, and experience to handle it.
                We follow the highest standards of safety and quality. 
                We are passionate about trees and the environment, and we strive to preserve and enhance the beauty and health of your trees.
                We also offer advice on tree care and maintenance, and we can help you with any tree-related issues or problems.
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="services">
      <h1>Why Choose us?</h1>
      <ul>
        <li>We have over [number] years of experience in the tree felling industry</li>
        <li>We offer a wide range of services for all your tree needs</li>
        <li>We have a team of qualified and skilled arborists who can handle any challenge</li>
        <li>We use the latest equipment and technology to ensure efficiency and safety</li>
        <li>We are fully insured and certified, and we comply with all the relevant regulations and standards</li>
        <li>We offer competitive prices and free quotes</li>
        <li>We have a loyal and satisfied customer base, and we have many positive reviews and testimonials</li>
        <li>We are available 24/7 for emergencies and consultations</li>
      </ul>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col order="6">
          <v-sheet class="pa-2 ma-2">
            <v-img :width="200" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></v-img>
          </v-sheet>
        </v-col>
        <v-col order="12">
          <v-sheet class="pa-2 ma-2">
            <v-img :width="200" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
          </v-sheet>
        </v-col>
        <v-col order="1">
          <v-sheet class="pa-2 ma-2">
            <v-img :width="200" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <h1>Our Services</h1>
    <p>We offer the following services forour clients: </p>
    <ul>
      <li>Tree felling – the process of bringing down a tree safely and efficiently</li>
      <li>Tree pruning and trimming – the removal of dead, diseased, or unwanted branches to improve the shape and health of the tree</li>
      <li>Stump grinding and removal – the elimination of the remaining tree stump and roots using a specialized machine</li>
      <li>Site clearing – the removal of vegetation, rubble, and debris from a piece of land</li>
      <li>Tree transplanting – the relocation of a tree from one place to another using proper techniques and equipment</li>
      <li>Tree chipping – the conversion of large pieces of wood into smaller woodchips using a wood chipper</li>
      <li>Firewood – the provision of quality and seasoned firewood for your fireplace or stove</li>
      <li>And more…</li>
    </ul>
    <h1>Contact Us</h1>
    <p>
      If you are looking for a professional and reliable tree felling company,
      look no further than [Your Company Name]. We are ready to assist you with any tree-related service you may need.
      Contact us today to get a free quote or to schedule an appointment.
      You can reach us by phone, email, or through our online form. We look forward to hearing from you and working with you.  
    </p>
    <p>Phone: [XXXXXXXX]</p>
    <p>Email: [XXXXXXXX]</p>
    <p>Online Form: [XXXXXXXX]</p>
    <v-btn size="x-large" rounded="xl" class="getQuoteButton">
    </v-btn>
  </div>
</template>

<style scoped>
  .Wrapper {
    background-color: rgb(36, 67, 21);
    display: block;
    height: 100vh;
    width: 100vh;
    height: max-content;
    text-align: center;
  }

  MenuToolBar {
    width: 100vh;
    height: fit-content;
    background-color: black;
    color: #ffffff;
  }

  .content p{
    background-color:rgb(36, 67, 21);
    padding: 0px;
    margin: -10px;
    color: #ffffff;
  }

  v-container, v-row, v-col, v-sheet{
    color: rgb(67, 66, 21);
    background-color: rgb(86, 229, 15);
    padding: -10px;
    margin:-10px;
    background-color: black;

  }

  h1{
    align-content: center;
    color: #ffffff;
    padding: 10px
  }

  img{
    height: 100%;
    width: 100%;
    margin: -10px
  }

  ul, p{
    text-align: left;
    margin: 30px;
    color: #ffffff;
  }
  .getQuoteButton{
    margin: 30px;
  }
  v-sheet, v-img{
    margin: 0px;
    padding: 0px;
    background-color: black;
  }
</style>
