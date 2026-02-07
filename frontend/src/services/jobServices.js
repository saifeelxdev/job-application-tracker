export async function createJob(jobdetails) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Authentication token not found');
  }

  const response = await fetch('http://localhost:5000/api/recruiter/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(jobdetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Unknown Error Occured');
  }

  return data;
}
