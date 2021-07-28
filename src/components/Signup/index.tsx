import React, {useState} from 'react';

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { SignupStyle } from './style';
import SignUpValidation from './SignUpValidation';

const Signup: React.FC/*<{submitForm: any}>*/ = (/*{ submitForm }*/) => {

	const [showNameWarning, setNameWarning] = useState(false);
	const [showEmailWarning, setEmailWarning] = useState(false);
	const [showPassWarning, setPassWarning] = useState(false);
	const [disableConfirmPass, setDisableConfirmPass] = useState(true);
	const [showConfirmPassWarning, setConfirmPassWarning] = useState(false);

	const [passwordData, setPasswordData] = useState<string>();


	const handleName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		let validation = SignUpValidation.validateName(e.target.value);
		setNameWarning(!validation);

		if (validation) {
			
		}

	}

	const handleEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		let validation = SignUpValidation.validateEmail(e.target.value);
		setEmailWarning(!validation);

		if (validation) {

		}
	}

	const handlePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setPasswordData(e.target.value);

		let validation = SignUpValidation.validatePassword(e.target.value);
		setPassWarning(!validation);
		setDisableConfirmPass(!validation);
	}

	const handlePasswordConfirm = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setConfirmPassWarning(!(e.target.value == passwordData));
	}

	return (
		<>
			<div style={SignupStyle.bg}></div>
			<Grid style={SignupStyle.marginTop} >
				<Paper elevation={20} style={SignupStyle.paperStyle}>
					<div>
						<Grid item container justifyContent="center">
							<h2 style={SignupStyle.headerStyle}>Cadastro</h2>
							<Typography style={SignupStyle.descStyle} variant='caption' gutterBottom>Cadastre-se e descubra vários jogos e ferramentas!</Typography>
						</Grid>
					</div>
					<form style={SignupStyle.formStyle}>
						<div style={SignupStyle.inputRegionStyle}>
							<TextField style={SignupStyle.inputStyle} fullWidth label='Nome' placeholder="Insira seu nome" onChange={handleName}/>
							{
								showNameWarning?<span style={SignupStyle.warningStyle}>Insira um nome válido</span>:null
							}
						</div>
						<div style={SignupStyle.inputRegionStyle}>
							<TextField style={SignupStyle.inputStyle} fullWidth label='E-mail' placeholder="Insira seu e-mail" onChange={handleEmail}/>
							{
								showEmailWarning?<span style={SignupStyle.warningStyle}>Insira um e-mail válido</span>:null
							}
						</div>
						<div style={SignupStyle.inputRegionStyle}>
							<TextField style={SignupStyle.inputStyle} fullWidth label='Password' placeholder="Insira uma senha" onChange={handlePassword}/>
							{
								showPassWarning?<span style={SignupStyle.warningStyle}>Senha muito curta (mínimo de 8 dígitos)</span>:null
							}
						</div>
						<div style={SignupStyle.inputRegionStyle}>
							<TextField disabled={disableConfirmPass} style={SignupStyle.inputStyle} fullWidth label='Confirm Password' placeholder="Confirm your passwordData" onChange={handlePasswordConfirm}/>
							{
								showConfirmPassWarning?<span style={SignupStyle.warningStyle}>Senhas diferentes</span>:null
							}
						</div>
						<FormControlLabel
							control={<Checkbox name="checkedA" />}
							label="I accept the terms and conditions."
							style={SignupStyle.acceptStyle}
						/>
						<Button type='submit' variant='contained' color='primary' style={SignupStyle.buttonStyle}>Sign up</Button>
					</form>
				</Paper>
				<div style={SignupStyle.emptySpaceStyle}></div>
			</Grid>
		</>
	);
}

export default Signup;