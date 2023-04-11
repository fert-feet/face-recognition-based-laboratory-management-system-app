/**
 * 获取用户基本信息
 */
export function login(data) {
    return request({
        url: '/sys/login',
        method: 'POST',
        data,
    });
}

