function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

   const alt = document.querySelector(".alt")
   if (html.classList.contains("light")) {
     alt.setAttribute(
       "alt",
       "Gabs with a serious look, wearing a red plaid shirt, beard, shoulder-length black hair, pastel pink gradient background"
     )
   } else {
     alt.setAttribute(
       "alt",
       "Gabs with a serious look, wearing a red plaid shirt, beard, shoulder-length black hair, lilac gradient background."
     )
   }

  }
