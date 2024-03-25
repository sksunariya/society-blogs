

const passwordResetMail = () => { 

    return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			.body-tag {
                font-size: 0.8rem;
			}

            h1{
                color: #ffffff00; 
                background-image: linear-gradient(to bottom, #833AB4, #FD1D1D, #FCB045); 
                background-clip: text;  
                font-size: 3rem; 
                font-weight: 700;
                margin: 0 auto;
            }
	
			.logocontainer {
				background: rgb(22, 29, 41); 
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                padding: 5px 0;
                margin: 5px 0;
			}

		</style>
	
	</head>
	
	<body class="body-tag">
        <div class="logocontainer">
            <h1>SocietyBlogs</h1>
        </div>
        <p>
            Dear User,
        </p>
        <br>
        <p>
            Your SocietyBlogs account's password was reset. 
        </p>
        <p>
            If it wasn't from you, then reply to this mail.
        </p>
        <br>
        <p>
            Best Regards,
        </p>
        <p>
            Team SocietyBlogs
        </p>
	</body>
	
	</html>`
    
    
}

module.exports = passwordResetMail;