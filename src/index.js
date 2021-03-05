module.exports = function check(str, bracketsConfig) {
    let mas = [];
    let brackets = new Map(bracketsConfig);

    for (let i = 0; i < str.length; i++) {

        if (str[i] == brackets.get(mas[mas.length - 1])) {
            mas.pop();
        } else {
            mas.push(str[i])
        }

    }

    return mas.length !== 0 ? false : true;
}

