export const baseUrl = "https://625537e08646add390d2d4bd.mockapi.io/Todolist";

// Fetch
export const getTodolists = async () => {
  try {
    const response = await fetch(baseUrl);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log("API GET ERROR: ", error);
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
