import React from 'react'
import Item from './Item'
import { MdDelete } from "react-icons/md"


export default function List(props) {
    return ( <
        >
        <
        ul className = 'list' > {
            props.expenses.map((expense) => {

                return ( <
                    Item key = { expense.id }
                    expense = { expense }
                    handleEdit = { props.handleEdit }
                    handleDelete = { props.handleDelete }
                    />
                )
            })
        } <
        /ul> {
            props.expenses.length > 0 && < button className = 'btn'
            onClick = { props.clearItems } > clear items < MdDelete className = 'btn-icon' / > < /button>} <
                />
        )
    }