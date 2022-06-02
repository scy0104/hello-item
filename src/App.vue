<template>
   <Time @date-change="payload => active = payload"></Time>
   <remark :date="active"></remark>
</template>

<script>
   import Time from './views/Time.vue'
   import remark from './views/remark.vue'

   export default {
     components :{ 
       Time,
       remark,
     },
     data() {
       return {
         active:null,
       }
     }
   }
</script>