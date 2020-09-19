<template>
  <footer class="pb-16">
    <div class="py-16 mt-16 grid grid-cols-12 gab-4">
      <div class="col-span-12 md:col-span-4 px-6 mb-4">
        <h3 class=" text-2xl md:text-3xl text-white font-bold">About Us</h3>
        <p class="text-gray-400">
          If you own an Iphone, you’ve probably already worked out how much fun
          it is to use it to watch movies-it has that.
        </p>
      </div>
      <div class="col-span-12 md:col-span-4 px-6 mb-4">
        <h3 class=" text-2xl md:text-3xl text-white font-bold">Newsletter</h3>
        <p class="text-gray-400">Stay update with our latest</p>
        <div class="mt-4 flex">
          <input
            type="text"
            class="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
            placeholder="Your email address"
          />
          <button
            class="bg-yellow-500  hover:bg-yellow-600 text-white rounded-sm h-auto text-xs p-2"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 px-6">
        <h3 class=" text-2xl md:text-3xl text-white font-bold">Follow Us</h3>
        <p class="text-gray-400">Let us be social</p>
        <ul class="flex items-center my-4">
          <li class="mx-3">
            <a href="" class=""
              ><i class="fab text-white fa-facebook-f hover:text-yellow-700"></i
            ></a>
          </li>
          <li class="mx-3">
            <a href=""
              ><i class="fab text-white fa-twitter hover:text-yellow-700"></i
            ></a>
          </li>
          <li class="mx-3">
            <a href=""
              ><i
                class="fa text-white fa-linkedin hover:text-yellow-700"
                aria-hidden="true"
              ></i
            ></a>
          </li>
          <li class="mx-3">
            <a href=""
              ><i
                class="fa text-white fa-instagram hover:text-yellow-700"
                aria-hidden="true"
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center text-gray-400">All copy rights are reserved</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background-color: #04091e;
}
</style>
