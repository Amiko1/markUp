<template>
  <button class="btn" :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
    },
    type: {
      type: String,
      default: "filled",
    },
    icon: {
      type: [String, null],
      default: null,
    },
    iconPosition: {
      type: String,
      default: "left",
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return `btn--${this.size} btn--${this.type} ${
        this.iconOnly ? "btn--icon" : ""
      }`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/_variables.scss"; // TODO: remove

.btn {
  $btn: &;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  &:disabled {
    opacity: 0.5;
  }

  &--filled {
    background-color: rgba(255, 255, 255, 0.21);
    color: $light;
  }
  &--bordered {
    border: solid 1px $dark;
    color: $blue;
    background-color: $light;
  }

  &--filled-green {
    background-color: $green;
    color: $light;
  }

  &--tertiary {
    color: $blue;
  }
  &--lg {
    padding: 1rem 4rem;
    border-radius: 4.375rem;
  }
  &--md {
    padding: 0.625rem 1.25rem;
    border-radius: 4.375rem;
    &#{$btn}--icon {
      padding: 0.625rem;
    }
  }
  &--sm {
    padding: 0.5rem 0.75rem;
    border-radius: 4.375rem;
    height: 32px;
  }
}
</style>