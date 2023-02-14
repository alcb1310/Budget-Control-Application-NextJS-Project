// 'use client';

import { CompanyInterface, ErrorInterface } from '@/types';
import { getCompanies } from '../helpers/getCompanies';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

export default async function Company() {
	const session = await getServerSession();

	if (session === null || !('user' in session)) return <h1>Unauthorized</h1>;
	const { user } = session;

	const companyData: CompanyInterface[] | ErrorInterface = await getCompanies(
		user?.email
	);

	if ('errorStatus' in companyData) {
		return (
			<>
				<h1 className='text-3xl text-dark'>
					<span className='text-red-800'>{companyData.errorStatus}</span>
					{companyData.errorDescription}
				</h1>
				<p>{companyData.errorDescription}</p>
			</>
		);
	}

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
					{companyData.map((company) => (
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
