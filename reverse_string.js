s = ["h","e","l","l","o"]


var reverseString = function(s) {
    let first = 0
    let last = s.length - 1

    while( first <= last) {
        let temp = s[first]
        s[first] = s[last]
        s[last] = temp
        first++
        last--
    }
    return s
}

console.log(reverseString(s));