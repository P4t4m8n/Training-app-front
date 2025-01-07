export const storeSessionData = <T>(key: string, value?: T | T[]): void => {
  // Remove the item from the session storage and return
  if (!value) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const getSessionData = <T>(key: string): T | null => {
  try {
    const storedItem = localStorage.getItem(key);
    if (!storedItem) return null;

    return storedItem ? JSON.parse(storedItem) : null;
  } catch (error) {
    console.error("getSessionData", "GENERAL_ERROR", error as Error);
    return null;
  }
};
