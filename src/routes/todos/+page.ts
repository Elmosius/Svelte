export async function load({ data }) {
	return {
		todos: [...data.todos, 'From Client Load Function']
	};
}
