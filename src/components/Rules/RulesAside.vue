
<template>
  <aside class="aside">
    <div class="aside__header">
      <p>Filters</p>
      <p class="flex"><Icon name="add" />ADD FILTER</p>
      <p class="flex"><Icon name="clear" /> CLEAR</p>
    </div>
    <div class="aside__filters row">
      <BaseButton
        v-for="(filter, index) in filters"
        :key="index"
        class="aside__filter col-12"
        type="filled-green"
        size="md"
        :class="filterClass(index)"
      >
        <Icon class="icon" :name="filter.iconName" />
        <span> {{ filter.strongText }} </span>
        &nbsp;
        {{ filter.text }}
      </BaseButton>
    </div>
  </aside>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";
import Icon from "../Icon.vue";
let count = 0;
export default {
  components: {
    BaseButton,
    Icon,
  },
  data() {
    return {
      filters: [
        {
          iconName: "Flash",
          strongText: "Event",
          text: "is Any",
        },
        {
          iconName: "danger",
          strongText: "State",
          text: "is Any",
        },
        {
          iconName: "tag",
          strongText: "Conversation tag",
          text: "is Hello message",
        },
        {
          iconName: "share",
          strongText: "Assign to",
          text: "has Any Values",
        },
        {
          iconName: "star",
          strongText: "Mark as priority",
          text: "",
        },
        {
          iconName: "alarm",
          strongText: "Apply SLA",
          text: "",
        },
      ],
    };
  },

  methods: {
    filterClass(index) {
      if (index % 2 === 0) {
        count++;
      }

      return count % 2 === 0 ? "col-12" : "col-xl-6";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss"; //    remove later
.aside {
  padding: 1.25rem;
  width: 28%;
  box-shadow: -4px 0px 20px rgba(125, 168, 255, 0.16);
  &__header {
    :first-child {
      color: $dark;
      font-size: 1.5rem;
    }
    :nth-child(2) {
      font-size: 0.875rem;
      color: #5da3ff;
    }
    :nth-child(3) {
      font-size: 0.875rem;
      color: #ff4757;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__filters {
    margin-top: 0.8rem;

    justify-content: space-between;
  }
  &__filter {
    margin-top: 1.2rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    span {
      font-weight: 700;
    }
  }
}
</style>