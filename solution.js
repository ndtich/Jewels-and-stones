// ------Challenge------
// Strings J representing the types of stones that are jewels, and S representing the
// stones you have. Each character in S is a type of stone you have. You want to know how
// many of the stones you have are also jewels.

const countJewels = (j, s) => {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (j.includes(s[i])) {
            count ++
        }
    }
    return count
}

console.log(countJewels('aA', 'aAAbbb'))
console.log(countJewels('z', 'ZZ'))