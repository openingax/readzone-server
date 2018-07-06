import md5 from 'md5'

export const MESSAGE = {
    OK: {
        code: 0,
        message: '请求成功',
    },
    PASSWORD_ERROR: {
        code: 300,
        message: '密码错误',
    },
    USER_NOT_EXIST: {
        code: 404,
        message: '用户不存在',
    },
    TOKEN_ERROR: {
        code: 403,
        message: 'TOKEN失效',
    },
    PARAMETER_ERROR: {
        code: 422,
        message: '参数错误',
    }
}

export const KEY = ''

export const md5Pwd = (password) => {
    const salt = ''
    return md5(md5(password + salt))
}

export const validate = (res, check, ...params) => {

    for (let param of params) {
        if (typeof param === 'undefined' || param === null) {
            return res.json(MESSAGE.PARAMETER_ERROR)
        }
    }

    if (check) {
        const uid = params[0]
        const timestamp = params[1]
        const token = params[2]
        if (token !== md5Pwd(uid.toString() + timestamp.toString() + KEY)) {
            return res.json(MESSAGE.TOKEN_ERROR)
        }
    }
}