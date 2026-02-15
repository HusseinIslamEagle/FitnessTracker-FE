export const fetchExercises = async () => {
  const response = await fetch(
    "https://wger.de/api/v2/exerciseinfo/?language=2&limit=20"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();

  // exerciseinfo بيرجع results فيها name جاهز
  return data.results;
};
