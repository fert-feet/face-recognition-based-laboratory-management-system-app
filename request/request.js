const BASE_URL = 'http://localhost:8080'

export const request = (options => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + options.url,
            method: options.method || 'GET',
            header: options.header || {
                'content-type': 'application/json'
            },
            data: options.data || {},
            success: (res) => {
                const data = res.data
                console.log('response', res.data)
                if (data.code === 51 || data.code === 52) {
                    uni.navigateTo({
                        url: '/pages/login/login'
                    })
                    return
                } else if (data.code !== 200) {
                    uni.showToast({
                        icon:'error',
                        title:'操作错误'
                    })
                }
                resolve(data)
            },
            fail:(error)=>{
                console.log('errorMsg',error)
                uni.showToast({
                    icon:'error',
                    title:'系统错误'
                })
                reject(error)
            }
        })
    })
})

