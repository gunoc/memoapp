<template>
  <section>
      <transition-group name="list" tag="ul"> 
          <li v-for="(wishItem, index) in propsData" :key="wishItem.key" class="shadow">
              
              <!-- 리스트 맨 앞에 표시되는 체크아이콘 -->
              <i class="checkBtn fas fa-check" aria-hidden="true"></i>

              {{wishItem.value}}&nbsp; <span class="textmuted">
                  {{formatDate(wishItem.createdDate)}}
                  <!-- formatDate():날짜 정보를 담고 있는 객체를 포맷팅하여 출력할 때 사용됨 -->
              </span>
              
              <!-- 수정하기 버튼을 클릭하면 선택되어진 리스트만 수정돼야함 editWish()함수가 적용 -->
                <span class="editBtn" type="button" @click="editWish(wishItem.key, index)">
                    <i class="far fa-edit" aria-hidden="true"></i>
                </span>

                <!-- 휴지통 버튼을 클릭하면 선택된 리스트만 삭제가 됨. removeWish()함수 적용 -->
                <span class="removeBtn" type="button" @click="removeWish(wishItem.key, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
          </li>
      </transition-group>
  </section>
</template>

<script>
import Modal from "./Modal.vue"
export default {
    props: ["propsData"],
    
    data(){
        return{
            editModal: false, //모달팝업 안보이게
            currentWish: "", //수정될 데이터의 인덱스
            editWishObj:{
                //수정되어진 키, 인덱스, 입력값
                key: "",
                index: "",
                text: "def" //수정된 데이터값 정의
            }
        }
    },
    methods:{
        //휴지통 클릭했을 때 데이터 삭제
        removeWish(keyOfWishItem, index){
            this.$emit("removeWish", keyOfWishItem, index)
        },
        //데이터 수정

        editWish(keyOfWishItem, index){
            this.editWishObj.index = index; //수정한 인덱스
            this.currentWish = this.propsData[index]; //수정한 데이터의 인덱스
            this.editWishObj.text = this.currentWish.value; //수정한 데이터의 값
            this.editWishObj.key = keyOfWishItem; //선택되어진 순번의 key 값
            this.editModal = !this.editModal;//수정되지 않은 모달팝업
        },
        //데이터 수정된 값
        editWishAction(keyOfWishItem,index,editText){
            const obj = this.editWishObj;
            this.$emit(
                "editWish",
                obj.key,
                obj.index,
                obj.text,
                new Date().getTime()
            );
            this.editModal = false;
        },
        formatDate(date){
            //작성한 년월일시분초
            const d = new Date(date);
            let month = "" + (d.getMonth()+1);
            let day = "" + d.getDay();
            const year = "" + d.getFullYear();
            let hour = "" + d.getHours();
            let minute = "" + d.getMinutes();
            let second = "" + d.getSeconds();

            if(month.length < 2) month = "0" + month;
            if(day.length < 2) day = "0" + day;
            if(hour.length < 2) hour = "0" + hour;
            if(minute.length < 2) minute = "0" + minute;
            if(second.length < 2) second = "0" + second;

            return(
                [year, month, day].join("-")+" "+[hour,minute,second].join(":")
            )
        },
       
        

        //등록한 날짜와 시간
    }, 
    components:{
        Modal: Modal
    }

};
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5em 0;
        padding: 0 0.9em;
        background: #fefefe;
        overflow: hidden;
        border-radius: 5px;
        text-overflow: ellipsis;
    }
    .checkBtn{
        line-height: 50px;
        color: #ff8000;
        margin-right: 5px;
    }
    .editBtn{
        margin-left: auto;
        color:black;
        cursor: pointer;
    }
    .removeBtn{
        margin-left: 10px;
        color: #de4343;
        cursor: pointer;
    }
    input{
        border-style: groove;
        width: 275px;
        padding: 5px 10px;
        border-color: #efefef;
        margin-top: 15px;
        font-size: 14px;
                border-radius: 5px;
    }
    button{
        padding: 5px 15px;
        border-color: #efefef;
        border-radius: 5px;
                margin-top: 15px;
        font-size: 14px;
    }
</style>