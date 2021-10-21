<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Person {
  @Prop({ type: Array, default: () => [] }) a!: number[]
  @Prop({ type: Number, default: 0 }) b!: number

  private persons: any[]

  mounted() {
    this.persons = []
  }

  addPerson(person: any) {
    this.persons.push(person)
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
