<template>
  <section class="py-12 bg-gray-100 grid grid-cols-12 px-2">
    <div class="col-span-12 mb-6 md:col-span-6 px-2 md:px-8">
      <h3>BRAND NEW APP TO BLOW YOUR MIND</h3>
      <h2 class="text-5xl font-bold text-gray-900 mb-6 mt-4">
        We’ve made a life that will change you
      </h2>
      <h5>We are here to listen from you deliver exellence</h5>
      <p class="text-gray-600 my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        id="a1"
        type="button"
        class="bg-black text-gray-200 font-semibold  hover:bg-transparent py-3 px-6 border-transparent  transition duration-700 ease-in-out border hover:border-yellow-800 "
      >
        GET STARTED NOW
      </button>
    </div>
    <div
      class="col-span-12 mb-6 md:col-span-6 text-center m-auto bg-black h-56 md:h-full w-9/12"
    >
      <iframe
        class="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/ARA0AxrnHdM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeIFrameSection"
};
</script>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
}
h3 {
  color: #d1ab7f;
}
.bg-golden {
  background-color: #d1ab7f;
}
#a1:hover {
  color: #d1ab7f;
}
</style>
