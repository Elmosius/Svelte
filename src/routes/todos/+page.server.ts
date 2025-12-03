let todos = [];

export async function load() {
	return {
		todos: todos
	};
}

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const todo = data.get('todo');
		todos.push({
			id: Math.floor(Math.random() * 10000),
			name: todo
		});
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		todos = todos.filter((todo) => todo.id !== parseInt(id));
	}
};
