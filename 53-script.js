const navbarNavigation = document.querySelector(".navbar-navigation");
        const navBtn = document.querySelector(".nav-btn");
        const navbarContent = document.querySelector(".navbar-content");
        navBtn.addEventListener("click", () => {
            navbarContent.style.display = "flex";
            navbarContent.style.flexDirection = "column";
            navbarNavigation.style.alignItems = "center"
            navbarNavigation.style.justifyContent = "center"
            navBtn.style.display = "none";
        });

        document.addEventListener("click", (event) => {
            const isClickedonMenu = navbarContent.contains(event.target);
            const isClickedOnMenuIcon = navBtn.contains(event.target);
            if (!isClickedonMenu && !isClickedOnMenuIcon) {
                navbarContent.style.display = "";
                navbarContent.style.flexDirection = "";
                navbarNavigation.style.alignItems = ""
                navbarNavigation.style.justifyContent = ""
                navBtn.style.display = "";
            }
        });