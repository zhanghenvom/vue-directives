let numberOnly = {
    bind(el) {
        el.handler = function (e) {
            let num = 2
            const input = e.target;
            const regex = /^[0-9]+(\.[0-9]{0,2})?$/;
            const value = input.value;
            if (!regex.test(value)) {
                input.value = value.slice(0, -1);
            }
        };
        el.addEventListener('input', el.handler);
    },
    unbind(el) {
        el.removeEventListener('input', el.handler);
    },
}

export default numberOnly