/* 
f(n) = 3*f(n-1) + 2*f(n-2)
f(0) = 0, f(1) = 1 
*/

function hm(n) {
    if (n < 0) throw Error('fibonacci:n < 0')
    if (n === 0) return 0
    if (n === 1) return 1
    return 3*(hm(n-1)) + 2*(hm(n-2))
}

var startTime = Date.now()
console.log('hm(100)=', hm(100))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)

