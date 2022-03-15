//'user', 'role', 'create at', 'status'
import { Column } from "react-table";

export const fakeColumn: Column<object>[] = [
    {
        Header: 'Age',
        accessor: 'age',
    },
    {
        Header: 'Visits',
        accessor: 'visits',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Profile Progress',
        accessor: 'progress',
    },
]

export const data: Array<object> = [
    {
        id: 1,
        age: `${Math.floor(Math.random() * 30)}`,
        visits: `${Math.floor(Math.random() * 100)}`,
        progress: `${Math.floor(Math.random() * 100)}`,
        status: 'single',
    },
    {
        id: 2,
        age: `${Math.floor(Math.random() * 30)}`,
        visits: `${Math.floor(Math.random() * 100)}`,
        progress: `${Math.floor(Math.random() * 100)}`,
        status: 'single',
    },
    {
        id: 3,
        age: `${Math.floor(Math.random() * 30)}`,
        visits: `${Math.floor(Math.random() * 100)}`,
        progress: `${Math.floor(Math.random() * 100)}`,
        status: 'single',
    },
    {
        id: 4,
        age: `${Math.floor(Math.random() * 30)}`,
        visits: `${Math.floor(Math.random() * 100)}`,
        progress: `${Math.floor(Math.random() * 100)}`,
        status: 'single',
    },
    {
        id: 5,
        age: `${Math.floor(Math.random() * 30)}`,
        visits: `${Math.floor(Math.random() * 100)}`,
        progress: `${Math.floor(Math.random() * 100)}`,
        status: 'single',
    },
]