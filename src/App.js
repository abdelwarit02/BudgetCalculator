import "./App.css";

import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
    const initialexpenses = [
        { id: 1, charge: "recent", amount: 1600 },
        { id: 2, charge: "car payment", amount: 400 },
        { id: 3, charge: "credit car bill", amount: 700 },
    ];
    const [expenses, setExpenses] = useState(initialexpenses);
    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState("");
    const [alert, setAlert] = useState({ show: false });
    const [id, setId] = useState(expenses.length)
    const [edit, setEdit] = useState(false)
        ////
    const handleCharge = (e) => {
        setCharge(e.target.value);
    };
    const handleAmount = (e) => {
        setAmount(e.target.value);
    };
    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                let tempexpenses = expenses.map((item) => {
                    return item.id === id ? {...item, charge, amount } : item
                })
                setExpenses(tempexpenses);
                setEdit(false)
            } else {

                const singleExpense = {
                    id: id + 1,
                    charge: charge,
                    amount: amount,
                };
                setExpenses([...expenses, singleExpense])
                handleAlert({ type: "success", text: "item added" });
            }


            setAmount("");
            setCharge("");

        } else {
            handleAlert({
                type: "danger",
                text: `charge can't be empty value and amount must be bigger than 0`,
            });
        }
    };
    ///
    const handleDelete = (id) => {
        let tempexpenses = expenses.filter((item) => item.id !== id);
        setExpenses(tempexpenses);
        handleAlert({ type: "danger", text: `item deleted` });
    };
    const handleEdit = (id) => {
        let expense = expenses.find((item) => item.id === id);
        let { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setId(id);
        setEdit(true)
        console.log(id)


    };
    const clearItems = () => {
        setExpenses([]);
    };
    return ( <
        > {
            alert.show && < Alert type = { alert.type }
            text = { alert.text }
            />} <
            h1 > Budget Calculator < /h1> <
            main className = "App" >
            <
            Form
            charge = { charge }
            amount = { amount }
            handleCharge = { handleCharge }
            handleAmount = { handleAmount }
            handleSubmit = { handleSubmit }
            edit = { edit } >
            < /Form> <
            List
            expenses = { expenses }
            handleDelete = { handleDelete }
            handleEdit = { handleEdit }
            clearItems = { clearItems }

            >

            <
            /List> <
            /main> <
            div className = "totalSpending" >
            <
            h3 className = "totalhead" > Total spending: < /h3> <
                span className = "total" >
                $ {
                    expenses.reduce((sum, cur) => {
                        return sum + parseInt(cur.amount);
                    }, 0)
                } <
                /span> <
                /div> <
                />
        );
    }

    export default App;