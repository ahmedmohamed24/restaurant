<template>
  <div>
    <Header></Header>
    <Teams></Teams>
    <HomeMenuSection></HomeMenuSection>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Inc/Team/Header";
import Teams from "@/components/Inc/Team/Teams";
import HomeMenuSection from "@/components/HomeMenuSection";
import Footer from "@/components/Footer";

export default {
  name: "Team",
  components: {
    Header,
    Teams,
    Footer,
    HomeMenuSection
  }
};
</script>

<style scoped></style>
