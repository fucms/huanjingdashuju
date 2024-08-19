<template>
    <div  class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="代办事宜" name="first">
                <Commission ref="Commission" />
            </el-tab-pane>
            <el-tab-pane label="预警信息" name="second">
                <EarlyWarning ref="EarlyWarning" />
            </el-tab-pane>
            <el-tab-pane label="已办事宜" name="third">
                <AlreadyDone ref="AlreadyDone" />
            </el-tab-pane>
            <el-tab-pane label="个人信息" name="fourth">
                <userImage ref="userImage"></userImage>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import AlreadyDone from './othe_list/alreadyDone.vue'
import Commission from './othe_list/commission.vue'
import EarlyWarning from './othe_list/earlyWarning.vue'
import userImage from './othe_list/user_image.vue'
export default {
    data() {
        return {
            activeName: 'first'
        }
    },
    components: {
        AlreadyDone,
        Commission,
        EarlyWarning,
        userImage
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="scss" scoped></style>