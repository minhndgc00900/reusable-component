
## Installation

  
  

```sh

// with npm

npm install @savvycom/dynamic-table

  

// with yarn

yarn add @savvycom/dynamic-table
```

  

## Usage

  

Here is a quick example to get you started, **it's all you need**:

  

Yes, it's really all you need to get started as you can see in this live and interactive demo:

  

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/confident-smoke-w3y9e?file=/src/App.tsx)

## Components



| Name  | Description | 
| --------------------- | --------------------------- |
| TableUI | Table data 
| Filter | Table filter  
| NavigationUI | Horizontal Navigation bar 
| PaginationUI| Pagination
| Sidebar| Sidebar 


## API

### TableUI
| Name  | Type | Description |
| --------------------- | --------------------------- | ----------------- | 
| columnResponse  | Array<Column< object >>  |  column names of table
| dataResponse  | Array< object >  |  data
| api | string  |  url to call api
| sortConfig  | ISortField or Null |  config sorted fields
| onHandleSort  | Function  |  handling sorted fields
| totalPage | number |  The total number of pages.
| totalCount | number |  The total number of items.
| allowFilter | boolean |  enable filter.
| allowPagination | boolean |  enable pagination.
| onChangePage | Function |  on handle changing page
| onHandleFilter | Function |  on handle filtering

### Filter
| Name  | Type | Description |
| --------------------- | --------------------------- | ----------------- | 
| condition  | IFilter  |  condition of filter
| onHandleFilter | Function  |  handling filter
| columns  | Array<Column< object >>|  columned filter

### PaginationUI
| Name  | Type | Description |
| --------------------- | --------------------------- | ----------------- | 
| currentPageIndex| number |  current page index number
| pageCount| number |  handling filter
| onChangePage| Function |  on handle change page number

  

## License

  

This project is licensed under the terms of the

[MIT license](/LICENSE).