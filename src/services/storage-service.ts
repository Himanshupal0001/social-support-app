interface SavedData {
  data: unknown;
  timestamp: number;
}

const get = (key: string, expiry: number | null = null, session = false) => {
  const value = session
    ? sessionStorage.getItem(key)
    : localStorage.getItem(key);

  if (value) {
    const savedData: SavedData = JSON.parse(value);
    if (expiry === null || Date.now() - savedData.timestamp < expiry) {
      return savedData.data;
    }
    if (session) {
      sessionStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
    return null;
  }
  return null;
};

const set = (key: string, value: any, session = false) => {
  const valueToSave: SavedData = {
    data: value,
    timestamp: Date.now(),
  };
  if (session) {
    sessionStorage.setItem(key, JSON.stringify(valueToSave));
  } else {
    localStorage.setItem(key, JSON.stringify(valueToSave));
  }
};

const remove = (key: string) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

export const StorageService = {
  get,
  set,
  remove,
  clear,
};
