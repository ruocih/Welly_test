function reverseString(str) {
    // 將字串轉換成陣列，反轉，然後再轉回字串
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

