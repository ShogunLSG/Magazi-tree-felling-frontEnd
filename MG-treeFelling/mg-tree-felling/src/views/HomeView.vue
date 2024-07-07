<script setup>
import SlideShow from "@/components/SlideShow.vue";
import AnimatedSection from "@/components/AnimatedSection.vue";
// Doesnt Work yet!! ***TODO***
import ParallaxSection from "@/components/ParallaxSection.vue";
</script>

<template>
  <div class="Wrapper">
    <div class="slide-show">
      <SlideShow />
    </div>

    <ParallaxSection>
      <template #background>
        <img
          src="../assets/TreeBackground.jpg"
          alt="Tree background"
          class="parallax-bg-image"
        />
      </template>
      <AnimatedSection class="content-section">
        <h1>Welcome to Magazi Tree Felling</h1>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <v-sheet class="pa-2 ma-2 image-container">
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  alt="Tree Felling"
                />
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet class="pa-2 ma-2 text-container">
                <p>
                  Magazi Tree Felling is a professional and reliable tree
                  felling company that offers a range of services for
                  residential and commercial properties. Whether you need tree
                  removal, pruning, trimming, stump grinding, site clearing, or
                  any other tree-related service, we have the skills, equipment,
                  and experience to handle it. We follow the highest standards
                  of safety and quality. We are passionate about trees and the
                  environment, and we strive to preserve and enhance the beauty
                  and health of your trees. We also offer advice on tree care
                  and maintenance, and we can help you with any tree-related
                  issues or problems.
                </p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </AnimatedSection>
    </ParallaxSection>
    <AnimatedSection class="content-section services-section">
      <h1>Why Choose Us?</h1>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet class="pa-4 text-container">
              <ul class="feature-list">
                <li
                  v-for="(feature, index) in features"
                  :key="index"
                  class="feature-item"
                >
                  {{ feature }}
                </li>
              </ul>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </AnimatedSection>
    <AnimatedSection class="content-section gallery-section">
      <h1>Our Work</h1>
    </AnimatedSection>
    <AnimatedSection class="content-section services-list-section">
      <h1>Our Services</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-sheet class="pa-4 text-container">
              <p>We offer the following services for our clients:</p>
              <ul class="services-list">
                <li
                  v-for="(service, index) in services"
                  :key="index"
                  class="service-item"
                >
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </li>
              </ul>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </AnimatedSection>
    <AnimatedSection class="content-section contact-section">
      <h1>Contact Us</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-sheet class="pa-4 text-container">
              <p class="contact-text">
                If you are looking for a professional and reliable tree felling
                company, look no further than Magazi Tree Felling. We are ready
                to assist you with any tree-related service you may need.
              </p>
              <div class="contact-info">
                <div class="contact-method">
                  <h3>Phone</h3>
                  <p>[XXXXXXXX]</p>
                </div>
                <div class="contact-method">
                  <h3>Email</h3>
                  <p>[XXXXXXXX]</p>
                </div>
              </div>
              <p class="contact-text">
                Contact us today to get a free quote or to schedule an
                appointment. You can reach us by phone, email, or through our
                online form. We look forward to hearing from you and working
                with you.
              </p>
              <div class="quote-button">
                <v-btn
                  size="x-large"
                  rounded="xl"
                  class="getQuoteButton"
                  color="green"
                  dark
                  >Get a Quote</v-btn
                >
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </AnimatedSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Tree felling",
          description:
            "The process of bringing down a tree safely and efficiently",
        },
        {
          title: "Tree pruning and trimming",
          description:
            "The removal of dead, diseased, or unwanted branches to improve the shape and health of the tree",
        },
        {
          title: "Stump grinding and removal",
          description:
            "The elimination of the remaining tree stump and roots using a specialized machine",
        },
        {
          title: "Site clearing",
          description:
            "The removal of vegetation, rubble, and debris from a piece of land",
        },
        {
          title: "Tree transplanting",
          description:
            "The relocation of a tree from one place to another using proper techniques and equipment",
        },
        {
          title: "Tree chipping",
          description:
            "The conversion of large pieces of wood into smaller woodchips using a wood chipper",
        },
        {
          title: "Firewood",
          description:
            "The provision of quality and seasoned firewood for your fireplace or stove",
        },
      ],
      features: [
        "We have over [number] years of experience in the tree felling industry",
        "We offer a wide range of services for all your tree needs",
        "We have a team of qualified and skilled arborists who can handle any challenge",
        "We use the latest equipment and technology to ensure efficiency and safety",
        "We are fully insured and certified, and we comply with all the relevant regulations and standards",
        "We offer competitive prices and free quotes",
        "We have a loyal and satisfied customer base, and we have many positive reviews and testimonials",
        "We are available 24/7 for emergencies and consultations",
      ],
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.services-list {
  list-style-type: none;
  padding: 0;
}

.service-item {
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.service-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-item h3 {
  margin-bottom: 10px;
  color: #ffffff;
}

.service-item p {
  color: #e0e0e0;
}

.slide-show {
  width: 100%;
  height: 700px;
}

.feature-list {
  list-style-type: none;
  padding: 0;
}

.feature-item {
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-sheet,
.v-slide-group {
  background-color: rgb(36, 67, 21);
}

.Wrapper {
  background-color: rgb(36, 67, 21);
  display: block;
  height: max-content;
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.content-section {
  padding: 40px 0;
}

.content-section h1 {
  color: #ffffff;
  padding: 20px 0;
  font-size: 36px;
  font-weight: bold;
}

.content-section p {
  color: #ffffff;
  text-align: center;
  font-size: 18px;
}

.content-section ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #ffffff;
  text-align: left;
  font-size: 18px;
}

.content-section li {
  margin-bottom: 10px;
}

.getQuoteButton {
  margin: 30px 0;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-container {
  padding: 10px;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.text-container p {
  text-align: justify;
}

.text-container ul {
  max-width: 800px;
}

.services-section {
  background-color: rgb(29, 53, 17);
}

.gallery-section {
  background-color: rgb(22, 41, 13);
}

.services-list-section {
  background-color: rgb(29, 53, 17);
}

.contact-section {
  background-color: rgb(22, 41, 13);
}

.contact-text {
  text-align: justify;
  margin-bottom: 20px;
}

.contact-info {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.contact-method {
  margin: 0 20px;
}

.contact-method h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

.quote-button {
  margin-top: 20px;
}

.parallax-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
