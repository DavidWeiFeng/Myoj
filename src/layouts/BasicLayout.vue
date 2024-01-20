<template>
  <div id="basicLayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">内容栏
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer"></a-layout-footer>
    </a-layout>
  </div>

</template>

<style scoped>
#basicLayout{

}
#basicLayout .header
{
  margin-bottom: 15px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content{
  background: linear-gradient(to right ,#aaa,#fff);
  margin-bottom: 15px;
  padding: 10px;
}
</style>
<script setup lang="ts">
import GlobalHeader from  "@/components/GlobalHeader.vue";
</script>