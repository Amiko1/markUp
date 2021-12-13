<template>
  <article class="card">
    <Icon class="card__three-dot" width="19" height="19" name="dots" />
    <div class="card__left-content">
      <h4>New rule</h4>
      <p class="vertical-center">
        <Icon class="mr-sm" name="Rocket" /> When customer starts a new
        conversation
      </p>
      <p class="vertical-center"><Icon class="mr-sm" name="check" />Close</p>
    </div>
    <div class="card__right-content">
      <Icon name="ThreeDot" />
      <p>Updated: 1 minute ago</p>
    </div>
  </article>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss"; //  remove

.card {
  background: linear-gradient(180deg, #fafcff 0%, #ffffff 100%);
  box-shadow: 0px 3px 6px rgba(125, 168, 255, 0.16);
  border-radius: 20px;
  padding: 1.25rem;
  margin-top: 1.2rem;
  display: flex;
  &__three-dot {
    margin-right: 1.375rem;
    margin-top: 9px;
  }
  &__left-content {
    display: flex;
    flex-direction: column;
    gap: 11px;
    h4 {
      color: $dark;
      font-size: 1.125rem;
    }
  }
  &__right-content {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    p {
      font-size: 0.875rem;
    }
  }
}
</style>