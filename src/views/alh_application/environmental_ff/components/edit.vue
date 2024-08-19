<template>
    <div>
        <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="30%">
            <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="公文名称" prop="customerCode">
                            <el-input v-model="temp.customerCode" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="流转状态" prop="type2">
                            <el-radio-group v-model="temp.type2" size="mini">
                                <el-radio label="0" border>监测站科室审核</el-radio>
                                <el-radio label="1" border>流转状态</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: '编辑环保信息分发',
            visible: false,
            temp: {
                customerCode: '',
                customerName: '',
                dutyParagraph: '',
                type1: '',
                type2: '',
                type3: '',
                product: '',
            },
            rules: {}
        }
    },
    methods: {
        show(val) {
            this.visible = true
        },
        submitForm() {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    this.visible = false
                    this.$parent.getList()
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                }
            })
        }
    }
}
</script>