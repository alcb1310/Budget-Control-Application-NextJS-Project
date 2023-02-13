import { CompanyInterface } from '@/types';

export interface UserInterface {
	uuid: string;
	name: string;
	email: string;
	company: CompanyInterface | null | string;
}
