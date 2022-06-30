
let fs = require('fs')

let l = a => console.dir(a, {depth: null})

let input = fs.readFileSync('db.html', {encoding: 'utf-8'})

// let ar = [...input.matchAll(/\<pre\>(.*)\<\/pre\>/gm)]

// l(ar.length)

let ar = input.split('<pre>')
ar = ar.filter((a,i) => i)
ar = ar.map(a => a.split('</pre>')[0] )
ar = ar.filter((a,i) => i && i!=ar.length-1)
let str = ar.map(a => a.split('\n').filter(l => /[^\s]/.test(l)).join('\n')).join('\n')
ar = str.split('\n').map(a => a.split('\t').filter((a,i) => i))

ar = ar.filter(l => {
    for (let i = 0; i<l.length; i++) {
        if (l[i]=='?') return false
    }
    return true
})

ar = ar.map(l => [l[0],l[1],l[2],l[3],l[6],l[9]]).sort((a,b)=>Number(a[1])-Number(b[1]))

str = ar.join('\n')

// l(ar.length)
// for (let i = 0; i<ar.length; i++) {
//     l(`${i}: ${ar[i].substring(0,100)}`)
// }

fs.writeFileSync('db.txt', str, {encoding: 'utf-8'})

// function stringify(n) {
//     return n.map(a => `\n[\n${a}\n]\n`).join('')
// }

function stringify(n) {
    return n.join('\n')
}