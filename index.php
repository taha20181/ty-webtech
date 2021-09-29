<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>FORM HTML</title>
    <link rel='stylesheet' href="style.css" />
</head>

<body>
    <div class="container">
        <div class="column1">
            <form action="form.php" id="form" class="form" method="POST">
                <h2>Sign Up</h2>
                <div class="form-control">
                    <label for='f_name'>First Name</label>
                    <input type="text" id="first name" name="f_name" 
                    placeholder="Enter first name">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for='username'>Last Name</label>
                    <input type="text" id="last name" name="l_name" 
                    placeholder="Enter last name">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="gender">Select Gender</label>
                    <select id="gender" name="gender">
                        <option value="" selected disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="na">Prefer not to say</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for='email'>Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter email">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for='password'>Password</label>
                    <input type="password" id="password" name="password" 
                    placeholder="Enter password">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for='cmf_password'>Confirm Password</label>
                    <input type="password" id="confirm password" name="cnf_password" 
                    placeholder="Enter password again ">
                    <small>Error message</small>
                </div>
                <button>Submit</button>
            </form>
        </div>
        <div class="column2">
            <img src="https://i.ibb.co/k5NNz4F/pablo-sign-up.png" 
            alt="pablo-sign-up" border="0" class='signup-image'>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" 
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
    crossorigin="anonymous"></script>

    <script src="js/script.js"></script>
</body>

</html>