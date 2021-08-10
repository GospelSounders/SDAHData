const fs = require("fs");

let main = async () =>{
    let index = {}
    let tmp = fs.readFileSync("list.txt", "utf-8")
    tmp = tmp.split("\n");
    let titles = tmp.filter(item=>item.match(/<key>/)).map(item=>item.replace(/<[^>]*>/g, ''))
    let numbers = tmp.filter(item=>item.match(/<string>/)).map(item=>item.replace(/<[^>]*>/g, '').replace(/ .*/, ''))
    // for(let i in index)
    console.log(titles.length)
    console.log(numbers.length)
    titles.map((item, ind)=>{
        index[item] = numbers[ind]
    })
    for(let title in index){
        let number = index[title]
        fs.renameSync(`${}`)
    }
    console.log(index)
    // console.log(numbers)
}
main()