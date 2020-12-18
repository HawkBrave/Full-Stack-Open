const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  return await fetch(baseUrl)
    .then(res => res.json());
}

const create = async body => {
  return await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => res.json());
}

const update = async (body, id) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => res.json());
}

const del = async id => {
  return await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export default {
  getAll,
  create,
  update,
  del
};