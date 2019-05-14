import Vue from 'vue';
import GdbCard from '@/modules/shared/components/gdb-card/'
new Vue({
    render(h) {
        const gdbCard = h(GdbCard)
        return h('div', [this.message, gdbCard])
    },
    data() {
        return {
            message: 'Primeiro componente no VueCLI'
        }
    }
}).$mount('#app')