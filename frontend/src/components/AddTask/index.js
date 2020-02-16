import React, { useState } from 'react';

import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

export default function AddTask({ onCreateTask }) {
	const [ task, setTask ] = useState({ title: '', state: 'opened' });

	async function handleCreate(event) {
		event.preventDefault();
		if (task.title.length >= 3) {
			await onCreateTask(task);
		} else {
			alert('O título deve ter pelo menos 3 letras');
		}
		setTask({ title: '', state: 'opened' });
	}

	return (
		<Container onSubmit={handleCreate}>
			<input
				type="text"
				name="taskTitle"
				placeholder="Digite o título da sua tarefa"
				value={task.title}
				onChange={(e) =>
					setTask({ title: e.target.value, state: 'opened' })}
				required
			/>
			<button title="Adicionar tarefa" type="submit">
				<MdAdd
					style={{
						fontSize: 20,
						color: '#fff'
					}}
				/>
			</button>
		</Container>
	);
}
