<template>
  <main class="rules__main">
    <div class="rules__main-header">
      <h3>Highest priority</h3>
      <hr />
      <Icon name="check" />
    </div>
    <RulesCard />
  </main>
</template>

<script>
import RulesCard from "./RulesCard.vue";

export default {
  name: "Rules",
  components: {
    RulesCard,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss"; //  remove later

.rules__main {
  box-shadow: 0px 1px 2px rgba(125, 168, 255, 0.16);
  width: 72%;
  color: $gray;
  font-weight: 500;
  padding: 1.8rem;

  &-header {
    display: flex;
    align-items: center;
    h3 {
      width: 120px;
      margin-right: 10px;
      font-size: 0.875rem;
    }
    hr {
      width: 100%;

      border: 0px;
      border-top: 1px solid #eaefff;
    }
  }
}
</style>