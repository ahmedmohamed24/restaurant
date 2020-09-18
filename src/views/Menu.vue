<template>
  <div>
    <Header></Header>
    <HomeIFrameSection></HomeIFrameSection>
    <Menus></Menus>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeIFrameSection from "@/components/HomeIFrameSection";
import Header from "@/components/Inc/Menu/Header";
import Menus from "@/components/Inc/Menu/Menus";
import Footer from "@/components/Footer";
export default {
  name: "Menu",
  components: {
    Header,
    HomeIFrameSection,
    Footer,
    Menus
  }
};
</script>

<style scoped></style>
