<template>
  <div>
    <!--this is the full navbar for the wide screens-->
    <nav
      class="mainNav md:flex hidden transition ease-in-out duration-500 z-20 bg-transparent p-6 md:w-12/12 md:m-auto w-10/12  justify-between items-center md:flex-row"
    >
      <div class="logo font-bold text-3xl goldenColor">
        <a href="#">EGY</a>
      </div>
      <ul class="flex justify-center items-center">
        <router-link
          active-class="goldenColor text-xl"
          to="/"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a>Home</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/about"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a>About</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/menu"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a>Menu</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/team"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a>Team</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/recipe"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a>Recipe</a>
        </router-link>
        <li class="group nav-item text-white inline-block ">
          <button
            class="outline-none focus:outline-none  px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
          >
            <span class="  flex-1">Blogs</span>
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li class="rounded-sm text-black  px-3 py-1 hover:bg-gray-100">
              Food
            </li>
            <li class="rounded-sm  text-black px-3 py-1 hover:bg-gray-100">
              Drinks
            </li>
            <li
              class="rounded-sm  text-black relative px-3 py-1 hover:bg-gray-100"
            >
              <button
                class="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span class="pr-1 text-black flex-1">Branches</span>
                <span class="mr-auto">
                  <svg
                    class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
              >
                <li class="px-3 py-1 hover:bg-gray-100 text-black">cairo</li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">alex</li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">
                  Qalubia
                </li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">Giza</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!--this is the compressed navbar for the small screens-->
    <nav
      class="flex md:hidden flex-col top-0 left-0 right-0 bg-white py-4 fixed z-20 shadow"
    >
      <div class=" flex justify-around">
        <div class="logo font-bold text-3xl goldenColor">
          <a href="#">EGY</a>
        </div>
        <button @click="toggleNav" class="toggleNavbar md:hidden">
          <i class="fas text-xl fa-bars"></i>
        </button>
      </div>
      <ul id="toggledNavbar" class=" flex flex-col mt-6">
        <router-link
          active-class="goldenColor text-xl"
          to="/"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a class="text-blue-800">Home</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/about"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a class="text-blue-800">About</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/menu"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a class="text-blue-800">Menu</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/team"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a class="text-blue-800">Team</a>
        </router-link>
        <router-link
          active-class="goldenColor text-xl"
          to="/recipe"
          tog="li"
          class="ml-3 nav-item text-white"
          exact
          replace
        >
          <a class="text-blue-800">Recipe</a>
        </router-link>
        <li class="group nav-item text-blue-800 inline-block">
          <button
            class="outline-none focus:outline-none  px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
          >
            <span class="  flex-1">Blogs</span>
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li class="rounded-sm text-black  px-3 py-1 hover:bg-gray-100">
              Food
            </li>
            <li class="rounded-sm  text-black px-3 py-1 hover:bg-gray-100">
              Drinks
            </li>
            <li
              class="rounded-sm  text-black relative px-3 py-1 hover:bg-gray-100"
            >
              <button
                class="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span class="pr-1 text-black flex-1">Branches</span>
                <span class="mr-auto">
                  <svg
                    class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
              >
                <li class="px-3 py-1 hover:bg-gray-100 text-black">cairo</li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">alex</li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">
                  Qalubia
                </li>
                <li class="px-3 py-1 hover:bg-gray-100 text-black">Giza</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      isSmallScreensNavOpen: false
    };
  },
  created() {
    window.addEventListener("scroll", this.moveVertically);
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
