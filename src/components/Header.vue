<template>
  <header class=" " @scroll="moveVertically">
    <div class="overlay h-full w-full ">
      <nav class="contacts text-white grid grid-cols-12 gab-4 py-4 ">
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
      <nav
        class="mainNav transition ease-in-out duration-500 z-20 bg-transparent p-6 md:w-12/12 md:m-auto w-10/12 flex justify-between items-center md:flex-row"
      >
        <div class="logo font-bold text-3xl goldenColor">
          <a href="#">EGY</a>
        </div>
        <ul class="flex justify-center items-center">
          <li class="ml-3 nav-item text-white"><a href="">Home</a></li>
          <li class="ml-3 nav-item text-white"><a href="">About</a></li>
          <li class="ml-3 nav-item text-white"><a href="">Menu</a></li>
          <li class=" nav-item text-white"><a href="">Team</a></li>
          <li class="group nav-item text-white inline-block ml-3 ">
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
          <li class="ml-3 nav-item text-white"><a href="">Elements</a></li>
          <li class="ml-3 nav-item text-white"><a href="">Contacts</a></li>
        </ul>
      </nav>
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
export default {
  name: "Header",
  data: function() {
    return {
      btnContent: "CHECK OUR MENU"
    };
  },
  created() {
    window.addEventListener("scroll", this.moveVertically);
  },
  destroyed() {
    window.removeEventListener("scroll", this.moveVertically);
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
