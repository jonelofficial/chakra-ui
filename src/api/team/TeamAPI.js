export const baseUrl = "https://625537e08646add390d2d4bd.mockapi.io/Teams";

//Fetch
export const getTeams = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//Delete
export const removeTeam = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return true;
};

//Get
export const getTeam = async ({ queryKey }) => {
  const [_key, { PARAMETER }] = queryKey;
  const response = await fetch(`${baseUrl}/${PARAMETER}`);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//Update
export const updateTeam = async ({ ID, ...data }) => {
  console.log("data :", data, " id :", ID);
  const response = await fetch(`${baseUrl}/${ID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//Create
export const createTeam = async (data) => {
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
    console.log("API TEAM POST ERROR: ", error);
  }
};
