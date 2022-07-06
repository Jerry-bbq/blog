var testStr = 'abcdaabbsssss'

var testStrArr = testStr.split("").sort();
let startIndex = 0;
let endIndex = 1;
let maxNum = 0;
let validWords = [];

// 使用指针法，获取最大重复次数及最大次数对应的字符数组
while (startIndex < testStrArr.length) {
    // startIndex 和 endIndex 位置的字符不同
    if (testStrArr[startIndex] !== testStrArr[endIndex]) {
        // 计算 startIndex 和 endIndex 之间的字符个数
        const rangeNum = endIndex - startIndex;
        if (rangeNum > maxNum) {
            maxNum = rangeNum;
            // 如果出现了新的最大次数，则给存放符合条件字符的数组重新赋值
            validWords = [testStrArr[startIndex]];
        } else if (rangeNum === maxNum) {
            // 如果新的次数和最大次数相等，则将该字符 push 进字符数组
            validWords.push(testStrArr[startIndex]);
        }
        startIndex = endIndex;
    }
    endIndex++;
}
console.log(validWords)
// 打印结果
for (let index = 0; index < validWords.length; index++) {
    const word = validWords[index];
    console.log(`重复次数最多的是：${ word }，重复次数为：${ maxNum }`)
}