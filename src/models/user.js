import fs from 'fs'
import path from 'path'

import UserData from '../config/userdata.json'
import { MESSAGE } from '../config/index'

module.exports = {
    register(account, password) {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/userdata.json')));
        let userModel = {};
        userModel.accountInfo = {
            "account": account,
            "password": password
        };
        userModel.userInfo = {
            "account": null,
            "name": null,
            "sex": 0,
            "age": null,
            "university": null,
        };

        if (users.length === 0) {
            users[0] = userModel;
        } else {
            users.push(userModel);
        }

        // 这里检查用户是否已存在

        // 异步写入 json 文件
        fs.writeFile(path.join(__dirname, '../config/userdata.json'), JSON.stringify(users), (error) => {});
    },
    isValidUser(account, password) {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/userdata.json')));
        for (let index in users) {
            let item = users[index];
            if (item.accountInfo.account.toString() === account.toString() && item.accountInfo.password.toString() === password.toString()) {
                return true;
            }
        }
        return false;
    },
    getUserInfo(account) {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/userdata.json')));
        for (let index in users) {
            let item = users[index];
            if (item.accountInfo.account.toString() === account.toString()) {
                return item;
            }
        }
        return null;
    }
}