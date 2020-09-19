<template>
  <header>
    <div class="overlay h-full w-full pt-16 md:pt-0">
      <!--this is the main navbar section in the top screen -->
      <nav class="hidden md:grid contacts text-white grid-cols-12 gab-4 py-4 ">
        <ul class="col-span-12 sm:col-span-6 flex justify-center items-center">
          <li class="mx-3">
            <a href="" class=""
              ><i class="fab fa-facebook-f hover:text-yellow-700"></i
            ></a>
          </li>
          <li class="mx-3">
            <a href=""><i class="fab fa-twitter hover:text-yellow-700"></i></a>
          </li>
          <li class="mx-3">
            <a href=""
              ><i
                class="fa fa-linkedin hover:text-yellow-700"
                aria-hidden="true"
              ></i
            ></a>
          </li>
          <li class="mx-3">
            <a href=""
              ><i
                class="fa fa-instagram hover:text-yellow-700"
                aria-hidden="true"
              ></i
            ></a>
          </li>
        </ul>
        <ul
          class="col-span-12 sm:col-span-6 flex flex-col sm:flex-row justify-center items-center"
        >
          <li class="mx-2">
            <a href="tel:+2011-1111-1111" class="hover:text-yellow-700"
              >+2011-1111-1111</a
            >
          </li>
          <li class="mx-2">
            <a href="#" class="hover:text-yellow-700">support@egy.com</a>
          </li>
        </ul>
      </nav>
      <!--this is the full navbar for the wide screens-->
      <Navbar></Navbar>

      <h1
        class="text-white my-4 sm:my-6 md:my-8 text-center text-3xl sm:text-4xl md:text-6xl font-bold"
      >
        Recipe | Lists
      </h1>
      <div class="text-center py-8">
        <button
          type="button"
          class="bg-golden text-gray-200 font-semibold hover:text-white hover:bg-transparent py-3 px-6 border-transparent  transition duration-700 ease-in-out border hover:border-white "
        >
          CHECK OUR MENU
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Inc/Navbar";
export default {
  name: "Header",
  components: { Navbar }
};
</script>

<style scoped lang="scss">
header {
  background-image: url("~@/assets/images/banner-bg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  font-family: "Poppins", sans-serif;
  .overlay {
    background-color: rgba(4, 9, 30, 0.5);
  }
  h1 {
    & {
      position: relative;
      width: max-content;
      margin: 3rem auto;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #d1ab7f;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #d1ab7f;
    }
  }
}

.goldenColor {
  color: #d1ab7f;
}
.bg-golden {
  background-color: #d1ab7f;
}
</style>
