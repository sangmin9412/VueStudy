export default {
    template: '#tabs',
    props: ['tabs', 'selectedTab'],
    methods: {
        onChangeTab(tabName) {
            this.$emit('@change', tabName);
        }
    },
}