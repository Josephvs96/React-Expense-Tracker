import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expencesContent = (
		<div className="info">
			<FontAwesomeIcon icon={'info-circle'} size="3x"></FontAwesomeIcon>
			<h2>No expenses found!</h2>
		</div>
	);

	if (filteredExpenses.length > 0) {
		expencesContent = filteredExpenses.map((item) => (
			<ExpenseItem key={item.id} expense={item} />
		));
	}

	return (
		<Card className="expences-container">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			{expencesContent}
		</Card>
	);
}

export default Expenses;
