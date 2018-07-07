import express from 'express'
import { MESSAGE } from '../config'
import { register, isValidUser, getUserInfo} from '../models/user';

const router = express.Router();

router.post('/login', (req, res) => {
    const { account, password } = req.body;

    const response = async () => {
        let isValid = isValidUser(account, password);
        if (isValid) {
            let userInfo = getUserInfo(account);
            return res.json({
                code: 0,
                message: '请求成功',
                result: {
                    status: 0,
                    desc: "登陆成功",
                    userInfo: userInfo,
                }
            });
        } else {
            return res.json({
                code: 0,
                message: '请求成功',
                result: {
                    status: -1,
                    desc: "登陆失败",
                    userInfo: null,
                }
            });
        }

    }

    response();
})

router.post('/register', (req, res) => {
    const { account, password } = req.body;

    const response = async () => {
        register(account, password);
        return res.json(MESSAGE.REGISTER_SUCCESS)
    }

    response();
})

module.exports = router;