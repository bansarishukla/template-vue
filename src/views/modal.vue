<template>
  <div id="app" class="text-center">
    <h1 class="text-2xl font-bold mb-8">Modal</h1>
    <p>
      <a href="#cancel-modal" class="text-blue-500 underline">Open Modal</a>
    </p>
    <modal id="#cancel-modal">
      <h1 class="font-bold text-xl mb-2">Leaving So Soon?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </modal>
  </div>
</template>
<script>
import Modal from "../components/Modal";
export default {
  Modal
};
</script>
