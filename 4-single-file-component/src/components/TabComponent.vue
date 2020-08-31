<template>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" v-bind:key="index + tab" v-bind:class="{active: tab === selectedTab}"
        v-on:click="onChangeTab(tab)">
        {{tab}}
        </li>
    </ul>
</template>

<script>
export default {
    props: ['tabs', 'selectedTab'],
    methods: {
        onChangeTab(tabName) {
            this.$emit('@change', tabName);
        }
    },
}
</script>