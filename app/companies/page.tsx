async function getCompanies() {
	const res = await fetch(`${process.env.SERVER}/api/getCompanies`);

	if (!res.ok) console.log(res);

	return res.json();
}

export default async function Company() {
	const data = await getCompanies();
	console.log(data);
	return <h1>Company</h1>;
}
