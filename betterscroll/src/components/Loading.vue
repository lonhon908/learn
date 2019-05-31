<template>
  <div class="loading">
    <i></i>
    <b></b>
    <strong></strong>
    <em></em>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.loading{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  i,b,strong, em{
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background-color: #cccccc;
    box-shadow: 0px 0px 0px 0px #cccccc;
  }
  b{
    margin: 0 10px;
  }
  em{
    margin-left: 10px;
  }
  i{
    animation: identifier 400ms linear 0ms infinite alternate;
  }
  b{
    animation: identifier 400ms linear 100ms infinite alternate;
  }
  strong{
    animation: identifier 400ms linear 200ms infinite alternate;
  }
  em{
    animation: identifier 400ms linear 300ms infinite alternate;
  }
}

@keyframes identifier {
  0%{
    box-shadow: 0px 0px 0px 1px #cccccc;
  }
  33.3%{
    box-shadow: 0px 0px 0px 2px #cccccc;
  }
  66.6%{
    box-shadow: 0px 0px 0px 3px #cccccc;
  }
  100%{
    box-shadow: 0px 0px 0px 4px #cccccc;
  }
}
</style>

