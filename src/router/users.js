import express from 'express'
import { 
    MESSAGE,
    validate,
 } from '../config'

const router = express.Router();

router.post('/login', (req, res) => {
    const { account, password } = req.body;
    
    const response = async () => {
        let user = null;
        if (account === '18814098638' && password === 'AZaz1108') {
            user = account;
        }
        return res.json({
            code: 0,
            message: '请求成功',
            data: {
                user: user ? account : "",
                key: user ? 123456 : "",
            }
        })
    }

    response();
})

module.exports = router;