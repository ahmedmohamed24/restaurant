<template>
  <div class="home">
    <Header></Header>
    <HomeBlog></HomeBlog>
    <HomeMenuSection></HomeMenuSection>
    <HomeIFrameSection></HomeIFrameSection>
    <HomeReview></HomeReview>
    <HomeBlogs></HomeBlogs>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HomeBlog from "@/components/HomeBlog";
import HomeMenuSection from "@/components/HomeMenuSection";
import HomeIFrameSection from "@/components/HomeIFrameSection";
import HomeReview from "@/components/HomeReview";
import HomeBlogs from "@/components/HomeBlogs";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    HomeBlog,
    HomeMenuSection,
    HomeIFrameSection,
    HomeReview,
    HomeBlogs,
    Footer
  }
};
</script>
