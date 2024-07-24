import fetchWithAuth from "@/lib/fetchWithAuth";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllPatients = async ( queryString = "" ) => {
  try {
    const response = await fetch(`${BASE_URL}/patients${queryString}`);

    const result = await response.json();

    console.log(result)

    return result;
    
  } catch (error) {
    console.log(error);

    return {
      status: "error",
      message: "Failed to get patients",
    };
  }
}

export const updatePatient = async (patientData) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/users/update-me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return { error: error.message };
  }
};
