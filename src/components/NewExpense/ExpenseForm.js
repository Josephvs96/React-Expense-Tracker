import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	title: '',
	// 	amount: '',
	// 	date: '',
	// });

	const titleChangeHandler = (e) => {
		// setUserInput((prevState) => {
		// 	return { ...prevState, title: e.target.value };
		// });
		setTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		// setUserInput((prevState) => {
		// 	return { ...prevState, amount: e.target.value };
		// });
		setAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		// setUserInput((prevState) => {
		// 	return { ...prevState, date: e.target.value };
		// });
		setDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};

		props.onExpenseSubmit(expenseData);

		setTitle('');
		setAmount('');
		setDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={title} onChange={titleChangeHandler} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={amount}
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						value={date}
						onChange={dateChangeHandler}
						type="date"
						min="2019-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense-actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
