<template>
    <div class="about">

    <el-container>
        <NavMenu />
        <el-container>

            <el-header>
                  <Breadcrumb />
            </el-header>


             <el-main> <router-view /> </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script>
import NavMenu from './navmu.vue'
import Breadcrumb from './breadcrumb.vue'
export default {
  data() {
    return {

    }
  },

  methods: {
  },

  components: {
    NavMenu,
    Breadcrumb
  }
}

</script>

