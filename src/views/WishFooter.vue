<template>
  <div class="buttonContainer">
      <div class="clearAllContainer">
          <span class="clearAllBtn" @click="clearWish">모든일정삭제</span>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        clearWish(){
            const isAllRemover = confirm("정말 모든 일정을 삭제하시겠습니까?")
            if(isAllRemover){
                this.$emit("removeAllOfChild"); //부모요소로 전달
            }
        }
    }
}
</script>

<style>

</style>