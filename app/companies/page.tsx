import { CompanyInterface } from '@/types';

async function getCompanies(): Promise<CompanyInterface[]> {
	const res = await fetch(`${process.env.SERVER}/api/companies/get`);

	if (!res.ok) console.log(res);

	return res.json();
}

export default async function Company() {
	const data: CompanyInterface[] = await getCompanies();

	return (
		<div>
			<h1>Company</h1>
			<table className='table table-auto text-dark'>
				<thead className='bg-dark text-light'>
					<tr>
						<th className='px-5'>Id</th>
						<th className='px-5'>ruc</th>
						<th className='px-5'>name</th>
						<th className='px-5'>employees</th>
						<th className='px-5'>active</th>
					</tr>
				</thead>
				<tbody>
					{data.map((company) => (
						<tr key={company.uuid}>
							<td className='px-5'>{company.uuid}</td>
							<td className='px-5'>{company.ruc}</td>
							<td className='px-5'>{company.name}</td>
							<td className='px-5'>{company.employees}</td>
							<td className='px-5'>{company.isActive ? 'Yes' : 'No'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
