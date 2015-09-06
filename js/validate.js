

// validate signup form on keyup and submit
		$("#register").validate({
			rules: {
				f_name: "required",
				l_name: "required",
				u_name: {
					required: true,
					minlength: 2
				},
				password: {
					required: true,
					minlength: 5
				},
				c_password: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				email: {
					required: true,
					email: true
				},
				
				checkbox: "required"
			},
			messages: {
				f_name: "Please enter your firstname",
				l_name: "Please enter your lastname",
				u_name: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				c_password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				},
				email: "Please enter a valid email address",
				checkbox: "Please accept our policy",
			
			}
		});
		