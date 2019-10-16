var hmlib = [0,1] 

function hm(n)
{
    if (n < 0) throw Error('hm:n < 0')
    if (hmlib[n] != null) return hmlib[n]
    hmlib[n] = 3*hm(n - 1) + 2*hm(n - 2)
    return hmlib[n]
}

var startTime = Date.now()
console.log('hm(100)=', hm(100))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)
