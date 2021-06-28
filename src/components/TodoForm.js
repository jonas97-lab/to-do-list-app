import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput('');
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder={props.edit ? 'Update your item' : 'Add a todo'}
				value={input}
				name='text'
				className={props.edit ? 'todo-input edit' : 'todo-input'}
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className={props.edit ? 'todo-button edit' : 'todo-button'}>
				{props.edit ? 'Update' : 'Add a todo'}
			</button>
		</form>
	);
}

export default TodoForm;
