

const queryTeamMail = (name, email, phone, description) => { 

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
            Details of person who raised the query.
        </p>
        <p>
            Name: ${name}
        </p>
        <p>
            Email Id: ${email}
        </p>
        <p>
            Phone: ${phone}
        </p>
        <br>
        <p>
            Description of Query:
        </p>
        <p>
            ${description}
        </p>
	</body>
	
	</html>`
    
    
}

module.exports = queryTeamMail;