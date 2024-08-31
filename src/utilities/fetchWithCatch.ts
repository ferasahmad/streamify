export const fetchWithCatch = async (
  url: string,
  key: string,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string | null>>>
) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    return await response.json();
  } catch (err: any) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: err.message || "Failed to fetch data",
    }));
    console.error(err);
    return null;
  }
};
