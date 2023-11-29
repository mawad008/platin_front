<template>
  <div style="min-height: 100vh">
    <div class="container settings-container" style="margin-top: 100px">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
      </v-breadcrumbs>
      <div class="row">
        <div class="col-4">
            <v-tabs
        v-model="tab"
        direction="vertical"
        color=""
        class="settings-links"
      >
        <v-tab value="option-1">
            <div class="link">
            <div class="icon">
              <img src="~/assets/images/person.svg" alt="">
            </div>
              <span> الملف الشخصي </span>
            </div>
        </v-tab>
        <v-tab value="option-2">
            <div class="link">
            <div class="icon">
              <img src="~/assets/images/notification-bing.svg" alt="">
            </div>
              <span> الاشعارات </span>
            </div>
        </v-tab>
        <v-tab value="option-3">
            <div class="link">
            <div class="icon">
              <img src="~/assets/images/location.svg" alt="">
            </div>
              <span> العناوين المسجلة </span>
            </div>
        </v-tab>
        <v-tab value="option-4">
            <div class="link">
            <div class="icon">
              <img src="~/assets/images/box.svg" alt="">
            </div>
              <span> طلباتي </span>
            </div>
        </v-tab>
      </v-tabs>
        </div>
        <div class="col-8">
            <v-window v-model="tab">
        <v-window-item value="option-1">
          <div>
            <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
              </p>

              <p>
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
              </p>

              <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
          </div>
        </v-window-item>
        <v-window-item value="option-2">
         <div>
            <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
         </div>
        </v-window-item>
        <v-window-item value="option-3">
        <div>
            <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
        </div>
        </v-window-item>
      </v-window>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let tab = ref('option-1');
let items = ref([
  {
    title: "الاعدادات",
    disabled: true,
    href: "/",
  },
  {
    title: "الملف الشخصي",
    disabled: false,
    href: "cart",
    class: "fw-bold",
  },
]);
</script>

<style lang=""></style>
