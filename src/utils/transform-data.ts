const mappingColumn = (cols: Array<string>) => {
    return cols.map((col: string) => ({
        Header: col,
        accessor: col,
        type: 'input'
    }))
}

export { mappingColumn }