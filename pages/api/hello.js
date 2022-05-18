// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getContacts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();
  data.forEach(element => {
      element[`favorite`] = false
  });
  {console.log('array che viene da file hello -->' , data)}
  return data;
}

