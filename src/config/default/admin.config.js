// admin 配置
const ADMIN = {
    palettes: ['#41444b', '#32e0c4', '#005086', '#ff9234', '#848ccf', '#cf1b1b', '#7fdbda', '#40bad5'], //主题色
    animates: require('./animate.config').preset,
    theme: {
        mode: {
            DARK: 'dark',
            LIGHT: 'light',
            NIGHT: 'night'
        }
    },
    layout: {
        SIDE: 'side',
        HEAD: 'head'
    }
}

module.exports = ADMIN