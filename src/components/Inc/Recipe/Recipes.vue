<template>
  <article class="my-5">
    <form action="" class="text-center" @submit.prevent="fetchRecipe">
      <input
        v-model="item"
        class="shadow max-w-2xl appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="item"
        type="text"
        placeholder="Enter your search word ..."
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
    <div
      v-if="notFound"
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mx-auto my-8 w-6/12"
      role="alert"
    >
      <p class="font-bold">Not found</p>
      <p>There is nothing related to your search item.</p>
    </div>
    <h2 class="text-center my-5 text-2xl text-blue-900">Some common items</h2>
    <div
      class="container flex justify-center items-center flex-wrap mx-auto my-8"
    >
      <div
        class="w-1/4 bg-gray-200 p-2 text-blue-800 rounded border"
        v-for="item in searchWordsSuggestions"
        :key="item.id"
      >
        {{ item }}
      </div>
    </div>
    <div v-if="loading" class="text-center my-8">
      <i class="fas fa-3x fa-spinner fa-spin"></i>
    </div>
    <div class="recipes my-8" v-if="recipes">
      <table class="container m-auto">
        <thead>
          <tr class="mb-6">
            <th class="text-blue-800 mb-8">Title</th>
            <th class="text-blue-800 mb-8">Image</th>
            <th class="text-blue-800 mb-8">Publisher</th>
            <th class="text-blue-800 mb-8">Social Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center mt-4"
            v-for="recipe in recipes['recipes']"
            :key="recipe.id"
          >
            <td class="border w-1/4">
              <a class="text-blue-800" :href="recipe['publisher_url']">{{
                recipe["title"]
              }}</a>
            </td>
            <td class="border w-1/4">
              <img
                class="w-full p-2"
                :src="recipe['image_url']"
                :alt="recipe['title']"
              />
            </td>
            <td class="border w-1/4">{{ recipe["publisher"] }}</td>
            <td class="border w-1/4">{{ recipe["social_rank"] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
export default {
  name: "Recipes",
  data: function() {
    return {
      item: null,
      recipes: null,
      loading: false,
      notFound: false,
      searchWordsSuggestions: [
        "pizza",
        "carrot",
        "broccoli",
        "asparagus",
        "cauliflower",
        "corn",
        "cucumber",
        "green pepper",
        "lettuce",
        "mushrooms",
        "onion",
        "potato"
      ]
    };
  },
  methods: {
    fetchRecipe: function() {
      this.loading = true;
      if (this.item === null) {
        this.notFound = true;
      } else {
        this.notFound = false;
        axios
          .get(`https://forkify-api.herokuapp.com/api/search?q=${this.item}`)
          .then(response => {
            this.recipes = response.data;
          })
          .catch(() => {
            this.notFound = true;
          })
          .finally(() => (this.loading = false));
      }
    }
  }
};
</script>

<style scoped></style>
