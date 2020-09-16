<template>
  <section class="py-12 bg-gray-100 text-center">
    <h2 class="text-4xl  font-bold mb-3">Category of available items</h2>
    <p class="mb-8 text-gray-700">
      They are grilling celebrities in their own right.
    </p>
    <div class="container m-auto grid grid-cols-12 ">
      <div
        class="menu flex flex-col justify-center items-center col-span-12  md:col-span-6 lg:col-span-3"
      >
        <img class="rounded-full " src="../assets/images/c1.jpg" alt="pizza" />
        <h5
          class=" mt-4 mb-4 font-bold text-xl hover:text-yellow-700 pointer-events-auto"
        >
          Pizza
        </h5>
        <p class="text-gray-700 w-9/12 m-auto mb-8">
          inappropriate behavior is often laughed off as “boys will be.
        </p>
      </div>
      <div
        class="menu flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-3"
      >
        <img class="rounded-full" src="../assets/images/c2.jpg" alt="bread" />
        <h5 class=" mt-4 mb-4 font-bold text-xl">Bread</h5>
        <p class="text-gray-700 w-9/12 m-auto mb-8">
          inappropriate behavior is often laughed off as “boys will be.
        </p>
      </div>
      <div
        class="menu flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-3"
      >
        <img
          class="rounded-full"
          src="../assets/images/c3.jpg"
          alt="burger sandwich"
        />
        <h5 class=" mt-4 mb-4 font-bold text-xl">Burger</h5>
        <p class="text-gray-700 w-9/12 m-auto mb-8">
          inappropriate behavior is often laughed off as “boys will be.
        </p>
      </div>
      <div
        class="menu flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-3"
      >
        <img class="rounded-full" src="../assets/images/c4.jpg" alt="Chicken" />
        <h5 class=" mt-4 mb-4 font-bold text-xl">Chicken</h5>
        <p class="text-gray-700 w-9/12 m-auto mb-8">
          inappropriate behavior is often laughed off as “boys will be.
        </p>
      </div>
    </div>
    <button
      id="a1"
      type="button"
      class="bg-golden text-gray-200 font-semibold  hover:bg-transparent py-3 px-6 border-transparent  transition duration-700 ease-in-out border hover:border-yellow-800 "
    >
      GET STARTED NOW
    </button>
  </section>
</template>

<script>
export default {
  name: "HomeMenuSection"
};
</script>

<style scoped lang="scss">
section {
  font-family: "Poppins", sans-serif;
  .menu {
    &:hover img {
      animation: menuMove 600ms ease-in-out;
      animation-fill-mode: forwards;
    }
    &:hover h5 {
      color: #d1ab7f;
    }
    > img {
      background-color: red;
      &:hover {
        animation: menuMove 600ms ease-in-out;
        cursor: pointer;
        animation-fill-mode: forwards;
      }
    }
  }
}
@keyframes menuMove {
  to {
    transform: scale(1.1);
  }
}
.bg-golden {
  background-color: #d1ab7f;
}
#a1:hover {
  color: #d1ab7f;
}
</style>
