export type CompanyCreateFields = {
  id?: number;
  logo?: string;
  ems_username?: string;
  ems_password?: string;
};

export type CompanyEditFields = {
  english_name?: string;
  logo?: string;
  active?: number;
  title?: string;
};

export type CompanyChangePassword = {
  old_password: string;
  new_password: string;
};
