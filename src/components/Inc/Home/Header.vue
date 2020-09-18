<template>
  <header class=" " @scroll="moveVertically">
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
      <h3 class="text-center mt-16  mb-3 text-gray-200">
        WHENEVER WE BAKE, BAKE WITH OUR HEART
      </h3>
      <h1
        class="text-white my-4 sm:my-6 md:my-8 text-center text-3xl sm:text-4xl md:text-6xl font-bold"
      >
        Love with baking items
      </h1>
      <h2 class="text-center text-gray-200 w-6/12 m-auto">
        Since Americans in the South began roasting pigs publicly, Barbecues
        have been a staple of North American living. For many, grilling becomes
        a routine mealtime activity.
      </h2>
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
  components: { Navbar },
  data: function() {
    return {
      isSmallScreensNavOpen: false
    };
  },
  created() {
    window.addEventListener("scroll", this.moveVertically);
    window.addEventListener("resize", this.resizeWindow);
  },
  destroyed() {
    window.removeEventListener("scroll", this.moveVertically);
    window.removeEventListener("resize", this.resizeWindow);
  },
  methods: {
    moveVertically: function() {
      const h = window.pageYOffset - document.body.getBoundingClientRect().top;
      const el = document.querySelector(".mainNav");
      const navItems = document.querySelectorAll(".nav-item");
      if (h > 400) {
        //display the nav in wide screen
        el.classList.add("fixed");
        el.classList.remove("w-10/12");
        el.classList.add("w-100");
        el.classList.add("top-0");
        el.classList.add("left-0");
        el.classList.add("right-0");
        el.classList.add("shadow-2xl");
        el.classList.add("bg-white");
        for (let item of navItems) {
          item.classList.add("text-black");
          item.classList.remove("text-white");
        }
      } else {
        for (let item of navItems) {
          item.classList.add("text-white");
          item.classList.remove("text-black");
        }
        el.classList.remove("fixed");
        el.classList.add("w-10/12");
        el.classList.remove("w-100");
        el.classList.remove("top-0");
        el.classList.remove("left-0");
        el.classList.remove("right-0");
        el.classList.remove("shadow-2xl");
        el.classList.remove("bg-white");
      }
    },
    resizeWindow: function() {
      let windowSize = window.innerWidth;
      if (windowSize < 767) {
        //show the compressed navbar
      } else {
        //show the full navbar
      }
    },
    toggleNav: function() {
      this.isSmallScreensNavOpen = !this.isSmallScreensNavOpen;
      document.getElementById("toggledNavbar").classList.toggle("hidden");
      if (this.isSmallScreensNavOpen) {
        document.querySelector(
          ".toggleNavbar"
        ).innerHTML = `<i class="fas text-xl fa-bars"></i>`;
      } else {
        document.querySelector(
          ".toggleNavbar"
        ).innerHTML = `<i class="fas fa-times"></i>`;
      }
    }
  }
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
    .mainNav {
      > ul {
        > li {
          border-bottom: 2px solid transparent;
          &:hover {
            animation: navItemAnimate 100ms ease-in;
            animation-fill-mode: forwards;
          }
        }
      }
    }
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
@keyframes navItemAnimate {
  from {
    border-bottom: 2px solid transparent;
  }
  to {
    border-bottom: 3px solid #d1ab7f;
  }
}
.goldenColor {
  color: #d1ab7f;
}
.bg-golden {
  background-color: #d1ab7f;
}
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
</style>
