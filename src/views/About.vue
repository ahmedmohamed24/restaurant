<template>
  <div class="home">
    <Header></Header>
    <HomeBlog></HomeBlog>
    <HomeMenuSection></HomeMenuSection>
    <HomeIFrameSection></HomeIFrameSection>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Inc/About/Header";
import HomeBlog from "@/components/HomeBlog";
import HomeMenuSection from "@/components/HomeMenuSection";
import HomeIFrameSection from "@/components/HomeIFrameSection";
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    Header,
    HomeBlog,
    HomeMenuSection,
    HomeIFrameSection,
    Footer
  }
};
</script>

<style scoped></style>
