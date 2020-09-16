<template>
  <article class="container my-10 grid m-auto grid grid-cols-12 ">
    <div class="col-span-12 md:col-span-8 pl-4">
      <h4 class="goldenColor my-6">
        BRAND NEW APP TO BLOW YOUR MIND
      </h4>
      <h2 class="text-3xl md:text-4xl my-6 text-gray-800 w-10/12 font-bold">
        We’ve baked every item from the core of our heart to serve you
      </h2>
      <h4 class="mb-3 text-sm text-gray-800 font-medium">
        We are here to listen from you deliver exellence by any means
      </h4>
      <p class="mb-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
      <button
        id="a1"
        type="button"
        class="bg-golden text-gray-200 font-semibold  hover:bg-transparent py-3 px-6 border-transparent  transition duration-700 ease-in-out border hover:border-yellow-800 "
      >
        GET STARTED NOW
      </button>
    </div>
    <div class="hidden md:flex justify-center items-center col-span-4">
      <img src="../assets/images/about-img.png" alt="bakes" />
    </div>
  </article>
</template>

<script>
export default {
  name: "HomeBlog",
  data: function() {
    return {
      btnContent: "GET STARTED NOW"
    };
  },
  components: {}
};
</script>

<style scoped>
.bg-golden {
  background-color: #d1ab7f;
}
.goldenColor {
  color: #d1ab7f !important;
}
article {
  font-family: "Poppins", sans-serif;
}
#a1:hover {
  color: #d1ab7f;
}
.goldenColor {
  color: #d1ab7f;
}
</style>
