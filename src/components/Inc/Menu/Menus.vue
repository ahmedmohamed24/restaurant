<template>
  <section class="menu py-8">
    <nav class="md:w-6/12 m-auto py-8">
      <ul class="list-none flex justify-around items-center">
        <li
          class="border bg-white border-gray-200 px-4 py-2 hover:bg-gray-200 rounded"
        >
          <button class="outline-none" @click="changeMenu(1)">Pizza</button>
        </li>
        <li
          class="border bg-white border-gray-200 px-4 py-2 hover:bg-gray-200 rounded"
        >
          <button @click="changeMenu(2)">Bread</button>
        </li>
        <li
          class="border bg-white border-gray-200 px-4 py-2 hover:bg-gray-200 rounded"
        >
          <button @click="changeMenu(3)">
            Burger
          </button>
        </li>
        <li
          class="border bg-white border-gray-200 px-4 py-2 hover:bg-gray-200 rounded"
        >
          <button @click="changeMenu(4)">
            Chicken
          </button>
        </li>
      </ul>
    </nav>

    <img
      v-if="selectedMenu === 1"
      src="@/assets/images/menu1.jpeg"
      alt="menu"
      class="w-64 m-auto"
    />
    <img
      v-else-if="selectedMenu === 2"
      src="@/assets/images/menu2.jpeg"
      alt="menu"
      class="w-64 m-auto"
    />
    <img
      v-else-if="selectedMenu === 3"
      src="@/assets/images/menu3.jpeg"
      alt="menu"
      class="w-64 m-auto"
    />
    <img
      v-else-if="selectedMenu === 4"
      src="@/assets/images/menu4.jpeg"
      alt="menu"
      class="w-64 m-auto"
    />
  </section>
</template>

<script>
export default {
  name: "Menus",
  data: function() {
    return {
      selectedMenu: 1
    };
  },
  methods: {
    changeMenu: function(menu) {
      this.selectedMenu = menu;
    }
  }
};
</script>

<style scoped>
.menu {
  background-image: url("~@/assets/images/pattern-bg.jpg");
  background-size: 100% 100%;
  background-position: center center;
}
</style>
