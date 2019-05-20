class Typing {
    constructor(opts) {
        this.opts = opts || {}
        this.source = opts.source
        this.output = opts.output
        this.delay = opts.delay || 120
        this.chain = {
            parent: null,
            dom: this.output,
            val: []
        }
        if (typeof this.opts.done !== 'function') {
            this.opts.done = () => { }
        }
        this.curTimeout = null
    }

    init() {
        this.chain.val = this.convert(this.source, this.chain.val)
    }

    convert(dom, arr) {
        let children = Array.from(dom.childNodes)
        children.forEach((node) => {
            if (node.nodeType === 3) {
                arr = arr.concat(node.nodeValue.split(''))
            }
            if (node.nodeType === 1) {
                let val = []
                val = this.convert(node, val)
                arr.push({
                    dom: node,
                    val: val
                })
            }
        })
        return arr
    }

    print(dom, val, callback) {
        if(this.finished){
            return
        }
        this.curTimeout = setTimeout(() => {
            dom.appendChild(document.createTextNode(val))
            callback()
        }, this.delay)
    }

    play(item) {
        if (this.finished) {
            return
        }
        if (!item.val.length) {
            if (item.parent) this.play(item.play)
            else this.opts.done()
            return
        }
        let shiftVal = item.val.shift()
        if (typeof shiftVal === 'string') {
            this.print(item.dom, shiftVal, () => {
                this.play(item)
            })
        } else {
            let dom = shiftVal.dom.cloneNode()
            item.dom.appendChild(dom)
            this.play({
                parent: item,
                dom,
                val: shiftVal.val
            })
        }
    }

    start() {
        this.init()
        this.play(this.chain)
    }

    finish() {
        clearTimeout(this.curTimeout)
        this.delay = 0
    }
}

export default Typing