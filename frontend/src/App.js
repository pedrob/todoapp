import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';
import Header from './components/Header';

import api from './services/api';

function App() {
	const [ tasks, setTasks ] = useState([]);

	useEffect(() => {
		async function loadTasks() {
			const response = await api.get('tasks');
			setTasks(response.data.content);
		}
		loadTasks();
	}, []);

	async function updateTask(id, data) {
		const response = await api.put(`tasks/${id}`, data);
		setTasks((prev) =>
			prev.map((task) => {
				return task.id === id ? { ...task, ...response.data } : task;
			})
		);
	}

	async function deleteTask(id) {
		await api.delete(`tasks/${id}`);
		setTasks(tasks.filter((task) => task.id !== id));
	}

	async function createTask(data) {
		const response = await api.post('tasks', data);
		setTasks([ ...tasks, response.data ]);
	}

	console.log(tasks);

	return (
		<Container>
			<Header />
			<AddTask onCreateTask={createTask} />
			<ul
				style={{
					padding: 0,
					maxWidth: 500,
					width: '100%',
					marginTop: 20
				}}
			>
				{tasks.map((task) => (
					<TaskItem
						task={task}
						onUpdate={updateTask}
						onDelete={deleteTask}
					/>
				))}
			</ul>
		</Container>
	);
}

export default App;
