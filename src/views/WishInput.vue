<template>
  <div class="inputBox shadow">
      <input type="text" v-focus v-model="newWishItem" v-on:keyup.enter="addWish" placeholder="해야할 일을 입력하세요">
  </div>
  <span class="addContainer" v-on:click="addWish">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
  </span>
  <!-- 모달팝업의 내용을 slot을 이용해 타이틀과 내용띄우기 -->
  <modal v-if="showModal" @close="showModal = false">
      <!-- 모달제목 -->
      <template v-slot:header>
          <h3>팝업타이틀</h3>
      </template>
      <!-- 모달내용 -->
      <template v-slot:footer>
          <span @click="showModal = false">
              할일을 입력하세요
              <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
          </span>
      </template>

  </modal>
</template>

<script>
/* 모달 불러오기 */
import Modal from "./Modal.vue";
export default {
    data(){
        return{
            newWishItem: "",
            showModal: false,
        }
    },
    //v-for 디렉티브
    directives:{
        focus:{
            inserted: function(el){
                el.focus();
            }
        }
    },
    methods: {
        addWish(){
            if(this.newWishItem !== ""){
                const value = this.newWishItem && this.newWishItem.trim();
                const key = "vue-wish-" + new Date().getTime();
                this.$emit("addWish",key,value, new Date().getTime());
                this.clearInput(); //비워진 input호출
            } else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newWishItem = "";
        }
    },
    components: {
        Modal: Modal,
    }
};
</script>

<style scoped>
    input:focus{
        outline: none;
    }
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin-bottom: 25px;
}
.inputBox input{
    border-style: none;
    font-size: 1.2em;
    font-weight: bold;
    width: 12em;
    color: #2f3b52;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #ff4c4d, #b30000);
    display: inline;
    width: 3em;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}


</style>