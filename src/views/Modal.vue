<template>
  <div name="modal">
      <div class="modal-mask">
          <div class="modal-wrapper">
              <div class="modal-container">
                  <div class="modal-header">
                      <slot name="header">
                          <!-- 슬롯에 문자가 입력됨. -->
                      </slot>
                  </div>
                  <div class="modal-footer">
                      <slot name="footer">
                          <!-- 슬록에 문자가 입력됨. -->
                        <button class="modal-default-button" @click="$emit('close')">ok</button>
                      </slot>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.modal-mask{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: table;
    transition:  all 0.3s ease;
    opacity: 0.3;
}
.modal-wrapper{
    display: table-cell;
    vertical-align: middle;
}
.modal-container{
    width: 300px;
    padding: 20px 30px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        transition:  all 0.3s ease;
    font-family: Arial, Helvetica, sans-serif;
}
.modal-header h3{
    margin-top: 0;
    color: #42b983;
}
.modal-header i{
    color: gold;
}
.modal-header span{
    color: #42b983;
    padding-left: 20px;
    font-weight: 900;
}
.modal-default-button{
    float: right;
}
</style>