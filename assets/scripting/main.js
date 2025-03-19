document. querySelector ("header"). innerHTML += `
 <nav class="navbar navbar-expand-lg navbar-light bg-black sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex flex-row" href="#">
                <img src="assets/img/logo.webp" alt="Logo" width="30" height="24" class="d-inline-block align-text-top rounded-circle" style="height: 50px;width: 50px;"><div class="fw-bold mt-2 ms-2" style="color: goldenrod;">Timeluxe</div> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html" style="color: goldenrod;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Gallery.html" style="color: goldenrod;">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.html" style="color: goldenrod;">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="About.html" style="color: goldenrod;">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`
document. querySelector ("footer"). innerHTML +=`
<footer class="bg-black text-white pt-5 pb-4 mt-5">
        <div class="container text-center text-md-start">
            <div class="row">
                <!-- Left Section: Logo & Description -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style="color: goldenrod;">
                    <h5 class="text-uppercase fw-bold mb-4 d-flex">
                        <img src="assets/img/logo.webp" alt="Logo" width="30" height="24" class="d-inline-block align-text-top h-75 w-25 rounded-circle"><div class="fw-bold mt-4 ms-2">Timeluxe</div> 
                    </h5>
                    <p>
                        Join our community and stay updated with the latest news, articles, and resources directly in your inbox.
                    </p>
                    <form class="d-flex"style="color: goldenrod;">
                        <input type="email" class="form-control me-2" placeholder="Enter your email">
                        <button style="color: #000;background: goldenrod;" type="submit">Join</button>
                    </form>
                </div>

                <!-- Center Section: Quick Links -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style="color: goldenrod;">
                    <h6 class="text-uppercase fw-bold mb-4">Quick Links</h6>
                    <p><a href="#" class="text-decoration-none"style="color: goldenrod;">Home</a></p>
                    <p><a href="#" class="text-decoration-none"style="color: goldenrod;">Gallery</a></p>
                    <p><a href="#" class="text-decoration-none"style="color: goldenrod;">Contact</a></p>
                    <p><a href="#" class="text-decoration-none"style="color: goldenrod;">Feedback</a></p>
                </div>

                <!-- Right Section: Social Media Links -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4"style="color: goldenrod;">Follow Us</h6>
                    <a href="#" class="text-white me-3"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-white me-3"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-white me-3"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-white me-3"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>

            <!-- Bottom Section: Policies -->
            <hr class="mb-4">
            <div class="row"style="color: goldenrod;">
                <div class="col-md-8 col-lg-8">
                    <p>&copy; 2023 BrandName. All rights reserved.</p>
                </div>
                <div class="col-md-4 col-lg-4"style="color: goldenrod;">
                    <a href="#" class="text-decoration-none me-3"style="color: goldenrod;">Privacy Policy</a>
                    <a href="#" class="text-decoration-none me-3"style="color: goldenrod;">Terms of Use</a>
                    <a href="#" class="text-decoration-none"style="color: goldenrod;">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
`