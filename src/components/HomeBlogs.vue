<template>
  <section class="my-8 w-9/12 mx-auto md:w-full">
    <h2 class="text-center text-4xl font-extrabold text-black my-8">
      Latest Posts From Our Blog
    </h2>
    <p class="md:w-1/2 text-center text-gray-700 m-auto">
      Do you want to share your love of cheese fondue with your children? Or did
      you just find out that one of your fondue party guests doesn’t drink
      alcohol.
    </p>
    <div class="container m-auto grid grid-cols-12 my-8 gap-4">
      <div class="blog col-span-12 md:col-span-4 border border-gray-400">
        <img src="../assets/images/b1.jpg" alt="meat" class="w-full" />
        <div class="my-6">
          <a href="#"
            ><i class="fas mx-3 fa-x fa-user-friends"></i>
            <span>Mark Weines</span></a
          >
        </div>
        <div class="text-center text-gray-700 border-b border-gray-400">
          13th Dec
          <i class="far fa-heart"></i> 15 <i class="far fa-comment"></i> 20
        </div>
        <h6 class="my-4 w-3/4 m-auto text-xl text-black font-bold">
          Stocking Your Restaurant Kitchen Finding Reliable Sellers
        </h6>
        <p class="text-left pl-2 text-gray-800 pb-6 m-auto">
          Saving money – is something we would all like to do. Whether you are
          struggling to manage day to day or earning a six figure salary, saving
          is something we all think about.
        </p>
      </div>
      <div class="blog col-span-12 md:col-span-4 border border-gray-400">
        <img src="../assets/images/b2.jpg" alt="meat" class="w-full" />
        <div class="my-6">
          <a href="#"
            ><i class="fas mx-3 fa-x fa-user-friends"></i>
            <span>Mark Weines</span></a
          >
        </div>
        <div class="text-center text-gray-700 border-b border-gray-400">
          13th Dec
          <i class="far fa-heart"></i> 15 <i class="far fa-comment"></i> 20
        </div>
        <h6 class="my-4 w-3/4 m-auto text-xl text-black font-bold">
          Stocking Your Restaurant Kitchen Finding Reliable Sellers
        </h6>
        <p class="text-left pl-2 text-gray-800 pb-6 m-auto">
          Saving money – is something we would all like to do. Whether you are
          struggling to manage day to day or earning a six figure salary, saving
          is something we all think about.
        </p>
      </div>
      <div class="blog col-span-12 md:col-span-4 border border-gray-400">
        <img src="../assets/images/b3.jpg" alt="meat" class="w-full" />
        <div class="my-6">
          <a href="#"
            ><i class="fas mx-3 fa-x fa-user-friends"></i>
            <span>Mark Weines</span></a
          >
        </div>
        <div class="text-center text-gray-700 border-b border-gray-400">
          13th Dec
          <i class="far fa-heart"></i> 15 <i class="far fa-comment"></i> 20
        </div>
        <h6 class="my-4 w-3/4 m-auto text-xl text-black font-bold">
          Stocking Your Restaurant Kitchen Finding Reliable Sellers
        </h6>
        <p class="text-left pl-2 text-gray-800 pb-6 m-auto">
          Saving money – is something we would all like to do. Whether you are
          struggling to manage day to day or earning a six figure salary, saving
          is something we all think about.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBlogs"
};
</script>

<style scoped lang="scss">
.blog {
  & {
    overflow: hidden;
  }
  &:hover h6 {
    color: #d1ab7f;
  }
  &:hover img {
    transform: scale(1.1);
  }
  img {
    transition: all 500ms ease-in-out;
  }
}
</style>
