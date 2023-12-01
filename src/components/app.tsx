import { useState } from 'react';
import '../styles/app.css';

const topics: Array<String> = [
	'Behavorial Questions',
	'Capitals',
	'Computer Fundamentals',
	'Concurrency',
	'Currency',
	'Data Structrues',
	'Docker',
	'Fastapi',
	'Go',
	'Java',
	'Kubernetes',
	'MongoDB',
	'Multithreading',
	'Python',
	'Spring',
	'SQL',
	'System Design',
]

export default function App() {
	let currentlySelectedTopic = -1;
	const [currTopics, setTopics] = useState(topics);

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const query: String = e.target.value;
		setTopics(() => {
			return topics.filter(topic =>
				topic.toLowerCase().includes(query.toLowerCase())
		)})
	}

	function onClickFunction(e: any) {
		const topic = e.target.value;
		currentlySelectedTopic = topic;
		// ask the user if he wants is ready to change the subject
		// if yes
		// change the topic
		// and show a button to start the interview
	}

	return (
		<div className='container'>

			<header className='header'>
				<h1>2KIQ</h1>
				<nav className='navbar'>
					About
				</nav>
			</header>

			<section className='search'>
				<input type='text' placeholder='Search ...' onChange={onChange}></input>
				<div className='filter-topics'>
				{
					currTopics.map(topic => {
						return (
							<div className='topics' onClick={onClickFunction} key={topics.indexOf(topic)}>{topic}</div>
						)
					})
				}
				</div>
			</section>

			<main className='main'>
				<div className='main-container'>
				</div>
			</main>

		</div>
	)
}
