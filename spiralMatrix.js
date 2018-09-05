function spiralMatrix(row, col) {
    let arr = [];
    for (let i = 0; i < row; i++) {
        arr[i] = new Array(col);
    }
    let num = 1;
    let cycle = 0;
    while (num <= row*col) {
        for (let c = cycle; c< col - cycle; c++) {
            arr[cycle][c] = num;
            num++;
        }


        for (let r = 1 + cycle; r < row - cycle ; r++) {

            arr[r ][arr.length - 1 - cycle] = num;
            num++

        }

        for (let c = col - 2 - cycle; c > cycle; c--) {

            arr[row - 1 - cycle][c] = num;
            num++

        }

        for (let r = row - 1 - cycle; r > cycle ; r--) {
            arr[r][cycle] = num;
            num++
        }

        cycle++;
    }
    console.log(arr.map(row => row.join(' ')).join('\n'));


}
spiralMatrix(5,5)