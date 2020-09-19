<template>
  <section class="my-8 py-8">
    <h2 class="text-center text-3xl text-black md:text-4xl mt-4 mb-2">
      Meet Our Qualified Chefs
    </h2>
    <p class="text-center text-sm text-gray-700 mb-8">
      Who are in extremely love with eco friendly system.
    </p>
    <div class="container m-auto grid grid-cols-12 gap-4">
      <div class="member col-span-12 sm:col-span-6 md:col-span-3 relative">
        <div class="avatar relative">
          <div
            class="overlay justify-center items-center absolute top-0 left-0 bottom-0 right-0 "
          >
            <ul class="flex justify-center items-center">
              <li class="mx-3">
                <a href="" class=""
                  ><i
                    class="fab text-white fa-facebook-f hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fab text-white  fa-twitter hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fa text-white  fa-linkedin hover:text-yellow-700"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <img src="@/assets/images/t1.jpg" alt="chief" />
          </div>
        </div>
        <h2 class="text-center text-black mt-4 text-xl">Ethel Davis</h2>
        <h3 class="text-center text-gray-700">Head chef (cutting)</h3>
      </div>
      <div class="member col-span-12 sm:col-span-6 md:col-span-3 relative">
        <div class="avatar relative">
          <div
            class="overlay justify-center items-center absolute top-0 left-0 bottom-0 right-0 "
          >
            <ul class="flex justify-center items-center">
              <li class="mx-3">
                <a href="" class=""
                  ><i
                    class="fab text-white fa-facebook-f hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fab text-white  fa-twitter hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fa text-white  fa-linkedin hover:text-yellow-700"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <img src="@/assets/images/t2.jpg" alt="chief" />
          </div>
        </div>
        <h2 class="text-center text-black mt-4 text-xl">Ethel Davis</h2>
        <h3 class="text-center text-gray-700">Head chef (cutting)</h3>
      </div>
      <div class="member col-span-12 sm:col-span-6 md:col-span-3 relative">
        <div class="avatar relative">
          <div
            class="overlay justify-center items-center absolute top-0 left-0 bottom-0 right-0 "
          >
            <ul class="flex justify-center items-center">
              <li class="mx-3">
                <a href="" class=""
                  ><i
                    class="fab text-white fa-facebook-f hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fab text-white  fa-twitter hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fa text-white  fa-linkedin hover:text-yellow-700"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <img src="@/assets/images/t3.jpg" alt="chief" />
          </div>
        </div>
        <h2 class="text-center text-black mt-4 text-xl">Ethel Davis</h2>
        <h3 class="text-center text-gray-700">Head chef (cutting)</h3>
      </div>
      <div class="member col-span-12 sm:col-span-6 md:col-span-3 relative">
        <div class="avatar relative">
          <div
            class="overlay justify-center items-center absolute top-0 left-0 bottom-0 right-0 "
          >
            <ul class="flex justify-center items-center">
              <li class="mx-3">
                <a href="" class=""
                  ><i
                    class="fab text-white fa-facebook-f hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fab text-white  fa-twitter hover:text-yellow-700"
                  ></i
                ></a>
              </li>
              <li class="mx-3">
                <a href=""
                  ><i
                    class="fa text-white  fa-linkedin hover:text-yellow-700"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
          <div>
            <img src="@/assets/images/t4.jpg" alt="chief" />
          </div>
        </div>
        <h2 class="text-center text-black mt-4 text-xl">Ethel Davis</h2>
        <h3 class="text-center text-gray-700">Head chef (cutting)</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Teams"
};
</script>

<style scoped lang="scss">
.avatar {
  &:hover > .overlay {
    display: flex;
  }
  .overlay {
    display: none;
    background-color: rgba(209, 171, 127, 0.8);
  }
}
</style>
