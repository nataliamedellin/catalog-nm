 document.addEventListener("DOMContentLoaded", (event) => {
    

    // Sidebar
    const sidebar = document.querySelector(".sidebar")

    const primaryMenu = document.querySelector(".primary-menu");

    // Seteamos posición del sidebar
    gsap.set(".sidebar", {
        xPercent: 100,
    })

    // Items del menu
    const menuItems = document.querySelectorAll(".sidebar ul li a");

    //  Seteamos items del menu
    gsap.set(menuItems, {
        autoAlpha: 0,
        yPercent: 100,
    });

    // Creamos un tween de la animación de los items del menu
    let itemsStagger = gsap.to(menuItems, {
        paused: true,
        stagger: .1,
        autoAlpha: 1,
        yPercent: 0,
    });

    // Creamos un tween de la animación del sidebar
    let tweenMenu = gsap.to(sidebar, {
        paused: true,
        duration: 1,
        xPercent: 0,
        // Callback para llamar a la animación del menú una vez finalizada la animación de apaertura del menú
        onComplete: () => {
          itemsStagger.play();
        }
    })

    // Botón para hacer la acción de apertura del menú
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
        console.log("click");
        // Llamamos al tween de apertura del menú
        tweenMenu.play();
    })

    // Botón para cerrar el menú
    const closeButton = document.querySelector(".close");

    // Evento de cierre
    closeButton.addEventListener("click", () => {
        // Llamamos a las animaciones del menú, en sentido contrario
        itemsStagger.reverse();
        tweenMenu.reverse();
    });



 /*cursor*/
const cursor = document.querySelector(".custom-cursor");

window.addEventListener ("mousemove", (e) => {
  
    gsap.to(cursor, {
    duration: 0.2,
    x: e.clientX,
    y: e.clientY,
    easing:"back.out",
  })
})




/*scroll trigger*/
let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
  
  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
     onUpdate: self => progressTo(self.progress)
    }
  });

});

// Animation por caractacteres

 gsap.registerPlugin(SplitText)

  const textChars = document.querySelector(".intro p");

  const splitChars = new SplitText(textChars, {
    type: "chars",
  })

  gsap.from(splitChars.chars, {
    duration: .5,
    opacity: 0,
    rotate: 3,
    color: "#FF98E9",
    y: 20,
    stagger: .02,
  })

 gsap.registerPlugin(ScrollTrigger);

  gsap.to(".intro", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.registerPlugin(ScrollTrigger);

gsap.to("body", {
  backgroundPositionY: "20%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 2, 
  }
});



    document.querySelectorAll(".innerContainer img").forEach((img) => {
      const originalSrc = img.getAttribute("src");
      const altSrc = img.getAttribute("data-alt");
      
      img.style.cursor = "pointer"; 
      
      img.addEventListener("mouseenter", () => {
        if (altSrc) img.setAttribute("src", altSrc);
      });

      img.addEventListener("mouseleave", () => {
        img.setAttribute("src", originalSrc);
      });
    });




    
  

  });