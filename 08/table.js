const Tools = {
    render() {

    }
}

const Table = {
    props: {
        colums: {
            type: Array,
            default: [],
        },
        datas: {
            type: Array,
            default: [],
        },
        striped: Boolean,
        bordered: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            selectAll: false
        }
    },

    mounted() {
        console.log(this);
    },

    // render(h) {
    //     // 生成th
    //     const colums = this.colums.map(colum => {
    //         return h("th", colum.title)
    //     })

    //     // 生成thead
    //     const thead = h("thead", colums)

    //     // 生成tr
    //     const trs = this.datas.map(data => {
    //         // 生成tr的列
    //        const tds = this.colums.map(colum => {
    //             // console.log(colum)
    //             let value = data[colum.key]
    //             if (colum.render && typeof colum.render === "function") {
    //                 value = [colum.render(h, colum, data)];
    //             }
    //             return h("td", value)
    //         })

    //         return h("tr", tds)
    //     })

    //     // 生成tbody
    //     const tbody = h("tbody", trs)

    //     // 生成table
    //     return h("table", {
    //         // v-bind:class
    //         class: [
    //             "table",
    //             {
    //                 'table-striped': this.striped,
    //                 'table-bordered': this.bordered
    //             }
    //         ]
    //     }, [thead, tbody])
    //     // return h("table", {
    //     //     class: [
    //     //         "table",
    //     //         {
    //     //             'table-striped': this.striped,
    //     //             'table-bordered': this.bordered
    //     //         }
    //     //     ]
    //     // },[
    //     //     h("thead", this.colums.map(colum => {
    //     //         return h("th", colum.title)
    //     //      })),
    //     //     h("tbody", this.datas.map(data => {
    //     //         return h("tr", this.colums.map(colum => {
    //     //             if (colum.render) {
    //     //                 return h("td", [colum.render(h)])
    //     //             }
    //     //             return h("td", data[colum.key])
    //     //         }))
    //     //     }))
    //     // ])
    // },
    
    template: `
    <table :class="[
        'table',
        {
            'table-striped': striped,
            'table-bordered': bordered
        }
    ]">
        <thead>
            <th>
                <input v-model="selectAll" type="checkbox" />
            </th>
            <slot name="th" :colums="colums" />
            <!--<th v-for="item in colums">
                {{item.title}}
            </th>-->
        </thead>
        <tbody>
            <tr v-for="(item, index) in iDatas">
                <td>
                    <input type="checkbox" v-model="item.checked" />
                </td>
                <slot name="td" :row="item" />
                <!--<td v-for="col in colums" >
                    {{item[col['key']]}}
                    <slot name="btn" v-if="col.render" />
                </td>-->
            </tr>
        </tbody>
    </table>
    `,
    watch: {
        // 监听它是否发生改变
        iDatas: {
            handler(value) {
                var arr = value.filter(item => !item.checked);
                
                this.selectAll = arr.length === 0

                // 触发一个选中事件
                this.$emit("select", value.filter(item => item.checked))
            },
            deep: true
        }
    },

    computed: {
        iDatas() {
            return this.datas.map(item => {
                // 这个添加的不是响应式数据
                // item.checked = this.selectAll;
                this.$set(item, "checked", this.selectAll);
                // Vue.set(item, "checked", this.selectAll);

                return item
            })
        },
    },

    methods: {
        remove(item, index) {
            this.$emit("remove", item, index)
        }
    }

    // data() {
    //     return {
    //         iColums: [
    //             {
    //                 title: "账号",
    //                 key: "username"
    //             },
    //             {
    //                 title: "邮箱",
    //                 key: "email"
    //             },
    //             {
    //                 title: "手机",
    //                 key: "phone"
    //             },
    //             {
    //                 title: "地址",
    //                 key: "address"
    //             }
    //         ],
    //         iDatas: [
    //             {
    //                 username: "张三",
    //                 email: "1@qq.com",
    //                 phone: "1320000001",
    //                 address: "北京市朝阳区"
    //             },
    //             {
    //                 username: "李四",
    //                 email: "2@qq.com",
    //                 phone: "1320000002",
    //                 address: "北京市朝阳区"
    //             }
    //         ]
    //     }
    // },
};
Vue.component("ITable", Table)
Vue.component("Table", Table)

/**
 * 组件内部 不能修改传递进来的prop
 * 否则使用组件的人 不知道什么时候数据就改变了
 * 
 * 因为vue是以数据为中心的一个框架 如果数据不安全 整个页面的逻辑或者展示结果就不能得到保障
 * 修改数据的操作 都交由使用组件的人自己去修改
 */