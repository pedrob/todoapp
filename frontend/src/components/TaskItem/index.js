import React, { useState } from 'react';
import { FaPencilAlt, FaWindowClose, FaCheck } from 'react-icons/fa';

import { Item } from './styles';

export default function TaskItem({ task, onUpdate, onDelete }) {
	const [ isEditable, setIsEditable ] = useState(false);
	const [ taskItem, setTaskItem ] = useState({
		title: task.title,
		state: 'opened'
	});

	async function handleUpdate(id) {
		if (taskItem.title.length >= 3) {
			await onUpdate(id, taskItem);
		} else {
			alert('O título deve ter pelo menos 3 letras');
		}
		setTaskItem({ title: taskItem.title, state: 'opened' });
		setIsEditable(!isEditable);
	}

	async function handleComplete(id) {
		if (taskItem.title.length >= 3) {
			await onUpdate(id, { title: taskItem.title, state: 'completed' });
		} else {
			alert('O título deve ter pelo menos 3 letras');
		}
		setTaskItem({ title: taskItem.title, state: 'completed' });
	}

	async function handleDelete(id) {
		await onDelete(id);
	}

	return (
		<Item>
			<div
				style={{
					position: 'absolute',
					right: 10,
					top: 4
				}}
			>
				{task.state !== 'completed' && (
					<FaPencilAlt
						style={{
							color: '#3db37f',
							cursor: 'pointer'
						}}
						title="Editar tarefa"
						onClick={() => setIsEditable(!isEditable)}
					/>
				)}
				<FaWindowClose
					style={{
						marginLeft: 10,
						color: '#ff6961',
						cursor: 'pointer'
					}}
					title="Remover tarefa"
					onClick={() => handleDelete(task.id)}
				/>
			</div>
			{isEditable ? (
				<div className="wrapper">
					<div className="card-content">
						<input
							type="text"
							name="taskTitle"
							value={taskItem.title}
							onChange={(e) =>
								setTaskItem({
									title: e.target.value,
									state: 'opened'
								})}
							required
						/>
						<button onClick={() => handleUpdate(task.id)}>
							salvar alterações
						</button>
					</div>
				</div>
			) : (
				<div className="wrapper">
					{task.state === 'completed' ? (
						<div className="card-content">
							<strike>{task.title}</strike>
							<div title="Tarefa concluída" className="complete">
								<FaCheck className="check-complete" />
							</div>
						</div>
					) : (
						<div className="card-content">
							<span>{task.title}</span>
							<button
								className="incomplete"
								onClick={() => handleComplete(task.id)}
								title="Finalizar tarefa"
							>
								<FaCheck className="check-incomplete" />
							</button>
						</div>
					)}
				</div>
			)}
		</Item>
	);
}
