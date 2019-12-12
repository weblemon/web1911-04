<template>
    <div class="banner">
        <transition-group
            :enter-active-class="enter"
            :leave-active-class="leave"
            @before-enter="run('before-enter')"
            @enter="run('enter')"
            @after-enter="run('after-enter')"
            @enter-cancelled="run('enter-cancelled')"

            @before-leave="before"
            @leave="run('leave')"
            @after-leave="after"
            @leave-cancelled="run('leave-cancelled')"
        >
            <div
                class="banner-item"
                v-for="(item, index) in list"
                :key="item"
                v-show="selectIndex === index"
            >
                <img :src="item" />
            </div>
        </transition-group>

        <button @click="play(selectIndex - 1)" class="btn prev">上一张</button>
        <button @click="play(selectIndex + 1)" class="btn next">下一张</button>
        <div class="btn-group">
            <span
                v-for="(item, index) in list"
                :key="item"
                :class="{
                    active: selectIndex === index
                }"
                @click="play(index)"
            >
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    "https://img20.360buyimg.com/babel/s590x470_jfs/t1/101848/8/5463/100727/5dedaf24E6fe28793/61b7799088ceb188.jpg.webp",
                    "https://img20.360buyimg.com/pop/s590x470_jfs/t1/105739/7/5613/62942/5dedeedaE630f0fd9/23e555c8408cbfe7.jpg.webp",
                    "https://imgcps.jd.com/ling/100000287145/5a6255So55S15ZmoMuaKmOi1tw/5Lqs5Lic5ZWG55So6ZKc5oOg5p2l6KKt/p-5bd8253082acdd181d02fa09/ec4c3ae8.jpg",
                    "https://img13.360buyimg.com/da/s590x470_jfs/t18487/241/1444742474/110119/f5bc9082/5acb3af6N2af11d1c.jpg.webp"
                ],
                selectIndex: 0,
                enter: "one fadeInRight",
                leave: "one fadeOutLeft",
                lock: false,
            }
        },
        watch: {
            selectIndex(val, oldVal) {
                if (val <= 0) {
                    this.selectIndex = 0;
                } else if (val > this.list.length - 1) {
                    this.selectIndex = this.list.length - 1
                }

                if (val > oldVal) {
                    this.enter = "one fadeInRight"
                    this.leave = "one fadeOutLeft"
                } else if (val < oldVal) {
                    this.enter = "one fadeInLeft"
                    this.leave = "one fadeOutRight"
                }
            }
        },
        methods: {
            run(a) {
                console.log(a)
            },
            play(index) {
                if (!this.lock) {
                    this.selectIndex = index;
                }
            },
            before() {
                // console.log("locked")
                this.lock = true;
            },
            after() {
                // console.log("unlock")
                this.lock = false;
            }
        }
    }
</script>

<style scoped>
    .one {
        animation-duration: 0.2s;
    }
    .banner {
        width: 590px;
        height: 470px;
        position: relative;
        overflow: hidden;
    }
    .banner-item {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .btn-group {
        position: absolute;
        width: 100%;
        bottom: 10px;
        text-align: center;
    }

    .btn-group span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        margin: 0 3px;
        cursor: pointer;
    }

    .btn-group span.active {
        background: #000;
    }

    .btn {
        position: absolute;
        top: 50%;
    }

    .btn.next {
        right: 0;
    }
</style>