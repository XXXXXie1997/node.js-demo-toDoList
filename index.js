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
            let list
            try {
                list = JSON.parse(data.toString())
            } catch (err2) {
                list = []
            }
            const task = {
                title: taskName,
                done: false
            }
            list.push(task)
            const str = JSON.stringify(list)
            fs.writeFile(dbPath, str, (err3) => {
                if (err) {
                    console.log(err3)
                } else {
                    console.log("保存成功")
                }
            })
        }

    })
}