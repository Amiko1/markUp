<template>
  <header class="row header">
    <h2 class="header__text">Rules</h2>
    <div class="flex">
      <p class="header__setup">HOW TU SET UP RULES?</p>
      <base-button size="lg" class="header__button">ADD NEW RULE </base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
};
</script>



<style lang="scss" scoped>
@import "@/assets/_variables.scss"; //  remove

.header {
  border-radius: 8px;
  margin-top: 20px; //remove later
  background: linear-gradient(180deg, #567ef1 0%, #5da3ff 100%);
  padding: 1.125rem 1.875rem 1.125rem 1.875rem;
  align-items: center;
  justify-content: space-between;
  &__text {
    color: $light;
    font-weight: 700;
    font-size: 1.875rem;
  }
  &__setup {
    font-size: 0.875rem;
    margin-right: 1.875rem;
    color: $light;
  }
  &__button {
    font-weight: bold;
  }
}
</style>