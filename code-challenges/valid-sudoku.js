var isValidSudoku = function(board) {
    let groups = {
        blocks: {},
        rows: [],
        columns: []
    }
    const { blocks, rows, columns } = groups

    //create groups
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            //identify block
            const block = `(${Math.floor(i/3)+1},${Math.floor(j/3)+1})`
            //create empty arrays
            if(!blocks.hasOwnProperty(block)) blocks[block] = []
            if(!rows[i]) rows[i] = []
            if(!columns[j]) columns[j] = []
            
            //push cell to groups
            if(cell !== '.') {
                blocks[block].push(cell)
                rows[i].push(cell)
                columns[j].push(cell)
            }            
        })
    })
    //convert groups and blocks objects to arrays, then flatten groups array
    groups.blocks = Object.values(blocks)
    groups = Object.values(groups).flat()

    //check for duplicates
    return console.log(!groups.some(group => new Set(group).size !== group.length))
}

isValidSudoku( 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])


