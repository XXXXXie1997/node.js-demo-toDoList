const fs = require('fs');

const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const path = require('path')
const dbPath = path.join(home, '.todo')

module.exports.create = (taskName) => {
    fs.readFile(dbPath, { flag: 'a+' }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let list = !data.toString() ? [] : JSON.parse(data.toString())
            list.push({
                title: taskName,
                done: false
            })
            fs.writeFile(dbPath, JSON.stringify(list), (err3) => {
                if (err3) {
                    console.log(err3)
                } else {
                    console.log("保存成功")
                }
            })
        }

    })
}