export const validateName = (name: string) => name.trim().length > 4;
export const validateEmail = (email: string | null) => {
	return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
		String(email)
	);
};
export const validatePassword = (password: string) =>
	password.trim().length > 6;
