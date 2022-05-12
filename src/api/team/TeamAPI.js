export const baseUrl = "https://625537e08646add390d2d4bd.mockapi.io/Teams";

//Fetch
export const getTeams = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//Remove
export const removeTeam = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return true;
};
