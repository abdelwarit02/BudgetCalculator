import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function Item(props) {
    return ( <
        >
        <
        li className = 'item' >
        <
        div className = 'info' >
        <
        span className = 'expense' > { props.expense.charge } < /span> <
        span className = 'amount' > $ { props.expense.amount } < /span> <
        span className = 'expense' > { props.expense.charge } < /span>

        <
        /div> <
        div >
        <
        button className = 'edit-btn'
        onClick = {
            () => props.handleEdit(props.expense.id) } > < MdEdit / > < /button> <
        /div> <
        div >
        <
        button className = 'clear-btn'
        onClick = {
            () => props.handleDelete(props.expense.id) } > < MdDelete / > < /button> <
        /div>

        <
        /li>

        <
        />
    )
}