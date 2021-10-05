export const validateName = (name: string) => {
	if (name.length >= 4) {
		return true;
	}
	return false;
};

export const validateEmail = (email: string | null) => {
	return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
		String(email)
	);
};
export const validatePassword = (password: string) => password.length > 7;

export const isPasswordConfirm = (
	passwordConfirm: string,
	password: string
) => {
	return !!(
		validatePassword(passwordConfirm) && passwordConfirm === password
	);
};

export const showImg = (field: string, isValid: boolean) => {
	if (!field || !isValid) {
		return false;
	}
	return true;
};
