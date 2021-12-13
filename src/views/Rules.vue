
<template>
  <section class="container">
    <RulesHeader />
    <div class="row">
      <RulesMain />
      <RulesAside />
    </div>
  </section>
</template>

<script>
import RulesHeader from "../components/Rules/RulesHeader.vue";
import RulesMain from "../components/Rules/RulesMain.vue";
import RulesAside from "../components/Rules/RulesAside.vue";

export default {
  name: "Rules",
  components: {
    RulesHeader,
    RulesMain,
    RulesAside,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss"; //  remove
</style>


