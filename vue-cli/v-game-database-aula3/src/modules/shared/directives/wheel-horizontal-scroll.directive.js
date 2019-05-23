function handler(event) {
    if(event.deltaY !== 0) {
        event.preventDefault()

        const multiplier = 1.5
        const offset = event.deltaY * multiplier
        this.scrollLeft += offset
    }
}

export default {
    wheelHorizontalScroll: {
        bind(element) {
            element.addEventListener('wheel', handler)
        },
        unbind(element) {
            element.removeEventListener('wheel', handler)
        }
    }
}