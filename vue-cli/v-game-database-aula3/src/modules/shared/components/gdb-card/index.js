import './style.scss'

export default {
    render(h) {
        const image = h('div', {
            class: 'gdb-card-image',
            style: { backgroundImage: `url(${ this.imageSrc })` }
        })

        const info = h('div', {
            class: 'gdb-card-info'
        }, [
            this.name 
        ])

        return h('div', { class: 'gdb-card'}, [ image, info])
    },
    data() {
        return {
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ069PJGtU_Rz6eAdvhcg7d9vDySDumWUcNXxWAjhQMZt-roFcK',
            name: 'Título do card'
        }
    }
}