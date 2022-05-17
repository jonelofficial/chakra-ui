export const baseUrl = "https://625537e08646add390d2d4bd.mockapi.io/Todolist";

// Fetch
export const getTodolists = async () => {
  try {
    const response = await fetch(baseUrl);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log("API FETCH ERROR: ", error);
  }
};

// Update
export const updateTodolist = async ({ ID, ...data }) => {
  try {
    const response = await fetch(`${baseUrl}/${ID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log("API PUT ERROR: ", error);
  }
};

// Create
export const createTodo = async (data) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log("API POST ERROR: ", error);
  }
};

// Delete
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (response) {
      return true;
    }
  } catch (error) {
    console.log("API DELETE ERROR: ", error);
  }
};

// Get
export const getTodo = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log("API GET ERROR: ", error);
  }
};
