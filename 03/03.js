var hmlib = [0,1] 

function hm(n)
{
    if (n < 0) throw Error('hm:n < 0')
    if (hmlib[n] != null) return hmlib[n]
    hm0 = 0
    hm1 = 1
    for(i = 2; i <= n; i++)
    {
        hmlib[n] = 3*hm1 + 2*hm0
        hm0 = hm1
        hm1 = hmlib[n]
    }
    return hmlib[n]
}

var startTime = Date.now()
console.log('hm(100)=', hm(100))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)