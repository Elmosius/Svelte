export async function load({ data }) {
	return {
		todos: [...data.todos, { id: 0, name: 'ini dari client' }]
	};
}
