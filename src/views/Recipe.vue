<template>
  <div>
    <Header></Header>
    <Recipes></Recipes>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Inc/Recipe/Header";
import Recipes from "@/components/Inc/Recipe/Recipes";
import Footer from "@/components/Footer";
export default {
  name: "Recipe",
  components: {
    Header,
    Recipes,
    Footer
  }
};
</script>

<style scoped></style>
