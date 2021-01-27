const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
  return await fetch(baseUrl).then(response => response.json());
}

const create = async newObject => {
  return await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObject)
  }).then(response => response.json());
}

const update = async (id, newObject) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObject)
  }).then(response => response.json());
}

export default {getAll, create, update};