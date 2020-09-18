<template>
  <div>
    <Header></Header>
    <Teams></Teams>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Inc/Team/Header";
import Teams from "@/components/Inc/Team/Teams";
import Footer from "@/components/Footer";

export default {
  name: "Team",
  components: {
    Header,
    Teams,
    Footer
  }
};
</script>

<style scoped></style>
