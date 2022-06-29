<template>
	<div class="main-auth">
		<div class="main-auth__title">Авторизация</div>
		<div class="main-auth-form">
			<div class="main-auth-form__title">LeadHit</div>
			<form class="main-auth-form__form" @submit.prevent="authSubmitForm">
				<input type="text" class="main-auth-form__form_input" :class="status($v.formAuth.idSite)"
					@blur="$v.formAuth.idSite.$touch()" v-model.trim="formAuth.idSite" placeholder="id сайта" />
				<div class="invalid-feed" v-if="
					$v.formAuth.idSite.$error ||
					($v.formAuth.idSite.$dirty &&
						!$v.formAuth.idSite.required)
				">
					{{ minLengthText }}
				</div>
				<div class="main-auth-form__btn">
					<button type="submit">Войти</button>
				</div>
			</form>
			<div v-if="isLoading">
				<LoadingComponent />
			</div>
		</div>
	</div>
</template>

<script>
import { minLength, maxLength, required } from "vuelidate/lib/validators";

import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
	name: "auth-view",
	data() {
		return {
			formAuth: {
				idSite: ""
			},
			isDisabledBtnSubmit: false,
			minLengthText: "id сайта должен содержать 24 символа",
			isLoading: false,
		}
	},
	methods: {
		status(validation) {
			return {
				"is-invalid": validation.$error,
			};
		},
		async authSubmitForm() {
			this.$v.$touch();
			if (this.$v.$invalid) {
				console.log("Error");
			} else {
				try {
					this.isLoading = true;
					this.isDisabledBtnSubmit = true;
					const resGetAuthRequest = await this.$store.dispatch("getAuthRequest", this.formAuth.idSite);
					if (resGetAuthRequest === true) {
						this.isLoading = false;
						this.$notify({
							title: 'Успех',
							message: 'Успешная авторизация',
							type: 'success'
						});
						this.$router.push("/analytic");
					} else {
						this.isLoading = false;
						this.$notify.error({
							title: 'Ошибка',
							message: 'Ошибка авторизация'
						});
					}
				} catch (error) {
					this.isLoading = false;
					this.isDisabledBtnSubmit = false;
					console.log("Error in authorizationSubmitForm in AuthView func -->", error);
				}
				console.log("Success");
			}
		}
	},
	components: {
		LoadingComponent
	},
	validations: {
		formAuth: {
			idSite: {
				required,
				minLength: minLength(24),
				maxLength: maxLength(24),
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.main-auth__title {
	font-size: 28px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

.main-auth-form {
	max-width: 380px;
	padding: 15px 35px 58px;
	margin: 20px auto;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
}

.main-auth-form__title {
	margin: 20px 0 30px;
	font-size: 28px;
}

.main-auth-form__form_input {
	outline: none;
	width: 100%;
	height: 34px;
	padding: 20px 12px;
	font-size: 14px;
	line-height: 1.428571429;
	color: #555;
	vertical-align: middle;
	background-color: #fff;
	background-image: none;
	border: 1px solid #ccc;
	border-radius: 4px;
}

.main-auth-form__form_input:focus {
	border: 1px solid RGB(102 175 233 / 60%);
}

.main-auth-form__btn {
	margin-top: 30px;
}

.main-auth-form__btn>button {
	cursor: pointer;
	width: 100%;
	padding: 10px 0;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 6px;
	color: #fff;
	background-color: #3498db;
	border-color: #285e8e;
	border: none;
}

.main-auth-form__btn>button:hover {
	color: #fff;
	background-color: #2f8dcd;
}

.is-invalid {
	font-size: 14px;
	border: 1px solid #dc3545;
}

.invalid-feed {
	margin-top: 5px;
	font-size: 14px;
	color: #dc3545;
}

@media (max-width: 568px) {
	.main-auth-form {
		max-width: 370px;
		padding: 15px 35px 49px;
	}

	.main-auth-form__title {
		margin: 15px 0 23px;
		font-size: 25px;
	}
}

@media (max-width: 428px) {
	.main-auth-form {
		max-width: 350px;
	}

	.main-auth-form__title {
		margin: 15px 0 20px;
		font-size: 25px;
	}

	.main-auth-form__form_input {
		font-size: 13px;
	}

	.is-invalid {
		font-size: 13px;
	}

	.invalid-feed {
		font-size: 13px;
	}

	.main-auth-form__btn>button {
		font-size: 16px;
	}
}

@media (max-width: 390px) {
	.main-auth-form {
		max-width: 320px;
		padding: 15px 30px 45px;
	}

	.main-auth-form__title {
		font-size: 22px;
	}

	.main-auth-form__form_input {
		font-size: 12px;
	}

	.is-invalid {
		font-size: 12px;
	}

	.invalid-feed {
		font-size: 12px;
	}
}

@media (max-width: 360px) {
	.main-auth-form {
		max-width: 300px;
		padding: 10px 30px 40px;
	}
}

@media (max-width: 320px) {
	.main-auth-form {
		max-width: 290px;
		padding: 7px 30px 37px;
	}

	.main-auth-form__title {
		margin: 15px 0 17px;
		font-size: 19px;
	}

	.main-auth-form__form_input {
		padding: 17px 12px;
	}

	.main-auth-form__btn {
		margin-top: 20px;
	}

	.main-auth__btn>button {
		padding: 9px 0;
		font-size: 15px;
	}
}
</style>